import zenithLogo from "../assets/banks/zenith.png";
import moniepointLogo from "../assets/banks/moniepoint.png";

// Mirrors ben-app/mobile/lib/bankAccounts.ts — keep the two in sync if an account changes.
const bankAccounts = [
  {
    bankName: "Zenith Bank",
    accountNumber: "1311486592",
    accountName: "Believers Equipping Network Gospel Ministeries",
    logo: zenithLogo,
  },
  {
    bankName: "Moniepoint",
    accountNumber: "5026474269",
    accountName: "Believers Equipping Network Gospel",
    logo: moniepointLogo,
  },
];

export default bankAccounts;
