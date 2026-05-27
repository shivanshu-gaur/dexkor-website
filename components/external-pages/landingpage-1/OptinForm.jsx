import { useEffect, useMemo, useRef, useState } from 'react';

const PDF_URL = '/scaling-Playbook.pdf';
const OPTIN_API_URL = 'https://getnos.io/dexkor-optin-page/main.php';

const COUNTRIES = [
  { code: '+91', label: '🇮🇳 +91 India' },
  { code: '+1', label: '🇺🇸 +1 United States' },
  { code: '+44', label: '🇬🇧 +44 United Kingdom' },
  { code: '+61', label: '🇦🇺 +61 Australia' },
  { code: '+65', label: '🇸🇬 +65 Singapore' },
  { code: '+971', label: '🇦🇪 +971 UAE' },
  { code: '+966', label: '🇸🇦 +966 Saudi Arabia' },
  { code: '+49', label: '🇩🇪 +49 Germany' },
  { code: '+33', label: '🇫🇷 +33 France' },
  { code: '+81', label: '🇯🇵 +81 Japan' },
  { code: '+86', label: '🇨🇳 +86 China' },
];

const validateEmail = (email) => {
  const value = (email || '').trim().toLowerCase();

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) return false;

  // Block personal/free email providers
  const blockedDomains = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'live.com',
    'aol.com',
    'icloud.com',
    'protonmail.com',
    'zoho.com',
    'yandex.com',
    'gmx.com',
    'mail.com',
    'msn.com'
  ];

  const domain = value.split('@')[1];

  return !blockedDomains.includes(domain);
};

const validatePhone = (cc, phone) => {
  const cleaned = (phone || '').replace(/\D/g, '');
  if (cc === '+91') return /^[6-9]\d{9}$/.test(cleaned);
  return cleaned.length >= 7 && cleaned.length <= 14;
};

