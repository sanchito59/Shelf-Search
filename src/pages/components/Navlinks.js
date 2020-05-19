import React from 'react';
import LeftMenu from './LeftMenu'
import { Drawer, Button } from 'antd';

class Navbar extends React.Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <nav className="menuBar">
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
      </nav>
    );
  }
}
export default Navbar;
