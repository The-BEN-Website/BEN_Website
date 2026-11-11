import React from 'react';

export default function QuantityControl({ label, value, onChange, min = 0, max = 100, disabled = false }) {
  const number = Number(value) || 0;
  const controlClass = 'flex h-10 w-9 shrink-0 items-center justify-center text-lg text-ink transition-colors hover:bg-surface focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:text-muted disabled:opacity-40';
  return (
    <div className="flex items-center overflow-hidden rounded-lg border border-line-strong bg-white">
      <button type="button" aria-label={`Decrease ${label}`} disabled={disabled || number <= min} onClick={() => onChange(Math.max(min, number - 1))} className={controlClass}>−</button>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        aria-label={`${label} quantity`}
        value={value}
        disabled={disabled}
        onChange={event => {
          const next = event.target.value;
          if (/^\d*$/.test(next) && (next === '' || Number(next) <= max)) onChange(next === '' ? '' : Number(next));
        }}
        onBlur={() => { if (value === '' || number < min) onChange(min); }}
        className="h-10 min-w-0 flex-1 border-x border-line bg-transparent p-0 text-center text-sm font-medium tabular-nums text-ink focus:outline-none focus-visible:bg-surface"
      />
      <button type="button" aria-label={`Increase ${label}`} disabled={disabled || number >= max} onClick={() => onChange(Math.min(max, number + 1))} className={controlClass}>+</button>
    </div>
  );
}
