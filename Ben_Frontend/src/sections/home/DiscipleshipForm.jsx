import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Field from "../../components/ui/Field";
import { submitDiscipleshipInterest } from "../../api/discipleship";

const emptyForm = { fullName: "", phone: "", email: "" };

function DiscipleshipForm({ headingRef, onSubmitted }) {
  const [values, setValues] = useState(emptyForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      await submitDiscipleshipInterest(values);
      onSubmitted();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <h2
        id="discipleship-heading"
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-semibold text-black focus:outline-none"
      >
        Join the Discipleship Class
      </h2>
      <p className="mt-4 text-body font-medium text-secondary">
        We&apos;d love to have you. Leave your details below and someone will reach out to you with
        the next steps.
      </p>

      <div className="mt-8 flex flex-col gap-5">
        <Field
          id="fullName"
          label="Full Name"
          placeholder="Enter your Full Name"
          autoComplete="name"
          required
          maxLength={120}
          value={values.fullName}
          onChange={handleChange}
        />
        <Field
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="e.g 0801 234 5678"
          autoComplete="tel"
          required
          pattern="[0-9+()\s-]{7,20}"
          title="Enter a valid phone number"
          value={values.phone}
          onChange={handleChange}
        />
        <Field
          id="email"
          label="Email Address (optional)"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          maxLength={254}
          value={values.email}
          onChange={handleChange}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 text-sm text-primary">
          Something went wrong while submitting. Please try again.
        </p>
      )}

      <Button type="submit" className="mt-8 w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Interest"}
      </Button>
      <p className="mt-4 text-center text-xs text-secondary">
        Your details will only be used to contact you about the Discipleship Class.
      </p>
    </form>
  );
}

export default DiscipleshipForm;
