import React from "react";
import Logo from "../../assets/Home_assets/Logo1.webp";

const TermsOfService = () => {
  return (
    <div className="App font-my_font pt-32 pb-20 px-4">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <img src={Logo} alt="BEN Logo" className="h-10 w-10 rounded-md bg-white object-contain" />
          <span className="text-sm font-bold text-my-black">Believers Equipping Network</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-my-black">Terms of Service</h1>
          <p className="mt-1 text-sm text-contact-text">Last updated: September 22, 2026</p>
        </div>

        <div className="flex flex-col gap-5 text-sm leading-relaxed text-my-black">
          <p>
            By downloading or using the Believers Equipping Network app (&quot;the App&quot;), you
            agree to these Terms of Service. If you do not agree, please do not use the App.
          </p>

          <section>
            <h2 className="mb-2 text-base font-semibold">Account and Sign-In</h2>
            <p>
              You must sign in with a Google or Apple account to use the App. You are responsible
              for maintaining the security of that account. At sign-up, you will be asked whether
              you are a member of Believers Equipping Network — this is self-reported and used for
              informational purposes only.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">Use of the App</h2>
            <p>
              The App is provided to help you engage with church activities, including devotionals,
              live services, sermons, worship songs, events, and prayer requests. You may use the
              App only for lawful purposes and in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">Submissions</h2>
            <p className="mb-2">
              When you submit a prayer request, a question, or any other content through the App,
              you agree that:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Your submission is accurate and not intended to harass, harm, or mislead anyone</li>
              <li>You will not submit content that is unlawful, abusive, or infringes on the rights of others</li>
              <li>
                We may use your submission internally to respond to you or to plan pastoral care,
                but we will not publish it publicly without your consent
              </li>
            </ul>
            <p className="mt-2">We reserve the right to remove or disregard any submission at our discretion.</p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">Giving</h2>
            <p>
              The App&apos;s Give feature displays our bank account details so you can make a
              donation by direct bank transfer. The App does not process payments itself, and any
              transfer you make is handled entirely by your own bank, subject to your bank&apos;s
              own terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">Content and Intellectual Property</h2>
            <p className="mb-2">
              All devotionals, sermons, songs, images, and other content made available through the
              App belong to Believers Equipping Network or its licensors, unless otherwise stated.
              You may not reproduce, redistribute, or use this content for commercial purposes
              without our permission.
            </p>
            <p>
              Some video content is streamed via YouTube; use of that content is also subject to
              YouTube&apos;s Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">No Warranty</h2>
            <p>
              The App is provided &quot;as is&quot; without warranties of any kind. We do not
              guarantee that the App will be uninterrupted, error-free, or available at all times.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Believers Equipping Network is not liable for
              any indirect, incidental, or consequential damages arising from your use of the App.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the App after changes
              are posted means you accept the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
              <a href="mailto:egyadesmond@gmail.com" className="text-my-red underline">
                egyadesmond@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
