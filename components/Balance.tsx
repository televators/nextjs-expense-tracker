import getUserBalance from "@/app/actions/getUserBalance";
import { formatCurrency } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <>
      <h4>Your balance</h4>
      <h2>{ formatCurrency( balance ?? 0 ) }</h2>
    </>
  )
};

export default Balance;
