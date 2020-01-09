import React, { Component } from 'react';
import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Card} from "antd";
const {Header}=Layout

class CustomHeader extends Component{

    render(){

    return(<Header className="header" >
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

    </Header>);

    }
}


export default CustomHeader;