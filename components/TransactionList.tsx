import { Transaction } from "@/types/Transaction";
import getTransactions from "@/app/actions/getTransactions";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if ( error ) return <p className="error">{ error }</p>

  return (
    <>
      <h3>History</h3>

      <ul className="list">
        { transactions && transactions.map( ( transaction: Transaction, index: number ) => (
          <p key={ index }>{ transaction.text }</p>
        ) ) }
      </ul>
    </>
  )
}
export default TransactionList
