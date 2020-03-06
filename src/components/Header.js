// Functionality
import React from 'react';
// Components
import Navlinks from './Navlinks.js';
// Styles/Assets
import './../App.css';

function Header() {
  return (
    <header className="App-header">
      <h1><i className="fas fa-book"></i> Book Search</h1>
      <Navlinks />
    </header>
  )
}

export default Header;