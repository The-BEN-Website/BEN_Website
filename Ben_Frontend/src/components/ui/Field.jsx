import React from "react";

const controlClass =
  "mt-2 w-full rounded-[10px] border border-input-line bg-white px-4 py-[9px] text-base leading-[27px] text-black placeholder:text-input-hint focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

// Labelled form control. Pass `multiline` for a textarea; all other props go
// to the underlying input/textarea.
function Field({ id, label, multiline = false, ...controlProps }) {
  const Control = multiline ? "textarea" : "input";

  return (
    <div>
      <label htmlFor={id} className="text-base font-medium leading-[27px] text-form-label">
        {label}
      </label>
      <Control
        id={id}
        name={id}
        className={`${controlClass} ${multiline ? "resize-y" : ""}`}
        {...controlProps}
      />
    </div>
  );
}

export default Field;
