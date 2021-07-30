// import logo from './logo.svg';
import React from 'react';
import '@/styles/App.scss';
import { Menu, Layout } from 'element-react'
let { Item, ItemGroup, SubMenu } = Menu
let { Col } = Layout
function App() {
  return (
    <div className="App">
      <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal">
        <Item index="1">处理中心</Item>
        <SubMenu index="2" title="我的工作台">
          <Item index="2-1">选项1</Item>
          <Item index="2-2">选项2</Item>
          <Item index="2-3">选项3</Item>
        </SubMenu>
        <Item index="3">订单管理</Item>
      </Menu>
      <div className="line"></div>
      <Col span={3} className="colHeight">
        <Menu defaultActive="2" className="el-menu-vertical-demo">
          <SubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
            <ItemGroup title="分组一">
              <Item index="1-1">选项1</Item>
              <Item index="1-2">选项2</Item>
            </ItemGroup>
            <ItemGroup title="分组2">
              <Item index="1-3">选项3</Item>
            </ItemGroup>
          </SubMenu>
          <Item index="2"><i className="el-icon-menu"></i>导航二</Item>
          <Item index="3"><i className="el-icon-setting"></i>导航三</Item>
        </Menu>
      </Col>
    </div>
  );
}

export default App;
