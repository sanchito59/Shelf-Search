// Functionality
import React from 'react';
// Components
import Navlinks from './Navlinks.js';
// Styles/Assets
import './../App.css';

function Header(props) {
  console.log('header props: ', props)
  setTimeout(() => {
    // logging 5 times?	
    if (typeof props.quote === 'undefined') {
      console.log('need to mount?');
      // debugger;	
    } else {
      console.log('qod: ', props.quote);
    }
  }, 1500)

  return (
    <header className="App-header">
      <p className='quote-of-the-day'>TEST QUOTE{props.quote}</p>
      <h1 className="shelf-search-title"><i className="fas fa-book"></i> Shelf Search</h1>
      <Navlinks />
    </header>
  )
}

export default Header;