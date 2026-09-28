import React from "react";
import {
  LegalLink,
  LegalList,
  LegalPage,
  LegalSection,
  LegalSubheading,
  Term,
} from "../../components/legal/Legal";

const CONTACT_EMAIL = "believersequippingnetwork@gmail.com";

function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="September 28, 2026">
      <p>
        This Privacy Policy describes how Believers Equipping Network (&quot;we,&quot;
        &quot;us&quot;) collects, uses, and protects information through the Believers Equipping
        Network mobile app (&quot;the App&quot;) and our website at believersequippingnetwork.org
        (&quot;the Website&quot;).
      </p>

      <LegalSection title="Information We Collect">
        <LegalSubheading>In the App</LegalSubheading>
        <p>
          You must sign in with your Google or Apple account to use the App. We never see or receive
          your password — sign-in is handled entirely by Google or Apple. When you sign in, we
          receive your name, email address, and (if available) your profile photo from your Google
          or Apple account, and we ask whether you are a member of Believers Equipping Network.
        </p>
        <p>We also collect the following, tied to your account:</p>
        <LegalList>
          <li>
            <Term>Prayer Requests and Ask the Pastor.</Term> The text of any prayer request or
            question you submit, and optionally your name and phone number if you provide them and
            do not submit anonymously. You can view and edit your own past submissions in the App.
          </li>
          <li>
            <Term>Service Attendance.</Term> If you watch a live service in the App for a few
            continuous minutes, we record that you attended that service, tied to your account, so
            church leadership has an accurate record of attendance.
          </li>
          <li>
            <Term>Giving.</Term> The Give feature displays our bank account details so you can make
            a donation by bank transfer. No online payment is currently processed within the App.
          </li>
          <li>
            <Term>Push Notifications.</Term> If you enable notifications, your device registers a
            push notification token with us so we can send you bulletin and announcement
            notifications. This token is also shared with Expo&apos;s push notification service,
            which delivers the notification through Apple&apos;s or Google&apos;s own notification
            systems.
          </li>
          <li>
            <Term>Bulletin Read Receipts.</Term> We record that a bulletin post was opened, using an
            anonymous identifier generated on your device (not tied to your account), so we know how
            many people engaged with a post.
          </li>
        </LegalList>
        <p>
          We do not collect your location or contacts. The App does not read your existing photos,
          videos, or files — if you choose to save a photo from the App&apos;s gallery, it is
          written to your device&apos;s photo library, but nothing is read from it.
        </p>

        <LegalSubheading>On the Website</LegalSubheading>
        <p>
          You do not need an account to use the Website. We only collect information you choose to
          submit through its forms:
        </p>
        <LegalList>
          <li>
            <Term>Discipleship Class sign-up.</Term> Your full name and phone number, and your email
            address if you provide it.
          </li>
          <li>
            <Term>Contact form.</Term> Your name, email address, and the message you send us.
          </li>
        </LegalList>
        <p>
          The Website does not use cookies or similar technologies for analytics, advertising, or
          tracking, and it does not ask for your location.
        </p>
      </LegalSection>

      <LegalSection title="How We Use Information">
        <p>We use the information described above only to:</p>
        <LegalList>
          <li>Identify you within the App and maintain your sign-in session</li>
          <li>Respond to prayer requests and pastoral questions</li>
          <li>Maintain accurate service attendance records</li>
          <li>Send push notifications about church bulletins and announcements</li>
          <li>Contact you about the Discipleship Class when you sign up on the Website</li>
          <li>Reply to messages you send through the Website&apos;s contact form</li>
        </LegalList>
        <p>
          We do not use your information for advertising, marketing to third parties, or analytics
          or tracking.
        </p>
      </LegalSection>

      <LegalSection title="Sharing of Information">
        <p>
          We do not sell your information. Only authorised church administrators can view what you
          submit. We share information only as necessary to operate the App and the Website:
        </p>
        <LegalList>
          <li>
            <Term>Google and Apple</Term> authenticate your sign-in to the App; we receive only the
            profile information described above.
          </li>
          <li>
            <Term>Supabase</Term>, our database provider, stores the information described above,
            from both the App and the Website, on our behalf.
          </li>
          <li>
            <Term>Expo</Term>, and transitively Apple and Google, deliver push notifications using
            your device&apos;s push token.
          </li>
          <li>
            <Term>YouTube</Term> hosts video content (sermons and live streams) embedded in the App
            and on the Website&apos;s Live page; viewing this content is also subject to
            YouTube&apos;s own privacy policy.
          </li>
          <li>
            <Term>Google Fonts</Term> serves the typeface used on the Website. When a page loads,
            your browser connects to Google&apos;s servers, which receive your IP address.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Data Retention and Deletion">
        <p>
          We retain your App account and the information you provide until you ask us to delete it.
          Information submitted through the Website is kept only as long as we need it to follow up
          with you, after which church administrators delete it.
        </p>
        <p>
          To request deletion of your App account, or of anything you submitted through the
          Website, email <LegalLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          The App and the Website are not directed at children, and we do not knowingly collect
          personal information from children.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <LegalLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LegalLink>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

export default PrivacyPolicy;
