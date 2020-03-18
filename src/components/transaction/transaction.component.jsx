import React, { useContext } from 'react';

import { Store } from '../../context/store';

export default function Transaction({ id, text, amount }) {
  const { deleteTransaction } = useContext(Store);

  const sign = amount > 0 ? '+' : '-';

  return (
    <>
      <li className={amount > 0 ? 'plus' : 'minus'}>
        {text}{' '}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className='delete-btn' onClick={() => deleteTransaction(id)}>
          X
        </button>
      </li>
    </>
  );
}
