import React from 'react';
import styled from 'styled-components';
import LeftMenu from './LeftMenu'
import { Drawer, Button } from 'antd';

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;
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
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>
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
