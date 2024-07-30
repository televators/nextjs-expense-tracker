import AddTransaction from "@/components/AddTransaction";
import Guest from "@/components/Guest";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import { currentUser } from "@clerk/nextjs/server";
import TransactionList from "@/components/TransactionList";

const HomePage = async () => {
  const user = await currentUser();

  if ( ! user ) return <Guest />;

  return (
    <section>
      <h3 className="heading">Welcome, { user.firstName }</h3>

      <Balance />

      <IncomeExpense />

      <AddTransaction />

      <TransactionList />
    </section>
  );
}

export default HomePage;
