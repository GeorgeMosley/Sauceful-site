import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Sauceful',
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <main>
        <div className="legal-page">
          <div className="legal-card pop">
            <span className="eyebrow">★ Legal</span>
            <h1 className="h2 legal-title">Privacy Policy</h1>
            <p className="legal-updated">Last updated June 01, 2026</p>
            <p className="legal-note">
              This Privacy Notice for Sauceful Ltd (&lsquo;we&rsquo;, &lsquo;us&rsquo;, or &lsquo;our&rsquo;) describes
              how and why we might access, collect, store, use, and/or share your personal information when
              you use our services, including when you download and use our mobile application (Sauceful).
              Questions or concerns? Contact us at{' '}
              <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>.
            </p>
            <hr className="legal-divider" />

            <div className="legal-content">

              <div className="legal-section">
                <p className="legal-section-title">Summary of Key Points</p>
                <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
                <p><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered &lsquo;special&rsquo; or &lsquo;sensitive&rsquo;, for example health data relating to dietary requirements. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.</p>
                <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
                <p><strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet can be guaranteed to be 100% secure.</p>
              </div>

              <div className="legal-toc">
                {[
                  'What information do we collect?',
                  'How do we process your information?',
                  'What legal bases do we rely on to process your personal information?',
                  'When and with whom do we share your personal information?',
                  'Do we offer artificial intelligence-based products?',
                  'How long do we keep your information?',
                  'How do we keep your information safe?',
                  'Do we collect information from minors?',
                  'What are your privacy rights?',
                  'Controls for Do-Not-Track features',
                  'Do we make updates to this notice?',
                  'How can you contact us about this notice?',
                  'How can you review, update, or delete the data we collect from you?',
                ].map((item, i) => (
                  <p className="legal-toc-item" key={i}>{i + 1}. {item}</p>
                ))}
              </div>

              <div className="legal-section">
                <p className="legal-section-title">1. What information do we collect?</p>
                <p className="legal-in-short">In Short: We collect personal information that you provide to us.</p>
                <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
                <p>The personal information we collect may include: names, phone numbers, email addresses, passwords, contact preferences, billing addresses, debit/credit card numbers, household dietary preferences, and occupants in household.</p>
                <p><strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process health data (such as dietary requirements and food avoidances).</p>
                <p><strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases. All payment data is handled and stored by Stripe. You may find their privacy notice at <a href="https://stripe.com/gb/privacy" style={{ color: 'var(--c-peach-dk)' }} target="_blank" rel="noopener noreferrer">stripe.com/gb/privacy</a>.</p>
                <p><strong>Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application. If you wish to opt out, you may turn them off in your device&rsquo;s settings.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">2. How do we process your information?</p>
                <p className="legal-in-short">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
                <p>We process your personal information for a variety of reasons, including:</p>
                <ul>
                  <li>To facilitate account creation and authentication and otherwise manage user accounts.</li>
                  <li>To deliver and facilitate delivery of services to the user.</li>
                  <li>To respond to user enquiries and offer support to users.</li>
                  <li>To save or protect an individual&rsquo;s vital interest, such as to prevent harm.</li>
                </ul>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">3. What legal bases do we rely on to process your information?</p>
                <p className="legal-in-short">In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law.</p>
                <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on. We may rely on:</p>
                <ul>
                  <li><strong>Consent.</strong> We may process your information if you have given us permission to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
                  <li><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you.</li>
                  <li><strong>Legal Obligations.</strong> We may process your information where necessary for compliance with our legal obligations.</li>
                  <li><strong>Vital Interests.</strong> We may process your information where necessary to protect your vital interests or the vital interests of a third party.</li>
                </ul>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">4. When and with whom do we share your personal information?</p>
                <p className="legal-in-short">In Short: We may share information in specific situations described in this section.</p>
                <p><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">5. Do we offer artificial intelligence-based products?</p>
                <p className="legal-in-short">In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>
                <p>As part of our Services, we offer products, features, or tools powered by artificial intelligence (collectively, &lsquo;AI Products&rsquo;). We provide the AI Products through third-party service providers (&lsquo;AI Service Providers&rsquo;), including Anthropic. Your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products. You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.</p>
                <p>All personal information processed using our AI Products is handled in line with this Privacy Notice and our agreement with third parties, ensuring high security and safeguarding your personal information throughout the process.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">6. How long do we keep your information?</p>
                <p className="legal-in-short">In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
                <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice. No purpose in this notice will require us keeping your personal information for longer than six (6) months past the termination of the user&rsquo;s account.</p>
                <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or securely store it and isolate it from any further processing until deletion is possible.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">7. How do we keep your information safe?</p>
                <p className="legal-in-short">In Short: We aim to protect your personal information through a system of organisational and technical security measures.</p>
                <p>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. Transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">8. Do we collect information from minors?</p>
                <p className="legal-in-short">In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>
                <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">9. What are your privacy rights?</p>
                <p className="legal-in-short">In Short: In some regions, such as the UK and EEA, you have rights that allow you greater access to and control over your personal information.</p>
                <p>In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right to request access and obtain a copy of your personal information, to request rectification or erasure, to restrict the processing of your personal information, to data portability, and not to be subject to automated decision-making.</p>
                <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or the UK data protection authority (the ICO).</p>
                <p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time by contacting us at <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>.</p>
                <p>If you would like to review or change the information in your account or terminate your account, you can log in to your account settings and update your user account, or email us directly.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">10. Controls for Do-Not-Track features</p>
                <p>Most web browsers and some mobile operating systems include a Do-Not-Track (&lsquo;DNT&rsquo;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">11. Do we make updates to this notice?</p>
                <p className="legal-in-short">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
                <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated &lsquo;Revised&rsquo; date at the top of this Privacy Notice. If we make material changes, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">12. How can you contact us about this notice?</p>
                <p>If you have questions or comments about this notice, you may email us at <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a> or contact us by post at: Sauceful Ltd, United Kingdom.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">13. How can you review, update, or delete the data we collect from you?</p>
                <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. To request to review, update, or delete your personal information, please contact us at <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>.</p>
              </div>

            </div>

            <Link href="/" className="legal-back">← Back to home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
