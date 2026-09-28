import React, { useEffect, useState } from "react";
import { IoCheckmark, IoCopyOutline } from "react-icons/io5";

const COPIED_RESET_MS = 2000;

function BankAccountCard({ bankName, accountNumber, accountName, logo }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), COPIED_RESET_MS);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
    } catch {
      // Clipboard can be unavailable (e.g. insecure context); the number is still selectable.
    }
  };

  return (
    <article className="flex flex-col rounded-[20px] border-2 border-tile-line bg-tile p-6">
      <div className="flex items-start justify-between gap-4">
        <h2 className="pt-5 text-xl font-semibold leading-[27px] text-black">{bankName}</h2>
        <img src={logo} alt="" width={57} height={57} className="h-[57px] w-[57px] object-contain" />
      </div>

      <div className="mt-10 text-right sm:mt-16">
        <p className="text-xl font-medium uppercase leading-[27px] text-ink-muted">Account Number</p>
        <div className="mt-1 flex items-center justify-end gap-2">
          <span className="select-all text-[30px] font-medium leading-[27px] tracking-wide text-black">
            {accountNumber}
          </span>
          <button
            type="button"
            onClick={copyAccountNumber}
            aria-label={`Copy ${bankName} account number`}
            className="rounded p-1 text-icon transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            {copied ? <IoCheckmark size={22} /> : <IoCopyOutline size={22} />}
          </button>
        </div>
        <p aria-live="polite" className="sr-only">
          {copied ? "Account number copied" : ""}
        </p>
      </div>

      <p className="mt-10 text-center text-body font-medium uppercase text-black">{accountName}</p>
    </article>
  );
}

export default BankAccountCard;
