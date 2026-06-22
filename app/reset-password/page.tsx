import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ResetPasswordForm from '@/components/ResetPasswordForm';

export const metadata = {
  title: 'Reset password — Sauceful',
  robots: { index: false, follow: false },
};

export default function ResetPassword() {
  return (
    <>
      <Nav />
      <main>
        <div className="legal-page">
          <div className="legal-card pop" style={{ textAlign: 'center' }}>
            <ResetPasswordForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
