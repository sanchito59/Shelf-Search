import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Link to='/'><i className="fas fa-book"></i> Shelf Search</Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Link to='/bookSearch'>Search for Books</Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Link to='/events'>Events</Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Link to='/poetry'>Poetry</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;
