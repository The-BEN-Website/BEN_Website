import React from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const details = [
  { label: "Church Office", value: "Edo University Iyamho, Auchi, Edo State", Icon: FiMapPin },
  { label: "Phone", value: "+234 703 539 9975", href: "tel:+2347035399975", Icon: FiPhone },
  {
    label: "Email",
    value: "believersequippingnetwork@gmail.com",
    href: "mailto:believersequippingnetwork@gmail.com",
    Icon: FiMail,
  },
];

function ContactDetails() {
  return (
    <div>
      <h2 className="text-2xl font-semibold leading-none text-subheading">How Can We Help?</h2>
      <p className="mt-6 text-small text-caption">
        We&apos;d love to help get you connected to one of our branches, discipleship groups and
        believers online. Feel free to fill out the contact form to receive a reply, or contact us
        via phone.
      </p>

      <dl className="mt-10 flex flex-col gap-6">
        {details.map(({ label, value, href, Icon }) => (
          <div key={label} className="flex items-start gap-3">
            <span className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[10px] border border-icon-line text-primary">
              <Icon aria-hidden="true" size={20} />
            </span>
            <div className="min-w-0">
              <dt className="text-lg font-medium leading-none text-detail-title">{label}</dt>
              <dd className="mt-2 break-words text-base text-secondary">
                {href ? (
                  <a href={href} className="hover:text-primary">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default ContactDetails;
