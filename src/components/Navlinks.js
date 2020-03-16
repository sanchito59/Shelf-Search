import React from 'react';
import { Link } from 'react-router-dom';
// Styles/Assets
import './../Navlinks.scss';

export default function Navlinks() {
  return (
    <div className='navlinks'>
      <ul>
        <li><Link to='/' className='navlink'>Home |</Link></li>
        <li><Link to='/bookSearch' className='navlink'>Search for Books |</Link></li> <li><Link to='/events' className='navlink'>Events |</Link></li>
        <li><Link to='/poetry' className='navlink'>Poetry</Link></li>
        <div class="underbar"></div>
      </ul>
    </div>
  );
}