import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const LeftMenu = () => {
  const isDesktop = window.innerWidth > 900;

  return (
    <Menu mode={isDesktop ? 'horizontal' : 'inline'}>
      <Menu.Item key="logo">
        <Link to='/'><i className="fas fa-book"></i> Shelf Search</Link>
      </Menu.Item>
      <Menu.Item key="home">
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item key="searchBooks">
        <Link to='/bookSearch'>Search for Books</Link>
      </Menu.Item>
      <Menu.Item key="searchEvents">
        <Link to='/events'>Events</Link>
      </Menu.Item>
      <Menu.Item key="searchPoetry">
        <Link to='/poetry'>Poetry</Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
