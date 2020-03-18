// import useContext hook and the store so we have access to the state we need
import React, { useContext } from 'react';

import { Store } from '../../context/store';

import Transaction from '../transaction/transaction.component';

export default function TransactionList() {
  // just destructure the piece of state you need with useContext and voilá!
  const { transactions } = useContext(Store);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(({ id, text, amount }) => (
          <Transaction key={id} id={id} text={text} amount={amount} />
        ))}
      </ul>
    </>
  );
}
