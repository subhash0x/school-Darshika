import React, { Component } from 'react';
import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Card} from "antd";

import Logout from "./logout"
const {Header}=Layout
import {Link} from 'react-router-dom'



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


            <Menu.Item style={{ fontSize: '16px' , float: 'right'}} key="3"><Logout/></Menu.Item>

      </Menu>

    </Header>);

    }



 }


export default CustomHeader;