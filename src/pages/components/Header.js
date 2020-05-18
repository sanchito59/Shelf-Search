import React from 'react';
import Navlinks from './Navlinks.js';

const Header = () => {
  return (
    <header className="App-header" >
      <h1 className="shelf-search-title"><i className="fas fa-book"></i> Shelf Search</h1>
      <Navlinks />
    </header>
  )
}

export default Header;
