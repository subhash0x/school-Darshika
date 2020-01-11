import React, { Component } from 'react';
import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Card} from "antd";


const {Footer}=Layout

class CustomFooter extends Component{

    render(){

        return (<Footer> <div style={{ position:'relative', textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</div></Footer>);

    }
}


export default CustomFooter;