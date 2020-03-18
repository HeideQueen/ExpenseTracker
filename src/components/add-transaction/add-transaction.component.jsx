import React, { useState, useContext } from 'react';

import { Store } from '../../context/store';

export default function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(Store);

  function handleChange(event, type) {
    const val = event.target.value;
    type === 'text' ? setText(val) : setAmount(parseInt(val));
  }

  function handleClick(e) {
    e.preventDefault();

    const id = Math.floor(Math.random() * 100000000);

    addTransaction({ id, text, amount });

    setText('');
    setAmount('');
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <form id='form'>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={event => handleChange(event, 'text')}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={event => handleChange(event, 'amount')}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn' onClick={e => handleClick(e)}>
          Add Transaction
        </button>
      </form>
    </>
  );
}
