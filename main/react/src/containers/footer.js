import React, { Component } from 'react';
import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Card} from "antd";


const {Footer}=Layout

class CustomFooter extends Component{

    render(){

        return (<Footer> <div style={{ position:'relative', textAlign: 'center' }}>School Darshika ©2019 Hacked by <b>Super Cookie</b> for NEC - Digitalizing Rural Education</div></Footer>);

    }
}


export default CustomFooter;