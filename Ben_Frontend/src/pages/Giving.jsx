import React from "react";
import Container from "../components/ui/Container";
import BankAccountCard from "../sections/giving/BankAccountCard";
import bankAccounts from "../data/bankAccounts";

function Giving() {
  return (
    <Container as="main" className="py-12 md:py-24">
      <h1 className="sr-only">Give to Believers Equipping Network</h1>
      <div className="mx-auto grid max-w-[1172px] gap-5 lg:grid-cols-2">
        {bankAccounts.map((account) => (
          <BankAccountCard key={account.accountNumber} {...account} />
        ))}
      </div>
    </Container>
  );
}

export default Giving;
