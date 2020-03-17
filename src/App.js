import React from 'react';

import Header from './components/header/header.component';
import Balance from './components/balance/balance.component';
import IncomeExpenses from './components/income-expenses/income-expenses.component';
import TransactionList from './components/transaction-list/transaction-list.component';
import AddTransaction from './components/add-transaction/add-transaction.component';

import './styles.css';

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}
