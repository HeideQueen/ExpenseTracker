import React, { useState } from 'react';

export default function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  function handleChange(event, type) {
    const val = event.target.value;
    type === 'text' ? setText(val) : setAmount(val);
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={event => handleChange(event, 'text')}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={event => handleChange(event, 'amount')}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}
