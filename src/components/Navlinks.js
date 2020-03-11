import React from 'react';
import { Link } from 'react-router-dom';
// Styles/Assets
import './../Navlinks.css';

export default function Navlinks() {
  return (
    <div className='navlinks'>
      <Link to='/'>Home</Link> | <Link to='/bookSearch'> Search for Books</Link> | <Link to='/events'>Events</Link> | <Link to='/poetry'>Poetry</Link>
    </div>
  );
}