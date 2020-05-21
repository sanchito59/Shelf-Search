import React from 'react';
import styled from 'styled-components';
import LeftMenu from './LeftMenu'
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;
`;

const OpenMenu = styled(MenuOutlined)`
  font-size: 24px;
  float: right; 
  height: 32px;
  padding: 6px;
  margin-top: 10px;
  display: none;
  background: none;
  
  
  @media (max-width: 767px) {
    display: inline-block;
  }
`;

class Navbar extends React.Component {
  state = {
    current: 'mail',
    visible: false,
  }
  showDrawer = () => { this.setState({ visible: true, }); };
  onClose = () => { this.setState({ visible: false, }); };

  render() {
    return (
      <Nav className="menuBar">
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <OpenMenu onClick={this.showDrawer} />
          <Drawer
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu />
          </Drawer>
        </div>
      </Nav>
    );
  }
}
export default Navbar;
