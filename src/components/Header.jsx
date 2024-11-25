import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-blue shadow-md">
      <Link
        to="/"
        className="p-2 m-3 text-ivory font-bold text-2xl rounded-lg transition delay-1500 hover:text-lightblue"
      >
        Header
      </Link>
    </header>
  );
};

export default Header;
