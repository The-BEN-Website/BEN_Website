import React from "react";
import Container from "../components/ui/Container";
import ContactForm from "../sections/contact/ContactForm";
import ContactDetails from "../sections/contact/ContactDetails";

function Contact() {
  return (
    <Container as="main" className="py-12 md:py-20">
      <header className="mx-auto max-w-lg text-center">
        <h1 className="text-heading font-semibold text-black">Contact Us Directly</h1>
        <p className="mt-6 text-body font-medium text-secondary">
          Looking for more information? Submit your information and BEN representative will follow
          up with you as soon as possible.
        </p>
      </header>

      <div className="mx-auto mt-12 grid max-w-[964px] items-center gap-12 md:mt-14 lg:grid-cols-[470px_minmax(0,1fr)] lg:gap-12">
        <ContactForm />
        <ContactDetails />
      </div>
    </Container>
  );
}

export default Contact;
