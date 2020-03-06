// Functionality
import React from 'react';
import { Link } from 'react-router-dom';
// Styles/Assets
import './../App.css';

function Header() {
  return (
    <header className="App-header">
      <h1><i className="fas fa-book"></i> Book Search</h1>
      <Link to='/'>Home</Link> | <Link to='poemOfDay'>Poetry</Link> | <Link to='/bookSearch'>Search for Books</Link>
    </header>
  )
}

export default Header;