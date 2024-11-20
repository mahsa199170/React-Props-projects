import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const LineItem = ({ handleDelete, handleDelete, it }) => {
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
      <FaTrashAlt role="button" tabIndex="0" onClick={() => handleDelete(id)} />
    </li>
  );
};

export default LineItem;
