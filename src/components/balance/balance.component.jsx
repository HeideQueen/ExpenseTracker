import React, { useContext } from 'react';

import { Store } from '../../context/store';

export default function Balance() {
  const { transactions } = useContext(Store);

  const balance = transactions.reduce((acc, i) => acc + i.amount, 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>${balance}</h1>
    </>
  );
}
