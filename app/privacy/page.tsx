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
            <p className="legal-updated">Last updated 24th June 2026</p>
            <p className="legal-note">
              This Privacy Notice explains how Sauceful Ltd (&lsquo;we&rsquo;, &lsquo;us&rsquo;, or &lsquo;our&rsquo;)
              collects, uses, shares, and protects your personal information when you use the Sauceful mobile
              application and related services (the &lsquo;Services&rsquo;). It also explains your rights under the
              UK GDPR and the Data Protection Act 2018. If you have any questions, contact us at{' '}
              <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>.
            </p>
            <hr className="legal-divider" />

            <div className="legal-content">

              <div className="legal-toc">
                {[
                  'Who we are (Data Controller)',
                  'The information we collect',
                  'Children’s and household members’ data',
                  'How and why we use your information (legal bases)',
                  'Automated meal planning (how the AI is used)',
                  'Who we share your information with',
                  'Your data and the use of AI',
                  'International transfers',
                  'Marketing and cookies',
                  'How long we keep your information',
                  'How we keep your information safe',
                  'Your rights',
                  'Changes to this notice',
                  'How to contact us',
                ].map((item, i) => (
                  <p className="legal-toc-item" key={i}>{i + 1}. {item}</p>
                ))}
              </div>

              <div className="legal-section">
                <p className="legal-section-title">1. Who we are (Data Controller)</p>
                <p>Sauceful Ltd is the &lsquo;controller&rsquo; responsible for your personal information. Our details are:</p>
                <ul>
                  <li>Company: Sauceful Ltd, registered in England and Wales, Company Number 17261322.</li>
                  <li>Registered address: 4 Shaw Street, Bishop&rsquo;s Stortford, CM23 2TT</li>
                  <li>ICO registration number: ZC166900.</li>
                  <li>Contact for privacy matters: <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>.</li>
                </ul>
                <p>We are registered with the Information Commissioner&rsquo;s Office (&lsquo;ICO&rsquo;) and pay the data protection fee. You can verify our registration on the ICO public register.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">2. The information we collect</p>
                <p>We collect personal information that you provide directly to us when you join the waitlist, create an account, set up your household, contact support, or otherwise use the Services. This includes:</p>
                <ul>
                  <li>Identity and contact data: your name, email address, and contact preferences.</li>
                  <li>Account data: your password (stored in hashed form) and account settings.</li>
                  <li>Household data: the number of occupants in your household and dietary preferences, likes, and dislikes you choose to enter. This may include allergy, intolerance or dietary requirement information where you choose to provide it.</li>
                  <li>Payment data: we do not collect or store any payment card or billing address details. All purchases are made as in-app purchases through the Apple App Store or Google Play, and payment is handled entirely by Apple or Google under their own terms. We receive only confirmation of your subscription status from our subscription-management provider, RevenueCat (see section 6).</li>
                </ul>
                <p>App, device and usage data: where applicable, we may collect app usage events, device information, push notification tokens, crash logs, support communications, waitlist metadata, AI prompts and AI-generated outputs, in each case only as needed to provide, secure, troubleshoot and improve the Services.</p>
                <p><strong>Sensitive (special category) information.</strong> Some information you choose to enter — such as allergies, intolerances, and other dietary requirements linked to health — is &lsquo;special category&rsquo; health data under Article 9 UK GDPR. We only process this data where you have given us your explicit consent by selecting a dedicated consent checkbox at the point you enter it, and solely to generate and tailor your meal plans.</p>
                <p>You can withdraw this consent at any time (see section 10). If you withdraw consent for allergy or health-related dietary data, we may be unable to provide the core personalised meal-planning features and may need to delete or anonymise the relevant health data or close the account, as explained in the app. Where required or appropriate, we maintain an Appropriate Policy Document or equivalent internal governance record for this processing, and we keep our lawful basis and special category condition under review.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">3. Children&rsquo;s and household members&rsquo; data</p>
                <p>The Services are intended only for adults aged 18 and over, and only an adult account holder may register. However, because Sauceful is designed for households and families, you may choose to enter information about other members of your household, including children — for example, the number of occupants or a child&rsquo;s dietary requirement or allergy.</p>
                <p>If you enter information about another person, including a child, you confirm that you are responsible for that person&rsquo;s household arrangements and are entitled to provide their information. We ask that you enter the minimum necessary information and avoid identifying household members by full name, precise age or other unnecessary identifiers where this is not needed. We treat any health-related information about children with the same explicit-consent basis and safeguards described in section 2, and we have carried out a Data Protection Impact Assessment covering this processing.</p>
                <p>We do not knowingly allow anyone under 18 to create an account. If we learn that an account has been created by someone under 18, we will deactivate it and delete the associated data. If you believe a child has registered or that we hold a child&rsquo;s data inappropriately, contact us at <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">4. How and why we use your information (legal bases)</p>
                <p>Under the UK GDPR we must have a lawful basis for each use of your personal information. The table below summarises what we do and why.</p>
                <ul>
                  <li>To create and manage your account and provide the Services — lawful basis: performance of our contract with you.</li>
                  <li>To generate personalised meal plans from your dietary preferences and requirements — lawful basis: performance of our contract; and, for any health-related dietary data, your explicit consent (Article 9(2)(a)).</li>
                  <li>To take payment and manage subscriptions — lawful basis: performance of our contract.</li>
                  <li>To respond to your enquiries and provide support — lawful basis: performance of our contract and our legitimate interests in helping our users.</li>
                  <li>To send service messages about your account, billing, the Services or changes to this notice — lawful basis: performance of our contract, our legitimate interests and/or our legal obligations. We do not currently send marketing messages unless you have separately opted in. If we introduce marketing messages in future, we will apply any consent or soft opt-in requirements that apply under PECR and provide an easy unsubscribe or opt-out route.</li>
                  <li>To keep the Services secure and prevent fraud and misuse — lawful basis: our legitimate interests and our legal obligations.</li>
                  <li>To comply with our legal and regulatory obligations — lawful basis: compliance with a legal obligation.</li>
                </ul>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">5. Automated meal planning (how the AI is used)</p>
                <p>Sauceful uses artificial intelligence to generate meal suggestions automatically from the preferences and requirements you enter. This involves automated processing of your data.</p>
                <p>These meal suggestions do not produce legal effects or similarly significant effects concerning you within the meaning of Article 22 UK GDPR — they are recommendations you remain free to accept, change, or ignore, they are not applied automatically, and you must always check them yourself (see our Terms &amp; Conditions). You can contact us if you would like to discuss the automated nature of the Service or request human review of a particular outcome.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">6. Who we share your information with</p>
                <p>We do not sell your personal information. We share it only with the categories of recipient below, and only as far as needed to run the Services:</p>
                <ul>
                  <li><strong>AI service providers (including Anthropic).</strong> To generate your meal plans, the relevant inputs and outputs — which may include dietary and health information — are processed by our AI provider under a contract that restricts their use of the data to providing the service to us. Anthropic processes API prompts and outputs using US-based infrastructure. Anthropic does not use API customer data to train its models, and the relevant supplier terms should address retention, security, sub-processors, model-training restrictions, abuse monitoring and processing locations.</li>
                  <li><strong>Payment processors (Apple and Google).</strong> All purchases are made as in-app purchases through the Apple App Store or Google Play. Apple or Google collects and processes your payment using your existing store account; we never receive or store your card details. Our subscription-management provider, RevenueCat, receives a transaction receipt confirming your subscription status. RevenueCat processes subscription and entitlement data and may process that lower-sensitivity subscription data in the United States.</li>
                  <li><strong>Hosting and database providers</strong>, including Supabase, which hosts the app database, authentication and stored app data in the United Kingdom.</li>
                  <li><strong>Communications and website form providers</strong>, including providers who help us send service emails, push notifications or transmit website form submissions without permanent storage.</li>
                  <li><strong>Analytics providers (if used).</strong> To understand how the Services are used and improve them. This currently includes Vercel Analytics for anonymous website page-view data and may include analytics, crash-reporting, attribution or performance tools, subject to any consent required for non-essential cookies, SDKs or similar technologies.</li>
                  <li><strong>Professional advisers and authorities.</strong> Such as lawyers, accountants, and regulators where required by law.</li>
                  <li><strong>A buyer or successor.</strong> If we are involved in a merger, acquisition, financing, or sale of assets, your information may be transferred as part of that transaction.</li>
                </ul>
                <p>All providers who process personal information on our behalf do so as our &lsquo;processors&rsquo; under written contracts that meet UK GDPR requirements.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">7. Your data and the use of AI</p>
                <p>We do not use your personal information to train AI models, and our AI provider does not use your inputs or outputs to train its models. Your data is used only to generate your own meal plans and to operate, secure, maintain and improve the Services, subject to the limits and safeguards described in this notice.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">8. International transfers</p>
                <p>The Services are hosted in the United Kingdom. Some of our service providers (including certain AI or infrastructure providers) may process your information outside the UK. Where that happens, we ensure an appropriate safeguard is in place, such as a UK &lsquo;adequacy&rsquo; regulation, the UK International Data Transfer Agreement (&lsquo;IDTA&rsquo;), or the UK Addendum to the EU Standard Contractual Clauses, and we carry out any transfer risk assessment required for the relevant provider and transfer. Anthropic is currently the main provider that may receive allergy or health-related dietary data outside the UK. You can request details of the safeguards we use by contacting us.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">9. Marketing and cookies</p>
                <p><strong>Marketing.</strong> We will only send you marketing messages where you have opted in, or where the law otherwise permits (for example, about similar products to those you have bought, with an easy way to opt out). You can unsubscribe at any time using the link in any marketing email or by contacting us.</p>
                <p><strong>Cookies and similar technologies.</strong> Our website and app may use cookies and similar technologies. We only set non-essential cookies (such as analytics) with your consent, in line with the Privacy and Electronic Communications Regulations (&lsquo;PECR&rsquo;). You can manage your preferences through the cookie banner or your device settings. Similar technologies may include SDKs, device identifiers, local storage and app analytics tools.</p>
                <p><strong>Do-Not-Track.</strong> There is no agreed industry standard for Do-Not-Track signals, so we do not currently respond to them.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">10. How long we keep your information</p>
                <p>We keep your personal information only for as long as we need it for the purposes set out in this notice. For active accounts, we keep allergy and dietary information for as long as needed to generate suitable meal plans. Following an account deletion request, we delete or anonymise allergy and health-related data within 30 days, although deletion from backups and operational systems may take up to 90 days. For inactive accounts, we may delete or anonymise personal data after 12 months of inactivity unless we have a legitimate business reason to retain it for longer.</p>
                <p>Some information must be kept for longer to meet legal obligations — for example, we retain transaction and tax records for approximately six (6) years as required by HMRC. Where we no longer have a legitimate need to process your information, we delete or anonymise it, or securely isolate it until deletion is possible.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">11. How we keep your information safe</p>
                <p>We use appropriate technical and organisational measures to protect your personal information, including access controls, encryption in transit, encryption at rest where appropriate, least-privilege access, supplier due diligence and breach-response processes. No transmission or storage method is completely secure, so while we work hard to protect your information we cannot guarantee absolute security.</p>
                <p>If a personal data breach occurs that is likely to result in a risk to your rights, we will notify the ICO within 72 hours where required, and will tell you without undue delay where the breach is likely to result in a high risk to you.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">12. Your rights</p>
                <p>If you are in the UK, you have the right to: access a copy of your information; have inaccurate information corrected; have your information erased; restrict or object to our processing; data portability; and to withdraw consent at any time where we rely on it (including for health data). You also have the right not to be subject to a solely automated decision that produces legal or similarly significant effects — see section 5.</p>
                <p>To exercise any of these rights, contact us at <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>. We will respond within one month. You can usually access and update your account information directly in the app.</p>
                <p>If you are unhappy with how we have handled your information, you can complain to the Information Commissioner&rsquo;s Office at ico.org.uk, although we would welcome the chance to resolve your concerns first.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">13. Changes to this notice</p>
                <p>We may update this notice from time to time. We will change the &lsquo;Last updated&rsquo; date above, and where changes are material we will notify you in the app or by email and, where required, obtain fresh consent or update our lawful-basis assessment before using your information for a new purpose. Please review it regularly.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">14. How to contact us</p>
                <p>For any privacy question, or to exercise your rights, email us at <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>, or write to: Sauceful Ltd, 4 Shaw Street, Bishop&rsquo;s Stortford, CM23 2TT, United Kingdom.</p>
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
