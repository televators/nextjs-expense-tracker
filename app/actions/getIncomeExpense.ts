'use server';
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getIncomeExpense(): Promise<{
  income?: number;
  expense?: number;
  error?: string;
}> {
  const { userId } = auth();

  if ( ! userId ) return {
    error: 'User not found',
  };

  try {
    const transactions = await db.transaction.findMany( {
      where: { userId },
    } );
    const amounts = transactions.map( ( transaction ) => transaction.amount );
    const income = amounts.filter( ( transaction ) => transaction > 0 ).reduce( ( acc, transaction ) => acc + transaction );
    const expense = amounts.filter( ( transaction ) => transaction < 0 ).reduce( ( acc, transaction ) => acc + transaction );

    return {
      income,
      expense: Math.abs( expense ),
    }

  } catch ( error ) {
    return {
      error: 'Error retrieving user income and expenses',
    };
  }
}

export default getIncomeExpense;
