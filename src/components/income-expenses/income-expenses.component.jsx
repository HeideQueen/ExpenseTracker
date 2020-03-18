import React, { useContext } from 'react';

import { Store } from '../../context/store';

export default function IncomeExpenses() {
  const { transactions } = useContext(Store);

  const income = transactions
    .filter(i => i.amount > 0)
    .reduce((acc, i) => acc + i.amount, 0)
    .toFixed(2);

  const expenses = Math.abs(
    transactions.filter(i => i.amount < 0).reduce((acc, i) => acc + i.amount, 0)
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>
          +${income}
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id='money-minus' className='money minus'>
          -${expenses}
        </p>
      </div>
    </div>
  );
}
