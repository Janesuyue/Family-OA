import React, { Component } from 'react';
import { 
    Layout,
    Menu, 
    Icon,
    Row, 
    Col, 
    Avatar,
    message,
    Dropdown
} from 'antd';
import '../sass/Home.scss';

import Admin from "./Admin";
import User from "./User";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import DelProduct from "./DelProduct";


import {
      BrowserRouter as Router,
      Route,
      NavLink,
    } from "react-router-dom";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

// 用户名 点击事件
const onUserClick = ({ key }) => {
    message.info(`Click on item ${key}`);
};

const menu = (
    <Menu onClick={onUserClick}>
      <Menu.Item key="1">个人信息</Menu.Item>
      <Menu.Item key="2">用户管理</Menu.Item>
      <Menu.Item key="3">退出登录</Menu.Item>
    </Menu>
);
// 用户名 end
export default class Home extends Component {
    state = {
        collapsed: false,
    };
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <div>
                <Router>
                <Layout>
                    <Header className="header">
                        <Row type="flex" justify="space-between">
                            <Col span={4} className="Logo">
                                顾家后台管理
                            </Col>
                            <Col span={4}>
                                <Row type="flex" justify="space-around">
                                    <Col>
                                        <Avatar size="large" icon="user" />
                                    </Col>
                                    <Col>
                                    <Dropdown overlay={menu}>
                                        <a className="ant-dropdown-link" href="#">
                                        Hover me<Icon type="down" />
                                        </a>
                                    </Dropdown>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{ background: "#fff" }}>
                            <Menu
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                            style={{ height: "100%", borderRight: 0 }}
                            >
                            <SubMenu
                                key="sub1"
                                title={
                                <span>
                                    <Icon type="user" />
                                    用户管理
                                </span>
                                }
                            >
                                <Menu.Item key="1">
                                <NavLink to="/home/admin">管理员信息</NavLink>
                                </Menu.Item>
                                <Menu.Item key="2">
                                <NavLink to="/home/user">用户信息</NavLink>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                <span>
                                    <Icon type="laptop" />
                                    商品管理
                                </span>
                                }
                            >
                                <Menu.Item key="5">
                                <NavLink to="/home/productlist">商品列表</NavLink>
                                </Menu.Item>
                                <Menu.Item key="6">
                                <NavLink to="/home/addproduct">新增商品</NavLink>
                                </Menu.Item>
                                <Menu.Item key="7">
                                <NavLink to="/home/delproduct">删除商品</NavLink>
                                </Menu.Item>
                                <Menu.Item key="8">
                                <NavLink to="/">根据ID获取商品信息</NavLink>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                <span>
                                    <Icon type="notification" />
                                    商品分类管理
                                </span>
                                }
                            >
                                <Menu.Item key="9">商品分类列表</Menu.Item>
                                <Menu.Item key="10">新增商品分类</Menu.Item>
                                <Menu.Item key="11">删除商品分类</Menu.Item>
                                <Menu.Item key="12">根据ID获取商品分类信息</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={
                                <span>
                                    <Icon type="audit" />
                                    订单管理
                                </span>
                                }
                            >
                                <Menu.Item key="9">获取订单列表</Menu.Item>
                                <Menu.Item key="10">修改商品信息</Menu.Item>
                                <Menu.Item key="11">删除商品分类</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: "0 24px 24px" }}>
                            <Content
                            style={{
                                background: "#fff",
                                padding: 24,
                                margin: 0,
                                minHeight: 500
                            }}
                            >
                            <div>
                                <Route exact path="/home" component={Admin} />
                                <Route path="/home/admin" component={Admin} />
                                <Route path="/home/user" component={User} />
                                <Route path="/home/productlist" component={ProductList} />
                                <Route path="/home/addproduct" component={AddProduct} />
                                <Route path="/home/delproduct" component={DelProduct} />
                            </div>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
                </Router>
            </div>
        )
    }
}