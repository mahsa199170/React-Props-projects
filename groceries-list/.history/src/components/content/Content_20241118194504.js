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
      <p>Hello {name}!</p>
      <button onClick={handleNameChange}>click me</button>
    </main>
  );
};

export default Content;
