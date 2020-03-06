import React from 'react';
import { Link } from 'react-router-dom';

export default function Navlinks() {
  return (
    <div>
      <Link to='/'>Home</Link> | <Link to='poemOfDay'>Poetry</Link> | <Link to='/bookSearch'>Search for Books</Link>
    </div>
  );
}