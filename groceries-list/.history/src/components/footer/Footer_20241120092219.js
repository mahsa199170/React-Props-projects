import React from 'react';

const Footer = ({ length }) => {
  const today = new Date();

  const item = length > 1 ? 'items' : 'item';
  return (
    <footer>
      <p>
        {length} List {item}
      </p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
