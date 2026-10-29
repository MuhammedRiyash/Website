/**
 * Deferred lead-capture pop-up — trigger only. This tiny module watches for intent and, on the first
 * trigger, dynamically imports `lead-popup.ts`, which builds and opens the dialog. Nothing of the
 * dialog (markup, styles, logic) is in the initial page payload.
 *
 * Triggers (first wins, once per session; never for 30 days after a successful pop-up submit):
 *  1. Scrolled past 50% of the page after ≥ 8 s on the page.
 *  2. Desktop exit intent: pointer leaves through the top edge after ≥ 8 s.
 *  3. Touch exit intent: fast upward scroll (≥ 25% of the viewport within 300 ms) after passing 40%.
 */
import { SESSION_KEY, SUBMITTED_KEY, SUBMIT_COOLDOWN_MS } from './lead-popup-keys';

const MIN_TIME_MS = 8000;

function suppressed(): boolean {
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return true;
    const submitted = Number(localStorage.getItem(SUBMITTED_KEY) || 0);
    if (submitted && Date.now() - submitted < SUBMIT_COOLDOWN_MS) return true;
  } catch {
    return true; // storage blocked: stay quiet rather than risk showing it on every page
  }
  return Boolean(navigator.webdriver) || /bot|crawl|spider|slurp|lighthouse|headless|preview/i.test(navigator.userAgent);
}

if (!suppressed()) {
  const start = performance.now();
  const root = document.documentElement;
  const isTouch = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
  let engagedWithForm = false;
  let fired = false;
  let samples: { t: number; y: number }[] = [];
  let lastY = scrollY;

  const longEnough = () => performance.now() - start >= MIN_TIME_MS;

  const fire = async () => {
    // Never interrupt the inline form (focused now or used earlier), an open mobile menu, or another open dialog.
    if (document.activeElement?.closest('[data-contact-form]')) engagedWithForm = true;
    if (fired || engagedWithForm || root.classList.contains('menu-open') || document.querySelector('dialog[open]')) return;
    fired = true;
    window.removeEventListener('scroll', onScroll);
    document.removeEventListener('mouseout', onMouseOut);
    document.removeEventListener('focusin', onEngage);
    document.removeEventListener('submit', onEngage, true);
    try {
      sessionStorage.setItem(SESSION_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    // Dynamic import on purpose: the dialog module must stay out of the initial payload until a trigger fires.
    const { openLeadPopup } = await import('./lead-popup');
    openLeadPopup();
  };

  function onScroll() {
    const now = performance.now();
    const maxScroll = Math.max(1, root.scrollHeight - innerHeight);
    if (scrollY / maxScroll >= 0.5 && longEnough()) {
      void fire();
      return;
    }
    const prevY = lastY;
    lastY = scrollY;
    if (!isTouch) return;
    samples = samples.filter((s) => now - s.t <= 300);
    // A new burst starts from where the page was resting before this scroll event.
    if (samples.length === 0) samples.push({ t: now, y: prevY });
    samples.push({ t: now, y: scrollY });
    const peak = Math.max(...samples.map((s) => s.y));
    if (peak / maxScroll >= 0.4 && peak - scrollY >= innerHeight * 0.25) void fire();
  }

  function onMouseOut(event: MouseEvent) {
    if (event.relatedTarget === null && event.clientY <= 0 && longEnough()) void fire();
  }

  // The inline enquiry form wins: once someone focuses or submits it, never interrupt them.
  function onEngage(event: Event) {
    if ((event.target as Element | null)?.closest?.('[data-contact-form]')) engagedWithForm = true;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('mouseout', onMouseOut);
  document.addEventListener('focusin', onEngage);
  document.addEventListener('submit', onEngage, true);
}
