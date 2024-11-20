import React from 'react';

const Footer = ({ countItems }) => {
  const today = new Date();
  return (
    <footer>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
