import React, { useState } from 'react';

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

  return (
    <main>
      {items.map((list) => {
        const { id, checked, item } = list;
        return (
          <div key={id}>
            <h3>{checked}</h3>
            <h3>{item}</h3>
          </div>
        );
      })}
    </main>
  );
};

export default Content;
