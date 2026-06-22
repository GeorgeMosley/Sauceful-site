'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type Status = 'loading' | 'ready' | 'invalid' | 'success';

export default function ResetPasswordForm() {
  const [status, setStatus] = useState<Status>('loading');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Supabase appends `#error=...` to the redirect URL instead of establishing
    // a session when the recovery link is invalid or has expired.
    if (window.location.hash.includes('error=')) {
      setStatus('invalid');
      return;
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') setStatus('ready');
    });

    // If no recovery session shows up within a few seconds (e.g. someone
    // navigated here directly), stop waiting and show the invalid-link state.
    const timeout = setTimeout(() => {
      setStatus((s) => (s === 'loading' ? 'invalid' : s));
    }, 3000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    if (password !== confirm) { setError('Passwords don’t match.'); return; }

    setSubmitting(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setSubmitting(false);

    if (updateError) { setError(updateError.message); return; }
    await supabase.auth.signOut();
    setStatus('success');
  };

  if (status === 'loading') {
    return <p className="legal-note">Checking your reset link&hellip;</p>;
  }

  if (status === 'invalid') {
    return (
      <>
        <span className="eyebrow">&#9733; Link expired</span>
        <h1 className="h2 legal-title">This reset link isn&rsquo;t valid.</h1>
        <p className="legal-note" style={{ maxWidth: 440, margin: '0 auto' }}>
          It may have expired or already been used. Head back to the Sauceful app and tap &ldquo;Forgot password?&rdquo; again to get a fresh link.
        </p>
      </>
    );
  }

  if (status === 'success') {
    return (
      <>
        <span className="eyebrow">&#9733; All done</span>
        <h1 className="h2 legal-title">Your password&rsquo;s been reset.</h1>
        <p className="legal-note" style={{ maxWidth: 440, margin: '0 auto' }}>
          Head back to the <strong>Sauceful app</strong> and sign in with your new password.
        </p>
      </>
    );
  }

  return (
    <>
      <span className="eyebrow">&#9733; Almost there</span>
      <h1 className="h2 legal-title">Set a new password.</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: 24, textAlign: 'left' }}>
        <div className="form-group">
          <label className="form-label">New password</label>
          <input
            className="form-input"
            type="password"
            required
            minLength={8}
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Confirm password</label>
          <input
            className="form-input"
            type="password"
            required
            placeholder="Type it again"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
        {error && <p className="form-error">{error}</p>}
        <button className="btn btn-primary btn-full" type="submit" disabled={submitting}>
          {submitting ? 'Saving…' : 'Set new password →'}
        </button>
      </form>
    </>
  );
}
