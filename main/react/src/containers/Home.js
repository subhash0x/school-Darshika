import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Upload, Input, message, Spin, Icon, Menu, Layout } from 'antd';
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
import Card from "antd/es/card";
//import SubMenu from "antd/es/menu/SubMenu";
const { SubMenu } = Menu;
const { Header, Content, Footer} = Layout;


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

    <Row type="flex" justify="center" style={{backgroundColor:'#E1DCDA',height:'200px',alignContent:'center'}} >
      <Col type="flex" justify="center" sm={8}>
          <Jumbotron num='1234' par='Schools Onbarded'/>
      </Col>
        <Col type="flex" justify="center" sm={8}>
            <Jumbotron num='123678' par='NGOs Onbarded'/>
      </Col>
        <Col  type="flex" justify="center" sm={8}>

            <Jumbotron num='1200000' par='Feedbacks Recorded'/>
      </Col>
    </Row>

     <Row  style={{ background: '#ECECEC', padding: '30px' }} >

         <p style={{textAlign:'center', fontSize:'25px'}}><b>Feedbacks</b></p>

         <Col sm={8}>
                  <div style={{padding: '30px' }}>
                    <Card title="KAYA NAVODAYA VIDYALAYA, Jaipur" bordered={false} style={{ width: 300}}>
                      <p>

                          This school has all amenities for development of students.

                      </p>

                        <p>

                            <b>Monika Pandey</b>
                             <p>
                            Student
                        </p>

                        </p>

                    </Card>
                  </div>

         </Col>

         <Col sm={8}>
                 <div style={{padding: '30px' }}>
                    <Card title="NAVODAYA VIDYALAYA, Lucknow" bordered={false} style={{ width: 300 }}>
                      <p>
                          This school has all amenities for development of students.

                      </p>

                        <p>

                            <b>Paras Jain</b>
                             <p>
                            Parent
                        </p>

                        </p>




                    </Card>
                  </div>

         </Col>


         <Col sm={8}>
                  <div style={{padding: '30px' }}>
                    <Card title="NAVODAYA VIDYALAYA, Lucknow" bordered={false} style={{ width: 300 }}>
                      <p>
                          This school has all amenities for development of students.

                      </p>

                        <p>

                            <b>Paras Jain</b>
                             <p>
                            Parent
                        </p>

                        </p>




                    </Card>
                  </div>

         </Col>

     </Row>


         <Row >

            <Col sm={8}>
               <div>
                    <img height={'300px'} width={'100%'} src={'/static/main/management.png'}></img>
               </div>
            </Col>
            <Col offset={1} sm={15}>
                <div>

                    <p style={{textAlign:'center', fontSize:'25px', padding:'7px', margin:'10px'}}><b>About Us</b></p>

                </div>
                <div style={{ fontSize:'20px', color:'grey', padding:'20px'}}>

                    <p>We are a school management platform, taking responsibility for all your concerns while admitting your ward to any of the government funded schools in India .helps a school manage data, communications, and scheduling. A school system generates and uses a large amount of data. This data must be communicated appropriately to students, faculty, and parents.</p>

                </div>

            </Col>

     </Row>
       <CustomFooter/>

        </div>

    );
  }
}

export default Login;