'use server';
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction( formData: FormData ): Promise<TransactionResult> {
  const textValue = formData.get( 'text' );
  const amountValue = formData.get( 'amount' );

  // Check for input values
  if ( ! textValue || textValue === '' || ! amountValue ) {
    return {
      error: 'Text or amount is missing'
    };
  }

  // Ensure text is a proper String
  const text: string = textValue.toString();
  // Ensure amount is a proper Float
  const amount: number = parseFloat( amountValue.toString() );

  // Try to get logged in user
  const { userId } = auth();

  if ( ! userId ) {
    return {
      error: 'User not found',
    }
  }

  try {
    const transactionData: TransactionData = await db.transaction.create( {
      data: {
        text,
        amount,
        userId,
      }
    } );

    revalidatePath( '/' );

    return {
      data: transactionData,
    };
  } catch (error) {
    console.error( error );

    return {
      error: 'Failed to add transaction'
    };
  }
}

export default addTransaction;
