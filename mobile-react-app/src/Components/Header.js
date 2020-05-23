import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <span className="border-b p-3">
        AppName
      </span>

      <Navigation />
    </header>
  );
}


export default Header;