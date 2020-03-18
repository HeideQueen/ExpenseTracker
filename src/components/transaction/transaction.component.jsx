import React from 'react';

export default function Transaction({ text, amount }) {
  const sign = amount > 0 ? '+' : '-';

  return (
    <>
      <li className={amount > 0 ? 'plus' : 'minus'}>
        {text}{' '}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className='delete-btn'>X</button>
      </li>
    </>
  );
}
