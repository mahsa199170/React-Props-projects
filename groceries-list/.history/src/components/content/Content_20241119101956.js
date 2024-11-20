import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: 'One half pound bag of Cocoa Covered Almonds Unsalted',
    },
    {
      id: 2,
      checked: false,
      item: 'Item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'Item 3',
    },
  ]);

  const handlecheck = (id) => {
    return(
        items.filter((item)=> id !== items.id ? {...items, checked:!checked: })
    )
  };

  return (
    <main>
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
              <label>{item}</label>
              <FaTrashAlt role="button" tabIndex="0" />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
