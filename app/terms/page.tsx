import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions — Sauceful',
};

export default function Terms() {
  return (
    <>
      <Nav />
      <main>
        <div className="legal-page">
          <div className="legal-card pop">
            <span className="eyebrow">★ Legal</span>
            <h1 className="h2 legal-title">Terms &amp; Conditions</h1>
            <p className="legal-updated">Last updated 24th June 2026</p>
            <p className="legal-note">
              These Terms &amp; Conditions (&lsquo;Terms&rsquo;) form a legally binding agreement between you and
              Sauceful Ltd (&lsquo;we&rsquo;, &lsquo;us&rsquo;, or &lsquo;our&rsquo;) governing your use of the
              Sauceful mobile application and related services (the &lsquo;Services&rsquo;). By creating an account,
              selecting an acceptance checkbox, starting a subscription, or otherwise using the Services, you agree
              to these Terms. We may record the version of the Terms accepted and the date and time of acceptance.
              If you do not agree, please do not use the Services. You can contact us at{' '}
              <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>.
            </p>
            <p className="legal-note" style={{ marginTop: -12 }}>
              <strong>Your statutory rights.</strong> Nothing in these Terms affects your legal rights as a consumer
              under UK law, including the Consumer Rights Act 2015 and the Consumer Contracts (Information,
              Cancellation and Additional Charges) Regulations 2013. If anything in these Terms conflicts with those
              rights, your statutory rights prevail.
            </p>
            <hr className="legal-divider" />

            <div className="legal-content">

              <div className="legal-toc">
                {[
                  'About our Services',
                  'Eligibility and your account',
                  'Dietary safety and preferences',
                  'How the AI works and its limitations',
                  'Subscriptions, free trial, payment and cancellation',
                  'Acceptable use',
                  'Intellectual property',
                  'App store terms',
                  'Availability and changes to the Services',
                  'Suspension and termination',
                  'Our responsibility to you',
                  'Your responsibilities to us (indemnity)',
                  'Your data and backups',
                  'Resolving disputes',
                  'General',
                  'Contact us',
                ].map((item, i) => (
                  <p className="legal-toc-item" key={i}>{i + 1}. {item}</p>
                ))}
              </div>

              <div className="legal-section">
                <p className="legal-section-title">1. About our Services</p>
                <p>Sauceful is a UK-based, AI-powered meal planning application for adults — primarily parents and household managers — who want personalised weekly dinner suggestions and, where available, integrated supermarket shopping lists or baskets. The Services are intended solely for users aged 18 and over and for personal, non-commercial use.</p>
                <p>Unless expressly stated otherwise, the Services are intended for use in the United Kingdom only and are not currently made available or marketed in the European Economic Area. If you access the Services from outside the United Kingdom, you do so on your own initiative and are responsible for compliance with local laws. We do not represent that the Services are appropriate or available in every jurisdiction.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">2. Eligibility and your account</p>
                <p>By using the Services you confirm that you are at least 18, that the information you give us is accurate and kept up to date, and that you will use the Services only for lawful, personal purposes. You are responsible for keeping your login details confidential and for activity under your account. Tell us promptly if you think your account has been compromised.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">3. Dietary safety and preferences</p>
                <p>Sauceful is not an allergy-management or medical tool. You must check every meal, ingredient, recipe, product, label, substitution and shopping-list item yourself before buying, preparing, serving, or eating it — especially where allergies, intolerances, children, pregnancy, medical conditions, or medical dietary needs are involved.</p>
                <p>Sauceful generates suggestions using artificial intelligence based on the preferences and requirements you enter. We distinguish between:</p>
                <ul>
                  <li>Preferences (likes and dislikes) — used to tailor suggestions to your household&rsquo;s tastes; and</li>
                  <li>Allergies, intolerances, and medical dietary requirements — which are matters of safety, not taste.</li>
                </ul>
                <p>Although we design the Service to take account of the information you provide, the AI can and sometimes will make mistakes — including suggesting an ingredient that conflicts with a stated allergy or requirement. You must therefore always independently verify ingredients, recipes, product labels, allergens, quantities, cooking instructions and substitutions before relying on them, and never rely solely on Sauceful where dietary safety is critical.</p>
                <p><strong>Food safety and preparation.</strong> We do not provide food-hygiene or food-safety guidance. You are responsible for safely storing, handling, and cooking food (for example, cooking meat thoroughly and observing use-by dates).</p>
                <p><strong>Supermarket integration and substitutions.</strong> If and when the Services let you create a generic shopping list for your recipes, that list is not brand-specific and does not select, match, link to or supply supermarket products. If you choose to buy items from a third-party supermarket, that supermarket — not Sauceful — supplies the products. Supermarkets may substitute items, change ingredients, or update product information, and a substituted product may contain allergens the original did not. You must check every product and its label, including any substitutions, before purchase and consumption. Your relationship with the supermarket is governed by that supermarket&rsquo;s own terms.</p>
                <p><strong>Not medical or nutritional advice.</strong> Sauceful does not provide medical, nutritional, or dietary advice. If you or anyone in your household has a serious allergy or a medical condition requiring dietary management, consult a qualified medical professional or registered dietitian.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">4. How the AI works and its limitations</p>
                <p>Meal suggestions are generated automatically by AI and are recommendations only. They are not guaranteed to be accurate, complete, suitable, nutritionally balanced, or free of errors. You remain in control: you decide what to buy, cook, and eat. We provide some AI features through third-party providers (including Anthropic); your inputs and outputs are processed as described in our Privacy Policy, and are not used to train AI models. You must not use the AI features in any way that breaches a provider&rsquo;s terms or applicable law. We may update the AI providers we use from time to time, and material changes to data use will be handled in accordance with our Privacy Policy.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">5. Subscriptions, free trial, payment and cancellation</p>
                <p><strong>Free trial.</strong> We may offer a 14-day free trial to new users. Unless you cancel before the trial ends, your chosen paid subscription will begin automatically when the trial finishes, and we will charge your payment method. Our subscription plans are priced at £4.99 per month or £49.99 per year (saving over 16%). You should review the subscription details, free-trial period, renewal price and cancellation route shown in the Apple App Store or Google Play checkout before confirming purchase.</p>
                <p><strong>Billing and renewal.</strong> Subscriptions renew automatically for successive periods until cancelled. When you subscribe, your payment is taken and managed by the Apple App Store or Google Play through your existing store account, and renews automatically through that store until you cancel. All payments are in Pounds Sterling. We do not process or store your card details.</p>
                <p><strong>Reminders and changes.</strong> Renewal notices, free-trial reminders, cancellations and subscription management are administered through the Apple App Store or Google Play. If the subscription price changes, any required app-store consent or approval will be handled through the relevant store, and the new price will apply from the next applicable billing period only.</p>
                <p><strong>14-day cancellation right (cooling-off).</strong> As a consumer, you have the right to cancel within 14 days of starting a paid subscription, without giving a reason, under the Consumer Contracts Regulations 2013. If you purchase a subscription through the Apple App Store or Google Play, payment processing, subscription management, cancellations and refunds are administered by the relevant app-store provider. Cancellation of a subscription will prevent future renewals but will not automatically result in a refund. Any refund requests should be submitted directly to the relevant app-store provider. For support queries, email <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>. To manage or cancel your subscription, use your Apple App Store or Google Play account settings.</p>
                <p><strong>Cancelling after the cooling-off period.</strong> You can cancel at any time through your Apple App Store or Google Play account settings (subscriptions bought through an app store can only be cancelled there, not within the app itself). Cancellation takes effect at the end of your current paid period, and you keep access until then. Beyond the statutory rights described here, payments already made for a current period are generally non-refundable — but this does not affect your right to a refund where the Service was faulty, not as described, or not provided with reasonable care and skill under the Consumer Rights Act 2015. If you are unhappy with the Services, please contact us. Because purchases are made through the Apple App Store or Google Play, any refund is requested from and issued by Apple or Google under their policies; where we agree a refund is due, we will help you arrange it with the relevant store.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">6. Acceptable use</p>
                <p>You agree not to: use the Services unlawfully or for any commercial or revenue-generating purpose; copy, scrape, data-mine, or systematically extract content; interfere with or attempt to circumvent the security of the Services; upload malicious code; use bots or automated means to access the Services; impersonate others; or transfer or sell your account. You may not reverse engineer, decompile, or disassemble the app, except to the limited extent the law expressly permits and which cannot be excluded by agreement.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">7. Intellectual property</p>
                <p>We (or our licensors) own all intellectual property rights in the Services, including the software, content, designs, text, graphics, trademarks, and logos. We grant you a personal, non-exclusive, non-transferable, revocable licence to use the Services for your own personal, non-commercial use, in accordance with these Terms. You must not copy, reproduce, republish, distribute, or commercially exploit any part of the Services without our prior written permission.</p>
                <p>If you send us feedback or suggestions, you agree we may use them freely without obligation to you, while you keep ownership of your own underlying content.</p>
                <p>AI-generated meal plans, recipes, shopping lists and other outputs are provided for your personal, non-commercial household use only. You may use, save and adapt those outputs for your own household purposes, subject always to these Terms and your responsibility to check dietary suitability, allergens, food safety and product labels.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">8. App store terms</p>
                <p>If you download the app from the Apple App Store or Google Play, your use is also subject to that store&rsquo;s rules. Where required by the relevant store, those store terms apply in addition to these Terms, and the relevant store provider may be a third-party beneficiary entitled to enforce them. If there is any inconsistency between these Terms and mandatory app-store rules relating to payment, cancellation or refunds, the applicable mandatory app-store rule will apply to that extent.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">9. Availability and changes to the Services</p>
                <p>We work to keep the Services available but cannot guarantee they will always be uninterrupted or error-free, and we may change, suspend, withdraw or replace features where we have a valid reason to do so. Where we make significant changes, or withdraw the Services, we will give you reasonable notice where we can, and you may cancel and (where you have pre-paid for a period you can no longer use) receive a pro-rata refund of unused fees.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">10. Suspension and termination</p>
                <p>You can stop using the Services and close your account at any time. We may suspend or end your access if you materially breach these Terms, if required by law, or to protect the Services or other users — giving you notice where it is reasonable to do so. If we end your subscription other than for your breach, we will refund any pre-paid fees for the period after termination.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">11. Our responsibility to you</p>
                <p>We never exclude liability we cannot exclude by law. Nothing in these Terms limits or excludes our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, for breach of your statutory rights as a consumer, or for any other liability that cannot be limited or excluded under UK law.</p>
                <p>Subject to the paragraph above, and because the Services provide automated suggestions that you must check yourself:</p>
                <ul>
                  <li>we are responsible for loss or damage you suffer that is a foreseeable result of our breaking these Terms or failing to use reasonable care and skill, but we are not responsible for loss or damage that is not foreseeable;</li>
                  <li>we are not liable for loss or damage arising from your failure to check ingredients, recipes, labels, or substitutions, or from products supplied by a third-party supermarket;</li>
                  <li>we are not liable for business losses — the Services are for personal, domestic use only, so we have no liability for loss of profit, business, or business opportunity; and</li>
                  <li>we are not liable for loss caused by events outside our reasonable control.</li>
                </ul>
                <p>Subject always to the carve-outs above, our total liability to you for all claims arising in any 12-month period is limited to the greater of:</p>
                <ul>
                  <li>the total fees you paid us in the 12 months before the claim arose, or</li>
                  <li>£100.</li>
                </ul>
                <p>This cap does not apply to any of the liabilities described at the start of this clause, which are never limited.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">12. Your responsibilities to us (indemnity)</p>
                <p>Because the Services are for consumers, this clause is limited. You agree to reimburse us for losses, costs, and reasonable expenses we suffer that are caused by your deliberate misuse of the Services, your fraud, or your breach of these Terms — but only to the extent the loss was not caused or contributed to by us, and excluding anything that would unfairly limit your statutory rights as a consumer.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">13. Your data and backups</p>
                <p>We process your personal information as described in our <Link href="/privacy" style={{ color: 'var(--c-peach-dk)' }}>Privacy Policy</Link>, which forms part of these Terms. We take regular backups, but you should keep your own copy of anything important to you. We are responsible for loss or corruption of your data to the extent it results from our failure to use reasonable care and skill.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">14. Resolving disputes</p>
                <p><strong>Talk to us first.</strong> If you have a problem, please contact us at <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a> so we can try to resolve it quickly and informally.</p>
                <p><strong>Going to court.</strong> These Terms are governed by the law of England and Wales. As a consumer, you can bring proceedings in the courts of England and Wales, and if you live in Scotland or Northern Ireland you may also bring proceedings in your local courts. Nothing in these Terms requires you to use arbitration or to give up your right to bring or join a claim in court; you keep all rights you have as a consumer to access the courts and any ombudsman or alternative dispute resolution scheme that applies.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">15. General</p>
                <p>These Terms, together with our Privacy Policy, are the entire agreement between us. If any part is found to be unenforceable, the rest continues to apply. Our delay in enforcing a term is not a waiver of it. We may transfer our rights and obligations to another organisation, but this will not affect your rights under these Terms, and we will tell you if it happens. We may update these Terms from time to time; where changes materially affect you we will give you reasonable notice, and, where required by law or where a change is materially adverse, we may ask you to accept the updated Terms before continuing to use the Services. Your continued use after notice of a non-material change means you accept the updated Terms.</p>
                <p>All communications may be electronic, and you agree that electronic communications, agreements, and notices satisfy any legal requirement that they be in writing.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">16. Contact us</p>
                <p>
                  <strong>Sauceful Ltd</strong><br />
                  4 Shaw Street, Bishop&rsquo;s Stortford, CM23 2TT, United Kingdom<br />
                  Email: <a href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a><br />
                  Company Number: 17261322
                </p>
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
