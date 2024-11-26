import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-blue shadow-md">
      <Link to="/" className="link text-2xl ml-3">
        =Home=
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
