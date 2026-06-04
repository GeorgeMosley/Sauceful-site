'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  label: string;
  btnClass?: string;
  /** 'waitlist' shows name + email only and sends a signup subject line.
   *  'contact'  (default) shows the full name / email / message form. */
  variant?: 'waitlist' | 'contact';
}

export default function ContactButton({
  label,
  btnClass = 'btn btn-primary',
  variant = 'contact',
}: Props) {
  const [isOpen,   setIsOpen]   = useState(false);
  const [name,     setName]     = useState('');
  const [email,    setEmail]    = useState('');
  const [message,  setMessage]  = useState('');
  const [status,   setStatus]   = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const isWaitlist = variant === 'waitlist';

  const open  = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setTimeout(() => { setStatus('idle'); setName(''); setEmail(''); setMessage(''); }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/hello@sauceful.co.uk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          ...(isWaitlist ? {} : { message }),
          _subject: isWaitlist
            ? `Waiting list signup — ${name}`
            : `Message from ${name} via sauceful.co.uk`,
          _captcha: 'false',
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <button className={btnClass} onClick={open}>{label}</button>

      {isOpen && createPortal(
        <div className="modal-overlay" onClick={close}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={close} aria-label="Close">✕</button>

            {status === 'success' ? (
              <div className="modal-success">
                {isWaitlist ? (
                  <>
                    <span style={{ fontSize: 44, lineHeight: 1 }}>🎉</span>
                    <span className="eyebrow">★ You&rsquo;re on the list</span>
                    <h2 className="h2">We&rsquo;ll save you a spot!</h2>
                    <p className="lead-sm" style={{ color: 'var(--c-cocoa-soft)', maxWidth: '28ch', textAlign: 'center' }}>
                      We&rsquo;ll drop you a line the moment Sauceful is ready to launch.
                    </p>
                  </>
                ) : (
                  <>
                    <span className="eyebrow">★ Message sent</span>
                    <h2 className="h2">We got it!</h2>
                    <p className="lead-sm" style={{ color: 'var(--c-cocoa-soft)', maxWidth: '28ch', textAlign: 'center' }}>
                      Thanks for reaching out — we&rsquo;ll be in touch soon.
                    </p>
                  </>
                )}
                <button className="btn btn-primary" onClick={close} style={{ marginTop: 12 }}>
                  Close
                </button>
              </div>
            ) : (
              <>
                {isWaitlist ? (
                  <>
                    <span className="eyebrow">★ Early access</span>
                    <h2 className="h2" style={{ marginBottom: 8 }}>Join the waiting list</h2>
                    <p className="lead-sm" style={{ color: 'var(--c-cocoa-soft)', marginBottom: 28 }}>
                      Be first to know when Sauceful launches — we&rsquo;ll save you a spot.
                    </p>
                  </>
                ) : (
                  <>
                    <span className="eyebrow">★ Say hello</span>
                    <h2 className="h2" style={{ marginBottom: 28 }}>Drop us a message</h2>
                  </>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Your name</label>
                    <input
                      className="form-input"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your email</label>
                    <input
                      className="form-input"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  {!isWaitlist && (
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-textarea"
                        required
                        placeholder="Tell us what you think, or just say hi..."
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                      />
                    </div>
                  )}
                  {status === 'error' && (
                    <p className="form-error">Something went wrong — please try again.</p>
                  )}
                  <button
                    className="btn btn-primary btn-full"
                    type="submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending'
                      ? 'Sending…'
                      : isWaitlist ? 'Save my spot →' : 'Send message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
