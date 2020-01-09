import React, { Component } from 'react';
import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Card} from "antd";


const {Footer}=Layout

class CustomFooter extends Component{

    render(){

        return (<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>);

    }
}


export default CustomFooter;