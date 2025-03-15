import Advanced from "./components/Home/AdvancedStatis";
import AllInOneBank from "./components/Home/AllInOneBank";
import Banking from "./components/Home/Banking";
import Choose from "./components/Home/Choose";
import Help from "./components/Home/Help";
import Hero from "./components/Home/Hero";
import ManageCard from "./components/Home/ManageCard";
import Savings from "./components/Home/SavingAccount";
import Transactions from "./components/Home/Transactions";

export default function Home() {
  return (
    <>
      <Hero />
      <Transactions />
      <ManageCard />
      <Advanced />
      <Savings />
      <AllInOneBank />
      <Choose />
      <Banking />
      <Help />
    </>
  );
}