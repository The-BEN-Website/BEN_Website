import React from "react";

// A labelled set of radio buttons (pick one) or checkboxes (pick any).
// For radios `value` is the chosen option's value; for checkboxes it's an array
// of chosen values. `onChange` receives the new value in the same shape.
function ChoiceGroup({
  name,
  legend,
  hint,
  type = "radio",
  options,
  value,
  onChange,
  required = false,
  columns = false,
}) {
  const isChecked = (optionValue) =>
    type === "radio" ? value === optionValue : value.includes(optionValue);

  const handleChange = (optionValue) => (event) => {
    if (type === "radio") onChange(optionValue);
    else
      onChange(
        event.target.checked
          ? [...value, optionValue]
          : value.filter((v) => v !== optionValue),
      );
  };

  return (
    <fieldset>
      <legend className="text-base font-medium leading-[27px] text-form-label">{legend}</legend>
      {hint && <p className="text-sm text-secondary">{hint}</p>}
      <div
        className={`mt-2 grid gap-2 ${columns ? "sm:grid-cols-2" : "grid-cols-2 sm:flex sm:flex-wrap"}`}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-3 rounded-[10px] border border-input-line bg-white px-4 py-[9px] text-base text-black transition-colors hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-media-red-soft has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/20"
          >
            <input
              type={type}
              name={name}
              value={option.value}
              checked={isChecked(option.value)}
              onChange={handleChange(option.value)}
              required={required && type === "radio"}
              className="h-4 w-4 shrink-0 accent-primary"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default ChoiceGroup;
