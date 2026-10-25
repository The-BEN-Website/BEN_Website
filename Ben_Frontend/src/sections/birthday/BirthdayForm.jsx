import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Field from "../../components/ui/Field";
import { describeSubmitError } from "../../lib/errors";
import { newSubmissionId } from "../../lib/submissionId";
import { isBirthdayMessagesClosedError, submitBirthdayMessage } from "../../api/birthday";

const emptyForm = { fullName: "", phone: "", message: "" };

function BirthdayForm({ onSubmitted, onClosed }) {
  const [values, setValues] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState(null);
  // One id per message, reused if the visitor retries after an error.
  const messageId = useRef(newSubmissionId());

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      await submitBirthdayMessage(messageId.current, values);
      onSubmitted();
    } catch (error) {
      if (isBirthdayMessagesClosedError(error)) {
        onClosed();
        return;
      }
      setSubmitError(error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Birthday message form" className="flex flex-col gap-5">
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
        id="message"
        label="Your Message"
        multiline
        rows={7}
        placeholder="Write your birthday wishes, prayers or words of appreciation"
        required
        maxLength={2000}
        value={values.message}
        onChange={handleChange}
      />

      {status === "error" && (
        <p role="alert" className="text-sm text-primary">
          {describeSubmitError(submitError)}
        </p>
      )}

      <Button type="submit" className="mt-3 w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
      <p className="text-center text-xs text-secondary">
        Your name and phone number go with your message so the Pastor knows who it&apos;s from. See our{" "}
        <Link to="/privacy" className="underline underline-offset-2 hover:text-primary">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}

export default BirthdayForm;
