import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ items, setItems, handleDelete, handlecheck }) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((it) => {
            const { id, checked, item } = it;
            return (
              <li className="item" key={id}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handlecheck(id)}
                />
                <label
                  onDoubleClick={() => handlecheck(id)}
                  style={checked ? { textDecoration: 'line-through' } : null}
                >
                  {item}
                </label>
                <FaTrashAlt
                  role="button"
                  tabIndex="0"
                  onClick={() => handleDelete(id)}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p style={{ marginTop: '2rem' }}> Your List is Empty</p>
      )}
    </main>
  );
};

export default Content;
