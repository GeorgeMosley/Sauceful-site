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
            <p className="legal-updated">Last updated June 01, 2026</p>
            <p className="legal-note">
              We are Sauceful Ltd (&lsquo;Company&rsquo;, &lsquo;we&rsquo;, &lsquo;us&rsquo;, or &lsquo;our&rsquo;).
              We operate the mobile application Sauceful, as well as any other related products and services that
              refer or link to these legal terms (collectively, the &lsquo;Services&rsquo;).
              You can contact us at{' '}
              <a href="mailto:hello@sauceful.co.uk" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>.
            </p>
            <p className="legal-note" style={{ marginTop: -12 }}>
              These Legal Terms constitute a legally binding agreement between you and Sauceful Ltd concerning
              your access to and use of the Services. By accessing the Services, you have read, understood, and
              agreed to be bound by all of these Legal Terms. <strong>If you do not agree with all of these Legal
              Terms, then you are expressly prohibited from using the Services and you must discontinue use
              immediately.</strong>
            </p>
            <hr className="legal-divider" />

            <div className="legal-content">

              <div className="legal-toc">
                {[
                  'Our services',
                  'Intellectual property rights',
                  'User representations',
                  'User registration',
                  'Purchases and payment',
                  'Subscriptions',
                  'Prohibited activities',
                  'User generated contributions',
                  'Contribution licence',
                  'Mobile application licence',
                  'Services management',
                  'Privacy policy',
                  'Term and termination',
                  'Modifications and interruptions',
                  'Governing law',
                  'Dispute resolution',
                  'Corrections',
                  'Disclaimer',
                  'Limitations of liability',
                  'Indemnification',
                  'User data',
                  'Electronic communications, transactions, and signatures',
                  'Miscellaneous',
                  'Dietary safety and preferences',
                  'Contact us',
                ].map((item, i) => (
                  <p className="legal-toc-item" key={i}>{i + 1}. {item.charAt(0).toUpperCase() + item.slice(1)}</p>
                ))}
              </div>

              <div className="legal-section">
                <p className="legal-section-title">1. Our services</p>
                <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
                <p>Sauceful is a UK-based AI-powered meal planning mobile application designed for adult users — primarily parents and household managers — who want personalised weekly dinner suggestions for their household. The app is intended solely for adults aged 18 and over.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">2. Intellectual property rights</p>
                <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &lsquo;Content&rsquo;), as well as the trademarks, service marks, and logos contained therein (the &lsquo;Marks&rsquo;). Our Content and Marks are protected by copyright and trademark laws and treaties around the world.</p>
                <p>Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable licence to access the Services solely for your personal, non-commercial use. No part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
                <p>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">3. User representations</p>
                <p>By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information; (3) you have the legal capacity and agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means; (6) you will not use the Services for any illegal or unauthorised purpose; and (7) your use of the Services will not violate any applicable law or regulation.</p>
                <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">4. User registration</p>
                <p>You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">5. Purchases and payment</p>
                <p>We accept the following forms of payment: Visa, Mastercard, American Express.</p>
                <p>You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. All payments shall be in Pound Sterling. We may change prices at any time. You authorise us to charge your chosen payment provider for any such amounts upon placing your order.</p>
                <p>We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">6. Subscriptions</p>
                <p><strong>Billing and Renewal.</strong> Your subscription will continue and automatically renew unless cancelled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel.</p>
                <p><strong>Free Trial.</strong> We offer a 30-day free trial to new users who register with the Services. The account will be charged according to the user&rsquo;s chosen subscription at the end of the free trial.</p>
                <p><strong>Cancellation.</strong> All purchases are non-refundable. You can cancel your subscription at any time by logging into your account. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at <a href="mailto:hello@sauceful.co.uk" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>.</p>
                <p><strong>Fee Changes.</strong> We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">7. Prohibited activities</p>
                <p>You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:</p>
                <ul>
                  <li>Systematically retrieve data or other content from the Services to create or compile a collection, compilation, database, or directory without written permission from us.</li>
                  <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
                  <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                  <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party&rsquo;s uninterrupted use and enjoyment of the Services.</li>
                  <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using data mining, robots, or similar data gathering tools.</li>
                  <li>Attempt to impersonate another user or person or use the username of another user.</li>
                  <li>Use the Services as part of any effort to compete with us or otherwise use the Services for any revenue-generating endeavour or commercial enterprise.</li>
                  <li>Sell or otherwise transfer your profile.</li>
                </ul>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">8. User generated contributions</p>
                <p>The Services does not currently offer users the ability to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services in the future. Any Contributions you transmit may be treated in accordance with the Services&rsquo; Privacy Policy.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">9. Contribution licence</p>
                <p>You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices.</p>
                <p>By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">10. Mobile application licence</p>
                <p>If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, strictly in accordance with the terms and conditions of this mobile application licence. You shall not: (1) decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) use the App for any revenue-generating endeavour or commercial enterprise; or (5) use the App to send automated queries to any website or to send any unsolicited commercial email.</p>
                <p>The foregoing terms apply when you use the App obtained from either the Apple Store or Google Play. The licence granted to you for our App is limited to a non-transferable licence to use the application on a device that utilises the Apple iOS or Android operating systems, as applicable.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">11. Services management</p>
                <p>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable any of your Contributions or any portion thereof; and (4) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">12. Privacy policy</p>
                <p>We care about data privacy and security. Please review our Privacy Policy at <Link href="/privacy" style={{ color: 'var(--c-peach-dk)' }}>sauceful.co.uk/privacy</Link>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. The Services are hosted in the United Kingdom.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">13. Term and termination</p>
                <p>These Legal Terms shall remain in full force and effect while you use the Services. We reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Services (including blocking certain IP addresses), to any person for any reason, including without limitation for breach of any representation, warranty, or covenant contained in these Legal Terms or of any applicable law or regulation. We may terminate your use or participation in the Services or delete your account and any content or information that you posted at any time, without warning, in our sole discretion.</p>
                <p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">14. Modifications and interruptions</p>
                <p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. We cannot guarantee the Services will be available at all times. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">15. Governing law</p>
                <p>These Legal Terms are governed by and interpreted following the laws of the United Kingdom, and the use of the United Nations Convention of Contracts for the International Sales of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law of your country of residence. Sauceful Ltd and yourself both agree to submit to the non-exclusive jurisdiction of the courts of the United Kingdom.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">16. Dispute resolution</p>
                <p><strong>Informal Negotiations.</strong> To expedite resolution and control the cost of any dispute, the Parties agree to first attempt to negotiate any Dispute informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.</p>
                <p><strong>Binding Arbitration.</strong> Any dispute arising from the relationships between the Parties to these Legal Terms shall be determined by one arbitrator chosen in accordance with the Arbitration and Internal Rules of the European Court of Arbitration. The seat of arbitration shall be London, United Kingdom. The language of the proceedings shall be English. Applicable rules of substantive law shall be the law of the United Kingdom.</p>
                <p><strong>Restrictions.</strong> The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. No arbitration shall be joined with any other proceeding, and there is no right or authority for any Dispute to be arbitrated on a class-action basis.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">17. Corrections</p>
                <p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">18. Disclaimer</p>
                <p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES&rsquo; CONTENT.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">19. Limitations of liability</p>
                <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">20. Indemnification</p>
                <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&rsquo; fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">21. User data</p>
                <p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">22. Electronic communications, transactions, and signatures</p>
                <p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communication be in writing. You hereby agree to the use of electronic signatures, contracts, orders, and other records, and to electronic delivery of notices, policies, and records of transactions initiated or completed by us or via the Services.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">23. Miscellaneous</p>
                <p>These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">24. Dietary safety and preferences</p>
                <p>Sauceful generates meal suggestions using artificial intelligence based on the household dietary preferences you enter. While we design the Service to account for the preferences and foods to avoid that you provide, <strong>you are responsible for checking that every meal, ingredient, and recipe is safe and suitable for everyone in your household before preparing or eating it.</strong> The AI may occasionally make errors, including suggesting ingredients that conflict with stated preferences. Always independently verify ingredients and recipes, especially where dietary requirements or food avoidances are involved.</p>
                <p>Never rely solely on Sauceful where dietary safety is critical. Sauceful does not provide medical, nutritional, or dietary advice. If you or a household member has a serious allergy or medical condition requiring dietary management, consult a qualified medical professional or registered dietitian.</p>
              </div>

              <div className="legal-section">
                <p className="legal-section-title">25. Contact us</p>
                <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
                <p>
                  <strong>Sauceful Ltd</strong><br />
                  United Kingdom<br />
                  <a href="mailto:hello@sauceful.co.uk" style={{ color: 'var(--c-peach-dk)' }}>hello@sauceful.co.uk</a>
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
