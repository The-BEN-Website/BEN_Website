import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Field from "../../components/ui/Field";
import SuccessPanel from "../../components/ui/SuccessPanel";
import { submitContactMessage } from "../../api/contact";

const emptyForm = { name: "", email: "", message: "" };

function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const successHeadingRef = useRef(null);

  // Move focus to the confirmation so screen-reader users hear it.
  useEffect(() => {
    if (status === "success") successHeadingRef.current?.focus();
  }, [status]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      await submitContactMessage(values);
      setValues(emptyForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Card className="flex items-center p-6 sm:p-10">
        <SuccessPanel
          className="w-full"
          headingId="contact-success-heading"
          headingRef={successHeadingRef}
          title="Message sent"
          message="Thanks for reaching out. A BEN representative will get back to you as soon as possible."
          actionLabel="Send another message"
          onAction={() => setStatus("idle")}
        />
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:px-14 sm:py-8">
      <form onSubmit={handleSubmit} aria-label="Contact form" className="flex flex-col gap-5">
        <Field
          id="name"
          label="Name"
          placeholder="Enter Your Name"
          autoComplete="name"
          required
          maxLength={120}
          value={values.name}
          onChange={handleChange}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          placeholder="e.g abc@gmail.com"
          autoComplete="email"
          required
          maxLength={254}
          value={values.email}
          onChange={handleChange}
        />
        <Field
          id="message"
          label="Message"
          multiline
          rows={6}
          placeholder="Send us a message"
          required
          maxLength={5000}
          value={values.message}
          onChange={handleChange}
        />

        {status === "error" && (
          <p role="alert" className="text-sm text-primary">
            Something went wrong while sending your message. Please try again.
          </p>
        )}

        <Button type="submit" className="mt-5 w-full" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Card>
  );
}

export default ContactForm;
