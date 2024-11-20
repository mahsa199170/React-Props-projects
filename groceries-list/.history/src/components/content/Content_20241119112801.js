import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ itemsNumber }) => {
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
    const listItems = items.map((item) =>
      id === item.id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => id !== item.id);
    setItems(updatedItems);
    localStorage.setItem('shoppingList', JSON.stringify(updatedItems));
  };

  //   useEffect(() => {
  //     const sortedItems = JSON.parse(localStorage.getItem('shoppingList'));
  //     if (sortedItems) {
  //       setItems(sortedItems);
  //     }
  //   }, []);
  useEffect(() => {
    const x = items.length;
    return x;
  }, [items]);

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