export default function OptinForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cc, setCc] = useState('+91');
  const [phone, setPhone] = useState('');
  const [touched, setTouched] = useState({ name: false, email: false, phone: false });
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const submittingRef = useRef(false);

  // Field-level validity
  const nameValid = name.trim().length >= 2;
  const emailValid = validateEmail(email);
  const phoneValid = validatePhone(cc, phone);

  const validCount = (nameValid ? 1 : 0) + (emailValid ? 1 : 0) + (phoneValid ? 1 : 0);
  const pct = Math.round((validCount / 3) * 100);
  const allValid = validCount === 3;

  const buttonLabel = useMemo(() => {
    if (submitting) return 'Submitting...';
    if (allValid) return 'Download The Playbook';
    const remaining = 3 - validCount;
    if (remaining === 3) return 'Fill the form to unlock';
    return `${remaining} more field${remaining > 1 ? 's' : ''} to unlock`;
  }, [allValid, validCount, submitting]);

  const phoneError = touched.phone && !phoneValid
    ? cc === '+91'
      ? 'Indian mobile number must contain exactly 10 digits'
      : 'Phone number must contain 7 to 14 digits'
    : '';

  const nameError = touched.name && !nameValid ? 'Enter valid full name' : '';
  const emailError = touched.email && !emailValid ? 'Enter valid work email' : '';

  function triggerDownload() {
    const link = document.createElement('a');
    link.href = PDF_URL;
    link.setAttribute('download', 'Scaling-CX-Playbook.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
async function handleSubmit(e) {

  e.preventDefault();

  if (submittingRef.current || !allValid) return;

  submittingRef.current = true;

  setSubmitting(true);

  const formData = new FormData();

  formData.append('name', name.trim());

  formData.append('email', email.trim());

  formData.append('country_code', cc);

  formData.append('phone', `${cc} ${phone.trim()}`);

  try {

    const response = await fetch(OPTIN_API_URL, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    console.log(data);

    triggerDownload();

    if (data.success && data.redirect) {

      window.location.href = data.redirect;

    }

  } catch (error) {

    console.log(error);

  } finally {

    setSubmitting(false);

    submittingRef.current = false;

  }

}

  // Reset on bfcache restore
  useEffect(() => {
    const onShow = () => {
      setSubmitting(false);
      submittingRef.current = false;
    };
    window.addEventListener('pageshow', onShow);
    return () => window.removeEventListener('pageshow', onShow);
  }, []);

  if (showSuccess) {
    return (
      <div
        className="bg-paper border-[1.5px] border-green rounded-2xl text-center animate-success-in"
        style={{
          padding: '36px 32px',
          boxShadow: '0 30px 60px -28px rgba(15,27,61,.15)',
        }}
      >
        <div
          className="rounded-full bg-green text-paper mx-auto flex items-center justify-center font-bold"
          style={{
            width: 64,
            height: 64,
            marginBottom: 20,
            fontSize: 32,
            boxShadow:
              '0 0 0 6px rgba(16,185,129,.18), 0 14px 30px -8px rgba(16,185,129,.4)',
          }}
        >
          ✓
        </div>
        <h3 className="font-serif font-medium text-2xl leading-tight text-ink mb-2.5">
          Sent. <em className="italic text-green">Download started.</em>
        </h3>
        <p
          className="text-sm leading-snug text-ink-soft mx-auto"
          style={{ maxWidth: '36ch', marginBottom: 22 }}
        >
          The PDF is downloading now. We've also emailed you a copy so you can find
          it on any device.
        </p>
        <button
          type="button"
          onClick={triggerDownload}
          className="inline-flex items-center gap-2.5 bg-paper-deep border-[1.5px] border-rule text-ink font-sans text-xs uppercase font-bold rounded-lg cursor-pointer transition hover:bg-ink hover:text-paper hover:border-ink"
          style={{
            padding: '12px 22px',
            letterSpacing: '.14em',
          }}
        >
          Re-download PDF ↓
        </button>
      </div>
    );
  }

  return (
    <div
      id="optinFormCard"
      className="relative bg-paper border-[1.5px] border-rule rounded-2xl form-gradient-border"
      style={{
        padding: '28px 28px 24px',
        boxShadow:
          '0 1px 0 rgba(255,255,255,.5), 0 30px 60px -28px rgba(15,27,61,.15)',
      }}
    >
      <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[.18em] uppercase text-accent font-bold mb-3.5">
        <span className="w-3.5 h-3.5 bg-accent diamond-icon" />
        Drop your details. Download unlocks.
      </div>

      <h3 className="font-serif font-medium text-[22px] leading-tight text-ink mb-5">
        Send the playbook to <em className="italic text-accent">your inbox</em>
      </h3>

      <form onSubmit={handleSubmit} noValidate>
        {/* NAME */}
        <div className="mb-3.5">
          <label
            htmlFor="fname"
            className="block text-[12.5px] text-ink font-semibold mb-1.5 tracking-[.02em]"
          >
            Full Name <b className="text-accent font-bold ml-0.5">*</b>
          </label>
          <input
            type="text"
            id="fname"
            name="name"
            placeholder="Your full name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            className={`w-full font-sans text-[14.5px] text-ink bg-paper rounded-lg border-[1.5px] outline-none transition focus:border-accent ${
              nameValid && touched.name
                ? 'input-valid border-green'
                : touched.name && !nameValid
                ? 'input-error'
                : 'border-rule'
            }`}
            style={{
              padding: '13px 14px',
              boxShadow: 'none',
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = '0 0 0 3px rgba(44,138,229,.12)';
            }}
            onBlurCapture={(e) => {
              e.target.style.boxShadow = 'none';
            }}
            required
          />
          {nameError && (
            <span className="block text-xs text-red mt-1.5">{nameError}</span>
          )}
        </div>

        {/* EMAIL */}
        <div className="mb-3.5">
          <label
            htmlFor="email"
            className="block text-[12.5px] text-ink font-semibold mb-1.5 tracking-[.02em]"
          >
            Work Email <b className="text-accent font-bold ml-0.5">*</b>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            className={`w-full font-sans text-[14.5px] text-ink bg-paper rounded-lg border-[1.5px] outline-none transition focus:border-accent ${
              emailValid && touched.email
                ? 'input-valid border-green'
                : touched.email && !emailValid
                ? 'input-error'
                : 'border-rule'
            }`}
            style={{ padding: '13px 14px' }}
            onFocus={(e) => {
              e.target.style.boxShadow = '0 0 0 3px rgba(44,138,229,.12)';
            }}
            onBlurCapture={(e) => {
              e.target.style.boxShadow = 'none';
            }}
            required
          />
          {emailError && (
            <span className="block text-xs text-red mt-1.5">{emailError}</span>
          )}
        </div>

        {/* PHONE */}
        <div className="mb-3.5">
          <label
            htmlFor="phone"
            className="block text-[12.5px] text-ink font-semibold mb-1.5 tracking-[.02em]"
          >
            Phone Number <b className="text-accent font-bold ml-0.5">*</b>
          </label>
          <div className="grid gap-2.5" style={{ gridTemplateColumns: '90px 1fr' }}>
            <select
              id="cc"
              name="country_code"
              value={cc}
              onChange={(e) => {
                setCc(e.target.value);
                setTouched((t) => ({ ...t, phone: true }));
              }}
              className="w-full font-sans text-[14.5px] text-ink bg-paper rounded-lg border-[1.5px] border-rule outline-none transition focus:border-accent"
              style={{ padding: '13px 14px' }}
            >
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="98XXXXXXXX"
              autoComplete="tel-national"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
              className={`w-full font-sans text-[14.5px] text-ink bg-paper rounded-lg border-[1.5px] outline-none transition focus:border-accent ${
                phoneValid && touched.phone
                  ? 'input-valid border-green'
                  : touched.phone && !phoneValid
                  ? 'input-error'
                  : 'border-rule'
              }`}
              style={{ padding: '13px 14px' }}
              onFocus={(e) => {
                e.target.style.boxShadow = '0 0 0 3px rgba(44,138,229,.12)';
              }}
              onBlurCapture={(e) => {
                e.target.style.boxShadow = 'none';
              }}
              required
            />
          </div>
          {phoneError && (
            <span className="block text-xs text-red mt-1.5">{phoneError}</span>
          )}
        </div>

        {/* PROGRESS */}
        <div
          className={`flex items-center gap-2.5 my-4 font-mono text-[11px] tracking-[.12em] uppercase font-semibold ${
            allValid ? 'text-muted' : 'text-muted'
          }`}
        >
          <span>Form Progress</span>
          <div className="flex-1 h-1.5 bg-paper-deep rounded-full overflow-hidden relative">
            <div
              className="progress-fill h-full rounded-full transition-[width] duration-300 ease-out relative"
              style={{
                width: `${pct}%`,
                background:
                  'linear-gradient(90deg, #2C8AE5 0%, #5BA8EC 100%)',
              }}
            />
          </div>
          <span
            className={`${allValid ? 'text-green' : 'text-ink'} font-bold min-w-[38px] text-right`}
          >
            {pct}%
          </span>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={!allValid || submitting}
          className={`w-full relative overflow-hidden inline-flex items-center justify-center gap-3 font-sans font-bold uppercase border-0 rounded-[10px] mt-1 isolate transition-all duration-200 ${
            allValid
              ? 'cursor-pointer text-paper hover:-translate-y-0.5 active:translate-y-0.5 download-shine'
              : 'cursor-not-allowed bg-paper-deep text-disabled'
          }`}
          style={{
            padding: '18px 28px',
            fontSize: 13,
            letterSpacing: '.2em',
            ...(allValid
              ? {
                  background:
                    'linear-gradient(135deg, #2C8AE5 0%, #1F6FBF 100%)',
                  boxShadow:
                    '0 4px 0 #1F6FBF, 0 14px 30px -10px rgba(44,138,229,.55), 0 0 0 1px rgba(255,255,255,.15) inset, 0 1px 0 rgba(255,255,255,.4) inset',
                }
              : {
                  boxShadow: '0 0 0 1px rgba(15,27,61,.12) inset',
                }),
          }}
        >
          {!allValid ? (
            <span className="inline-flex items-center justify-center w-4 h-4">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M7 0C4.79 0 3 1.79 3 4v2H2c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-1V4c0-2.21-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2v2H5V4c0-1.1.9-2 2-2z" />
              </svg>
            </span>
          ) : (
            <span className="inline-flex text-base">↓</span>
          )}
          <span>{buttonLabel}</span>
        </button>

        <p className="mt-3.5 text-[11.5px] leading-snug text-muted text-center">
          By submitting, you agree to our{' '}
          <a href="#" className="text-ink-soft underline">
            privacy policy
          </a>
          .
          <br />
          No newsletter. No SDR cadence. Just the playbook.
        </p>

        <div
          className="flex justify-center items-center gap-3 mt-4 pt-4 font-mono text-[10.5px] tracking-[.12em] uppercase text-muted font-semibold"
          style={{ borderTop: '1px dashed rgba(15,27,61,.12)' }}
        >
          <span>🔒 256-bit Encrypted</span>
          <span className="w-1 h-1 rounded-full bg-rule" />
          <span>One-Click Unsubscribe</span>
        </div>
      </form>
    </div>
  );
}
