import React from 'react';

const Header = () => {
  return <div style={headerStyle}>헤더</div>;
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: '#fff',
};

export default Header;
