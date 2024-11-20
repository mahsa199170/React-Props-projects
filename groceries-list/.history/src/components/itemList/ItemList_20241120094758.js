import React from 'react';
import LineItem from '../lineItem/LineItem';

const ItemList = ({ handlecheck, handleDelete, items }) => {
  return (
    <ul>
      {items.map((it) => {
        <LineItem />;
      })}
    </ul>
  );
};

export default ItemList;
