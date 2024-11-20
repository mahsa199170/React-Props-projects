import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

// Correct way to set defaultProps
Header.defaultProps = {
  title: 'Default Title',
};

export default Header;
