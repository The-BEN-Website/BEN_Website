import React from "react";
import { LegalLink, LegalList, LegalPage, LegalSection } from "../../components/legal/Legal";

const CONTACT_EMAIL = "believersequippingnetwork@gmail.com";
const CONTACT_PHONE = "+234 701 767 3889";

function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="September 28, 2026">
      <p>
        By downloading or using the Believers Equipping Network mobile app (&quot;the App&quot;) or
        using our website at believersequippingnetwork.org (&quot;the Website&quot;), you agree to
        these Terms of Service. If you do not agree, please do not use the App or the Website.
      </p>

      <LegalSection title="Account and Sign-In">
        <p>
          You must sign in with a Google or Apple account to use the App. You are responsible for
          maintaining the security of that account. At sign-up, you will be asked whether you are a
          member of Believers Equipping Network — this is self-reported and used for informational
          purposes only. The Website does not require an account.
        </p>
      </LegalSection>

      <LegalSection title="Use of the App and Website">
        <p>
          The App and the Website are provided to help you engage with church activities, including
          devotionals, live services, sermons, worship songs, events, prayer requests, and the
          Discipleship Class. You may use them only for lawful purposes and in accordance with these
          Terms.
        </p>
      </LegalSection>

      <LegalSection title="Submissions">
        <p>
          When you submit a prayer request, a question, a Discipleship Class sign-up, a contact
          message, or any other content through the App or the Website, you agree that:
        </p>
        <LegalList>
          <li>Your submission is accurate and not intended to harass, harm, or mislead anyone</li>
          <li>
            You will not submit content that is unlawful, abusive, or infringes on the rights of
            others
          </li>
          <li>
            We may use your submission internally to respond to you or to plan pastoral care, but we
            will not publish it publicly without your consent
          </li>
        </LegalList>
        <p>We reserve the right to remove or disregard any submission at our discretion.</p>
        <p>
          How we handle the personal information in your submissions is described in our{" "}
          <LegalLink to="/privacy">Privacy Policy</LegalLink>
          .
        </p>
      </LegalSection>

      <LegalSection title="Giving">
        <p>
          The Give feature in the App and the Giving page on the Website display our bank account
          details so you can make a donation by direct bank transfer. Neither processes payments
          itself, and any transfer you make is handled entirely by your own bank, subject to your
          bank&apos;s own terms.
        </p>
      </LegalSection>

      <LegalSection title="Content and Intellectual Property">
        <p>
          All devotionals, sermons, songs, images, and other content made available through the App
          or the Website belong to Believers Equipping Network or its licensors, unless otherwise
          stated. You may not reproduce, redistribute, or use this content for commercial purposes
          without our permission.
        </p>
        <p>
          Some video content is streamed via YouTube; use of that content is also subject to
          YouTube&apos;s Terms of Service.
        </p>
      </LegalSection>

      <LegalSection title="No Warranty">
        <p>
          The App and the Website are provided &quot;as is&quot; without warranties of any kind. We
          do not guarantee that they will be uninterrupted, error-free, or available at all times.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Believers Equipping Network is not liable for any
          indirect, incidental, or consequential damages arising from your use of the App or the
          Website.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. Continued use of the App or the Website after
          changes are posted means you accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          If you have questions about these Terms, please contact us at{" "}
          <LegalLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LegalLink>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

export default TermsOfService;
