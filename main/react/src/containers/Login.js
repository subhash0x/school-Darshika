import React, { Component } from 'react';
import axios from 'axios';
import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input} from "antd";
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import nodata from '../images/1.png';
import border from '../images/border_back.png';
import logo from '../images/logo.png';
import LoginForm from "./LoginForm";

import './capturevideo.css';
import TestComponent from './TestComponent';
import SchoolComponent from "./SchoolContainer";
//import SubMenu from "antd/es/menu/SubMenu";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class Login extends Component {
  render() {
    return (
        <div className="layout">
    <Header className="header" >
      <div className="logo" />

        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }} >
            <Menu.Item key="1" style={{ fontSize: '18px'}}> <Col sm={3}><b>Schoolदर्शिका</b></Col></Menu.Item>


            <Menu.Item style={{ fontSize: '16px' }} key="2"> <Col sm={3}>About Us</Col></Menu.Item>


            <Menu.Item style={{ fontSize: '16px' , float: 'right'}} key="3">Log In</Menu.Item>

      </Menu>

    </Header>


     <Row type="flex" justify="start">
      <Col sm={8}>

          <LoginForm/>

      </Col>
      <Col sm={11} offset={3}><img src={'/static/main/school.png'} height={'500px'}  alt={'logo'} className="thumbnail"/></Col>
    </Row>


    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </div>



    );
  }
}


export default Login;

// ReactDOM.render(<Login />, document.getElementById('root'));
