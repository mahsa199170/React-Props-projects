import React from 'react';

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      <p>Number of items in the list: {length}</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
