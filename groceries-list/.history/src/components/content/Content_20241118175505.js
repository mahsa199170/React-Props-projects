import React, { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('');

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick1 = () => {
    return handleNameChange();
  };

  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleClick1}>click me</button>
    </main>
  );
};

export default Content;
