'use client';
import styles from '@/styles/addTransactionForm.module.scss';

const AddTransaction = () => {
  const clientAction = async ( formData: FormData ) => {
    // DEBUG:
    console.log( formData.get( 'text' ), formData.get( 'amount' ) );
  };

  return (
    <div className={styles.formContainer}>
      <h3>Add Transaction</h3>

      <form action={ clientAction }>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" name="text" placeholder="Enter transaction label" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (Negative: Expense, Positive: Income)
          </label>
          <input type="text" id="amount" name="amount" placeholder="Enter transaction amount" step='0.01' />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
export default AddTransaction
