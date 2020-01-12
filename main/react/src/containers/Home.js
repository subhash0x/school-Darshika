import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Button, Row, Col, Upload, Input, message, Spin, Icon, Menu, Layout, Form} from 'antd';
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
import globalTranslations from "../translations/global.json";
import loginTranslations from "../translations/login.json";
import { withLocalize } from "react-localize-redux"
import { Translate } from "react-localize-redux"
import { renderToStaticMarkup } from "react-dom/server";
import SignupForm from './signup'
//import SubMenu from "antd/es/menu/SubMenu";
const { SubMenu } = Menu;
const { Header, Content, Footer} = Layout;


class Home extends Component {

    handleShowSignup = (showSignup) => {
        this.setState({
            showSignup: showSignup
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            showSignup : false
        };
        this.props.initialize({
          languages: [
            { name: "English", code: "en" },
            { name: "हिंदी", code: "fr" }
          ],
          translation: globalTranslations,
          options: { renderToStaticMarkup }
        });
        this.props.addTranslation(loginTranslations);
    }


    render() {
    return (
        <div className="layout">


            <CustomHeader/>

     <Row type="flex" justify="start">
      <Col sm={8}>
          <br/>
          {
              this.state.showSignup ?
                  <div>
                        <SignupForm handleShowSignup={this.handleShowSignup}/>
                      <br/>
                  </div>
                   :
                  <div>
                      <LoginForm handleShowSignup={this.handleShowSignup}/>
                  </div>
          }

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

         <p style={{textAlign:'center', fontSize:'25px'}}><b><Translate id="login.feedback">Feedbacks</Translate></b></p>

         <Col sm={8}>
                  <div style={{padding: '30px' }}>
                    <Card title="Mision Girls Sr.Sec.School" bordered={false} style={{ width: 300}}>
                      <p>

                          <Translate id="login.amenities">This school has all amenities for development of students.</Translate>

                      </p>

                        <p>
                            <b> <Translate id="login.mon">Monika Pandey</Translate> </b>  </p>
                        <Translate id="login.x">Student</Translate>



                    </Card>
                  </div>

         </Col>

         <Col sm={8}>
                 <div style={{padding: '30px' }}>
                    <Card title="Govt. Sec.School Kishanpura" bordered={false} style={{ width: 300 }}>
                      <p>
                       <Translate id="login.parascmt">   This school has all amenities for development of students.</Translate>

                      </p>

                        <p>

                            <b><Translate id="login.paras">Paras Jain</Translate></b>
                             <p>
                                 <Translate id="login.Parent"> Parent</Translate>
                        </p>

                        </p>




                    </Card>
                  </div>

         </Col>


         <Col sm={8}>
                  <div style={{padding: '30px' }}>
                    <Card title=" Govt. Sec. School, Peplaj " bordered={false} style={{ width: 300 }}>
                      <p>
                         <Translate id="login.parascmt">   This school has all amenities for development of students.</Translate>

                      </p>

                        <p>

                            <b><Translate id="login.subhash">Subhash Bhil</Translate></b>
                             <p>
                           <Translate id="login.Parent"> Parent</Translate>
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

                    <p style={{textAlign:'center', fontSize:'25px', padding:'7px', margin:'10px'}}><b><Translate id="login.Aboutus">About Us</Translate></b></p>

                </div>
                <div style={{ fontSize:'20px', color:'grey', padding:'20px'}}>

                    <Translate id="login.abtus"> We are a school management platform, taking responsibility for all your concerns while admitting your ward to any of the government funded schools in India .helps a school manage data, communications, and scheduling. A school system generates and uses a large amount of data. This data must be communicated appropriately to students, faculty, and parents.</Translate>

                </div>

            </Col>

     </Row>
       <CustomFooter/>

        </div>

    );
  }
}

export default withLocalize(Home);