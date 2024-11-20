import React, { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('defaul');

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleClick1}>click me</button>
    </main>
  );
};

export default Content;
