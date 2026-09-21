import React from "react";
import Logo from "../../assets/Home_assets/Logo1.webp";

const PrivacyPolicy = () => {
  return (
    <div className="App font-my_font pt-32 pb-20 px-4">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <img src={Logo} alt="BEN Logo" className="h-10 w-10 rounded-md bg-white object-contain" />
          <span className="text-sm font-bold text-my-black">Believers Equipping Network</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-my-black">Privacy Policy</h1>
          <p className="mt-1 text-sm text-contact-text">Last updated: September 22, 2026</p>
        </div>

        <div className="flex flex-col gap-5 text-sm leading-relaxed text-my-black">
          <p>
            This Privacy Policy describes how the Believers Equipping Network mobile app
            (&quot;the App,&quot; &quot;we,&quot; &quot;us&quot;) collects, uses, and protects
            information when you use it.
          </p>

          <section>
            <h2 className="mb-2 text-base font-semibold">Information We Collect</h2>
            <p className="mb-2">
              You must sign in with your Google or Apple account to use the App. We never see or
              receive your password — sign-in is handled entirely by Google or Apple. When you
              sign in, we receive your name, email address, and (if available) your profile photo
              from your Google or Apple account, and we ask whether you are a member of Believers
              Equipping Network.
            </p>
            <p className="mb-2">We also collect the following, tied to your account:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium">Prayer Requests and Ask the Pastor.</span> The text
                of any prayer request or question you submit, and optionally your name and phone
                number if you provide them and do not submit anonymously. You can view and edit
                your own past submissions in the App.
              </li>
              <li>
                <span className="font-medium">Service Attendance.</span> If you watch a live
                service in the App for a few continuous minutes, we record that you attended that
                service, tied to your account, so church leadership has an accurate record of
                attendance.
              </li>
              <li>
                <span className="font-medium">Giving.</span> The Give feature displays our bank
                account details so you can make a donation by bank transfer. No online payment is
                currently processed within the App.
              </li>
              <li>
                <span className="font-medium">Push Notifications.</span> If you enable
                notifications, your device registers a push notification token with us so we can
                send you bulletin and announcement notifications. This token is also shared with
                Expo&apos;s push notification service, which delivers the notification through
                Apple&apos;s or Google&apos;s own notification systems.
              </li>
              <li>
                <span className="font-medium">Bulletin Read Receipts.</span> We record that a
                bulletin post was opened, using an anonymous identifier generated on your device
                (not tied to your account), so we know how many people engaged with a post.
              </li>
            </ul>
            <p className="mt-2">
              We do not collect your location or contacts. The App does not read your existing
              photos, videos, or files — if you choose to save a photo from the App&apos;s
              gallery, it is written to your device&apos;s photo library, but nothing is read from
              it.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">How We Use Information</h2>
            <p className="mb-2">We use the information described above only to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Identify you within the App and maintain your sign-in session</li>
              <li>Respond to prayer requests and pastoral questions</li>
              <li>Maintain accurate service attendance records</li>
              <li>Send push notifications about church bulletins and announcements</li>
            </ul>
            <p className="mt-2">
              We do not use your information for advertising, marketing to third parties, or
              analytics or tracking.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">Sharing of Information</h2>
            <p className="mb-2">
              We do not sell your information. We share information only as necessary to operate
              the App:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium">Google and Apple</span> authenticate your sign-in;
                we receive only the profile information described above.
              </li>
              <li>
                <span className="font-medium">Supabase</span>, our database provider, stores the
                information described above on our behalf.
              </li>
              <li>
                <span className="font-medium">Expo</span>, and transitively Apple and Google,
                deliver push notifications using your device&apos;s push token.
              </li>
              <li>
                <span className="font-medium">YouTube</span> hosts video content (sermons and live
                streams) embedded in the App; viewing this content is also subject to
                YouTube&apos;s own privacy policy.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">Data Retention and Deletion</h2>
            <p>
              We retain your account and the information you provide until you ask us to delete
              it. To request deletion of your account and data, contact us using the &quot;Ask the
              Pastor&quot; feature in the App, or email{" "}
              <a href="mailto:egyadesmond@gmail.com" className="text-my-red underline">
                egyadesmond@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">Children&apos;s Privacy</h2>
            <p>
              The App is not directed at children, and we do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
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

export default PrivacyPolicy;
