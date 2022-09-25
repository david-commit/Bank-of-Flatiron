import React from 'react';

function Transaction({ id, category, date, description, amount }) {
  return (
    <tr key={id}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
