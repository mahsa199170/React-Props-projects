import React from 'react';
import LineItem from '../lineItem/LineItem';

const ItemList = ({ handlecheck, handleDelete, items }) => {
  return (
    <ul>
      {items.map((it) => {
        return (
          <LineItem
            key={it.id}
            handleDelete={handleDelete}
            handlecheck={handlecheck}
            it={it}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
