import React, { Component } from 'react';
import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Card} from "antd";


const {Footer}=Layout

class CustomFooter extends Component{

    render(){

        return (<Footer> <div style={{ position:'relative', textAlign: 'center' }}>Dex Design ©2020 Created by Super Cookie</div></Footer>);

    }
}


export default CustomFooter;