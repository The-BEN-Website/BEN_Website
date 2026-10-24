import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import ChoiceGroup from "../../components/ui/ChoiceGroup";
import Field from "../../components/ui/Field";
import { describeSubmitError } from "../../lib/errors";
import {
  isRegistrationClosedError,
  newRegistrationId,
  submitHscmRegistration,
} from "../../api/hscm";

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  canPayFee: "",
  serviceUnitIds: [],
  hasAllergies: "",
  allergyDetails: "",
  hasHealthNotes: "",
  healthDetails: "",
  departureLocation: "",
  emergencyName: "",
  emergencyRelationship: "",
  emergencyPhone: "",
};

const yesNo = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const phoneProps = {
  type: "tel",
  placeholder: "e.g 0801 234 5678",
  required: true,
  pattern: "[0-9+()\\s-]{7,20}",
  title: "Enter a valid phone number",
};

function Section({ title, children }) {
  return (
    <section className="flex flex-col gap-5 border-t border-line pt-8 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-semibold text-black">{title}</h2>
      {children}
    </section>
  );
}

function RegistrationForm({ units, onSubmitted, onClosed }) {
  const [values, setValues] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState(null);
  // One id per registration, reused if the visitor retries after an error.
  const registrationId = useRef(newRegistrationId());

  const setValue = (name) => (value) => setValues((current) => ({ ...current, [name]: value }));

  const handleChange = (event) => setValue(event.target.name)(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      onSubmitted(await submitHscmRegistration(registrationId.current, values));
    } catch (error) {
      if (isRegistrationClosedError(error)) {
        onClosed();
        return;
      }
      setSubmitError(error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="HSCM registration form" className="flex flex-col gap-8">
      <Section title="Your details">
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
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="email"
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            maxLength={254}
            value={values.email}
            onChange={handleChange}
          />
          <Field
            id="phone"
            label="Phone Number"
            autoComplete="tel"
            {...phoneProps}
            value={values.phone}
            onChange={handleChange}
          />
        </div>
        <ChoiceGroup
          name="gender"
          legend="Gender"
          options={genders}
          value={values.gender}
          onChange={setValue("gender")}
          required
        />
      </Section>

      <Section title="Camp">
        <ChoiceGroup
          name="canPayFee"
          legend="Will you be able to pay for camp meeting?"
          options={yesNo}
          value={values.canPayFee}
          onChange={setValue("canPayFee")}
          required
        />
        {units.length > 0 && (
          <ChoiceGroup
            name="serviceUnitIds"
            type="checkbox"
            legend="Service unit(s)"
            hint="Select every unit you serve in. Leave blank if you're not in one yet."
            options={units.map((unit) => ({ value: unit.id, label: unit.name }))}
            value={values.serviceUnitIds}
            onChange={setValue("serviceUnitIds")}
            columns
          />
        )}
      </Section>

      <Section title="Health">
        <ChoiceGroup
          name="hasAllergies"
          legend="Do you have any allergies we should be aware of?"
          options={yesNo}
          value={values.hasAllergies}
          onChange={setValue("hasAllergies")}
          required
        />
        {values.hasAllergies === "yes" && (
          <Field
            id="allergyDetails"
            label="Please tell us about your allergies"
            multiline
            rows={3}
            placeholder="e.g. Peanuts, penicillin"
            required
            maxLength={1000}
            value={values.allergyDetails}
            onChange={handleChange}
          />
        )}
        <ChoiceGroup
          name="hasHealthNotes"
          legend="Do you have any other health challenges or information we should know?"
          options={yesNo}
          value={values.hasHealthNotes}
          onChange={setValue("hasHealthNotes")}
          required
        />
        {values.hasHealthNotes === "yes" && (
          <Field
            id="healthDetails"
            label="Please tell us more"
            multiline
            rows={3}
            placeholder="e.g. Asthma, diabetes, medication you take"
            required
            maxLength={1000}
            value={values.healthDetails}
            onChange={handleChange}
          />
        )}
      </Section>

      <Section title="Travel">
        <Field
          id="departureLocation"
          label="Where will you be travelling from?"
          placeholder="e.g. Benin City"
          autoComplete="address-level2"
          required
          maxLength={120}
          value={values.departureLocation}
          onChange={handleChange}
        />
      </Section>

      <Section title="Emergency contact">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="emergencyName"
            label="Full Name"
            placeholder="Who should we contact?"
            required
            maxLength={120}
            value={values.emergencyName}
            onChange={handleChange}
          />
          <Field
            id="emergencyRelationship"
            label="Relationship to you"
            placeholder="e.g. Mother, Spouse"
            required
            maxLength={60}
            value={values.emergencyRelationship}
            onChange={handleChange}
          />
        </div>
        <Field
          id="emergencyPhone"
          label="Phone Number"
          {...phoneProps}
          value={values.emergencyPhone}
          onChange={handleChange}
        />
      </Section>

      <div>
        {status === "error" && (
          <p role="alert" className="mb-6 text-sm text-primary">
            {describeSubmitError(submitError)}
          </p>
        )}
        <Button type="submit" className="w-full" disabled={status === "submitting"}>
          {status === "submitting" ? "Registering..." : "Register"}
        </Button>
        <p className="mt-4 text-center text-xs text-secondary">
          Your details, including health information, are only used to plan for and care for you
          at camp. See our{" "}
          <Link to="/privacy" className="underline underline-offset-2 hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

export default RegistrationForm;
