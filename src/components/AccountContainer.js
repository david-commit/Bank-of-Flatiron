import React, { useState, useEffect } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';

function AccountContainer({ handleSearch }) {
  const [transaction, setTransaction] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((transaction) => setTransaction(transaction));
  }, []);
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Search onSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;
