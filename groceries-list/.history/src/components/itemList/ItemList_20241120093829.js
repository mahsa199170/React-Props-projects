import React from 'react';

const ItemList = ({ handlecheck, handleDelete, items }) => {
  return (
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
  );
};

export default ItemList;
