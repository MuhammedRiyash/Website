/**
 * Lead-capture pop-up, loaded on demand by `lead-popup-trigger.ts`. Builds a native modal <dialog>
 * (styles included) from the JSON config that Base.astro embeds as #lead-popup-config.
 */
import { SUBMITTED_KEY } from './lead-popup-keys';

interface Config {
  endpoint: string;
  email: string;
  whatsapp: string;
  projectTypes: string[];
}

const CSS = `
.lp{width:min(560px,calc(100% - 32px));max-width:none;max-height:calc(100dvh - 32px);margin:auto;padding:0;border:1px solid var(--color-line);border-radius:16px;background:var(--color-surface);color:var(--color-ink);box-shadow:var(--shadow-deep);overflow:auto;overscroll-behavior:contain}
.lp::backdrop{background:var(--color-backdrop)}
.lp__inner{position:relative;display:grid;gap:1.25rem;padding:clamp(24px,4vw,36px)}
.lp__close{position:absolute;top:12px;right:12px;display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--color-line);border-radius:10px;background:var(--color-surface);color:var(--color-ink);cursor:pointer}
.lp__close:hover{border-color:var(--color-line-strong)}
.lp__eyebrow{display:inline-flex;align-items:center;gap:.6rem;font-family:var(--font-mono);font-size:.75rem;letter-spacing:.14em;text-transform:uppercase}
.lp__eyebrow::before{content:'';width:8px;height:8px;border-radius:2px;background:var(--color-accent)}
.lp h2{font-size:clamp(1.625rem,1.3rem + 1.4vw,2.125rem);letter-spacing:-.035em;line-height:1.1;padding-right:44px}
.lp__sub{color:var(--color-muted)}
.lp form{display:grid;gap:1rem}
.lp__row{display:grid;gap:1rem}
@media (min-width:520px){.lp__row{grid-template-columns:1fr 1fr}}
.lp__field{display:grid;gap:.4rem;min-width:0}
.lp label{font-family:var(--font-mono);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--color-ink-soft)}
.lp input,.lp select,.lp textarea{width:100%;min-height:48px;padding:.7rem .9rem;border:1px solid var(--color-line-strong);border-radius:10px;background:var(--color-surface);color:var(--color-ink);font:inherit;font-size:1rem}
.lp textarea{min-height:96px;resize:vertical}
.lp input:focus-visible,.lp select:focus-visible,.lp textarea:focus-visible{outline:none;border-color:var(--color-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--color-accent) 25%,transparent)}
.lp__hp{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}
.lp__actions{display:flex;flex-wrap:wrap;align-items:center;gap:.75rem 1.25rem}
.lp__alt{display:flex;flex-wrap:wrap;gap:.25rem 1rem;font-size:.9375rem}
.lp__alt a{display:inline-flex;align-items:center;min-height:44px;color:var(--color-ink);text-underline-offset:.22em}
.lp__alt a:hover{color:var(--color-accent-hover)}
.lp__status{padding:.9rem 1.1rem;border-radius:10px;font-size:.9375rem}
.lp__status[data-state=success]{background:var(--color-accent-tint);color:var(--color-ok-fg)}
.lp__status[data-state=error]{background:var(--color-err-bg);color:var(--color-err-fg)}
html.lp-lock{overflow:hidden}
@media (prefers-reduced-motion:no-preference){.lp[open]{animation:lp-in .35s var(--ease-out-soft)}.lp[open]::backdrop{animation:lp-fade .35s ease}}
@keyframes lp-in{from{opacity:0;transform:translateY(16px) scale(.98)}}
@keyframes lp-fade{from{opacity:0}}
@media (max-width:640px){
  .lp{width:100%;max-height:92dvh;margin:auto 0 0;border-radius:18px 18px 0 0;border-bottom:0}
  .lp__inner{padding-bottom:calc(24px + env(safe-area-inset-bottom))}
  @media (prefers-reduced-motion:no-preference){.lp[open]{animation:lp-up .35s var(--ease-out-soft)}}
}
@keyframes lp-up{from{transform:translateY(100%)}}
`;

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export function openLeadPopup(): void {
  const config = JSON.parse(document.getElementById('lead-popup-config')?.textContent || 'null') as Config | null;
  if (!config) return;

  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.append(style);

  const dialog = document.createElement('dialog');
  dialog.className = 'lp';
  dialog.setAttribute('aria-labelledby', 'lp-title');
  dialog.setAttribute('aria-describedby', 'lp-sub');
  dialog.innerHTML = `
    <div class="lp__inner">
      <button type="button" class="lp__close" data-lp-close aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
      </button>
      <p class="lp__eyebrow">Start a project</p>
      <h2 id="lp-title">Have a project in mind?</h2>
      <p class="lp__sub" id="lp-sub">Tell me in a few lines — I reply within one working day.</p>
      <form action="${escapeHtml(config.endpoint)}" method="POST" novalidate>
        <input type="hidden" name="_source" value="popup">
        <input type="hidden" name="_subject" value="New project enquiry — website pop-up">
        <input type="hidden" name="page" value="${escapeHtml(location.pathname)}">
        <div class="lp__row">
          <div class="lp__field"><label for="lp-name">Name *</label><input id="lp-name" name="name" autocomplete="name" required maxlength="120"></div>
          <div class="lp__field"><label for="lp-contact">Email or WhatsApp *</label><input id="lp-contact" name="contact" autocomplete="email" inputmode="email" required maxlength="200" aria-describedby="lp-contact-hint"></div>
        </div>
        <p id="lp-contact-hint" class="lp__sub" style="font-size:.8125rem;margin-top:-.5rem">An email address or a phone number with country code.</p>
        <div class="lp__field"><label for="lp-type">Project type</label><select id="lp-type" name="project_type"><option value="">Choose one</option>${config.projectTypes
          .map((t) => `<option>${escapeHtml(t)}</option>`)
          .join('')}</select></div>
        <div class="lp__field"><label for="lp-message">Short message *</label><textarea id="lp-message" name="message" rows="3" required minlength="5" maxlength="1000"></textarea></div>
        <div class="lp__hp" aria-hidden="true"><label for="lp-gotcha">Leave this field empty</label><input id="lp-gotcha" name="_gotcha" tabindex="-1" autocomplete="off"></div>
        <div class="lp__actions">
          <button type="submit" class="btn btn--primary btn--md" data-lp-submit><span class="btn__label">Send</span><span class="btn__icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg></span></button>
          <div class="lp__alt">
            <a href="${escapeHtml(config.whatsapp)}" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
            <a href="mailto:${escapeHtml(config.email)}">Email me</a>
          </div>
        </div>
        <div class="lp__status" role="status" aria-live="polite" data-lp-status hidden></div>
      </form>
    </div>`;
  document.body.append(dialog);

  const form = dialog.querySelector('form')!;
  const status = dialog.querySelector<HTMLElement>('[data-lp-status]')!;
  const submit = dialog.querySelector<HTMLButtonElement>('[data-lp-submit]')!;
  const contact = dialog.querySelector<HTMLInputElement>('#lp-contact')!;
  const opener = document.activeElement as HTMLElement | null;
  const root = document.documentElement;

  // Scroll lock without layout shift: compensate for the scrollbar that disappears.
  const scrollbar = innerWidth - root.clientWidth;
  root.classList.add('lp-lock');
  if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`;

  const showStatus = (state: 'success' | 'error', text: string) => {
    status.hidden = false;
    status.dataset.state = state;
    status.textContent = text;
  };

  const close = () => dialog.open && dialog.close();
  dialog.addEventListener('close', () => {
    root.classList.remove('lp-lock');
    root.style.paddingRight = '';
    dialog.remove();
    style.remove();
    opener?.focus?.();
  });
  dialog.querySelector('[data-lp-close]')!.addEventListener('click', close);
  // Click on the backdrop (outside the dialog box) closes.
  dialog.addEventListener('click', (event) => {
    const r = dialog.getBoundingClientRect();
    const { clientX: x, clientY: y } = event;
    if (event.target === dialog && (x < r.left || x > r.right || y < r.top || y > r.bottom)) close();
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = Array.from(
      dialog.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([type=hidden]):not([tabindex="-1"]), select, textarea'),
    ).filter((el) => el.offsetParent !== null);
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  contact.addEventListener('input', () => contact.setCustomValidity(''));
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const value = contact.value.trim();
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const looksLikePhone = value.replace(/\D/g, '').length >= 8 && /^[+\d\s()-]+$/.test(value);
    contact.setCustomValidity(looksLikeEmail || looksLikePhone ? '' : 'Enter an email address or a WhatsApp number.');
    if (!form.reportValidity()) return;

    submit.disabled = true;
    try {
      const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error(String(response.status));
      try {
        localStorage.setItem(SUBMITTED_KEY, String(Date.now()));
      } catch {
        /* ignore */
      }
      form.reset();
      showStatus('success', 'Thanks — got it. I’ll reply within one working day.');
    } catch {
      showStatus('error', `That didn’t send. Please use WhatsApp or email ${config.email} instead.`);
    } finally {
      submit.disabled = false;
    }
  });

  dialog.showModal();
  dialog.querySelector<HTMLInputElement>('#lp-name')!.focus();
}
