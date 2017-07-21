import React from 'react';
import { Icon, Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/addCategory">添加类别</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/editCategory">编辑类别</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/addBrand">添加品牌</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/editBrand">编辑品牌</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="4">Help</Menu.Item>
  </Menu>
);
class Header extends React.Component {
    render() {
        return (
            <header>
                <Dropdown overlay={menu} trigger={['click']}>
                    <div className="menu_icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Dropdown>
                
                <Icon type="user" className="sign_in_icon" style={{color: '#49a9ee', fontSize: 30}} />
            </header>
        );
    }
}

export default Header;