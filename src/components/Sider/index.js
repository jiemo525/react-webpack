import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 240 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>电子产品</span></span>}>
          <SubMenu key="g1" title="笔记本">
            <Menu.Item key="1">mac</Menu.Item>
            <Menu.Item key="2">thinkpad</Menu.Item>
          </SubMenu>
          <SubMenu key="g2" title="显示器">
            <Menu.Item key="3">AOC</Menu.Item>
            <Menu.Item key="4">DELL</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>家电</span></span>}>
          <Menu.Item key="5">电视</Menu.Item>
          <Menu.Item key="6">洗衣机</Menu.Item>
          <SubMenu key="sub3" title="电话">
            <Menu.Item key="7">电话1</Menu.Item>
            <Menu.Item key="8">电话2</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="setting" /><span>家电2</span></span>}>
          <Menu.Item key="9">电视1</Menu.Item>
          <Menu.Item key="10">电视2</Menu.Item>
          <Menu.Item key="11">电视3</Menu.Item>
          <Menu.Item key="12">电视4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<Link to="/about"><span><Icon type="setting" />
            <span>关于</span></span></Link>}>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;