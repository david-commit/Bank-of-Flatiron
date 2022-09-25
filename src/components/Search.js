import React, { useState } from 'react';
import Transaction from './Transaction';

function Search(handleSearch) {
  // const [ search, setSearch ] = useState("")

  function handleChange(e) {
    // setSearch(e.target.value)
    handleSearch(e.target.value);
  }

  return (
    <div className='ui large fluid icon input'>
      <input
        type='text'
        placeholder='Search your Recent Transactions'
        onChange={() => {
          console.log('Searching...');

          handleChange();
        }}
      />
      <i className='circular search link icon'></i>
    </div>
  );
}

export default Search;
