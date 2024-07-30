'use client';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import addTransaction from '@/app/actions/addTransaction';
import styles from '@/styles/addTransactionForm.module.scss';

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>( null );
  const clientAction = async ( formData: FormData ) => {
    const { data, error } = await addTransaction( formData );

    if ( error ) {
      console.error( error );
      toast.error( error );
    } else {
      console.log( data );
      toast.success( 'Transaction added' );
      formRef.current?.reset();
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3>Add Transaction</h3>

      <form ref={ formRef } action={ clientAction }>
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

        <button className="btn">Save</button>
      </form>
    </div>
  )
}
export default AddTransaction
