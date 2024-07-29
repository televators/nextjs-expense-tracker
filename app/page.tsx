import AddTransaction from "@/components/AddTransaction";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();

  if ( ! user ) return <Guest />;

  return (
    <section>
      <h1 className="heading">Welcome, { user.firstName }</h1>

      <AddTransaction />
    </section>
  );
}

export default HomePage;
