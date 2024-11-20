import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const LineItem = ({ handlecheck, handleDelete, it }) => {
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
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
