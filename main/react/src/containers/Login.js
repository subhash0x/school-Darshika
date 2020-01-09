import React, { Component } from 'react';
import axios from 'axios';
import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Card} from "antd";
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import nodata from '../images/1.png';
import border from '../images/border_back.png';
import logo from '../images/logo.png';
import LoginForm from "./LoginForm";

import CustomFooter from "./footer"
import CustomHeader from "./header";
import Jumbotron from "./jumbotron";
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

            <CustomHeader/>


     <Row type="flex" justify="start">
      <Col sm={8}>

          <LoginForm/>

      </Col>
      <Col sm={14} offset={2}><img src={'/static/main/school.png'} height={'500px'} width={'100%'} alt={'logo'} className="thumbnail"/></Col>
    </Row>

    <Row type="flex" justify="center" style={{backgroundColor:'rgb(66,65,65)',height:'200px',alignContent:'center'}} >
      <Col sm={8}>
          <Jumbotron num='1234' par='Schools Onbarded'/>
      </Col>
        <Col sm={8}>
            <Jumbotron num='123678' par='NGOs Onbarded'/>
      </Col>
        <Col sm={8}>

            <Jumbotron num='1200000' par='Feedbacks Recorded'/>
      </Col>
    </Row>

     <Row>

         <Col>
                  <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title="Card title" bordered={false} style={{ width: 300 }}>
                      <p>Card content</p>
                      <p>Card content</p>
                      <p>Card content</p>
                    </Card>
                  </div>


         </Col>

     </Row>

       <CustomFooter/>

        </div>

    );
  }
}


export default Login;

// ReactDOM.render(<Login />, document.getElementById('root'));
