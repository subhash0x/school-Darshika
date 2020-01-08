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

//
// let videoConstraints = {
//     width: 1280,
//     height: 720,
//     screenshotFormat: "image/webm",
//     facingMode: "camera",
// };
//
// const antIcon = <Icon type="loading" style={{ fontSize: 24, color: 'white' }} spin />;
//
// class Login extends Component {
//
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			showTest: false,
// 			schools: [
// 				'Apex Publc School',
// 				'Navodaya',
// 				'DPS'
// 			]
// 		};
// 	}
//
// 	handleClick = (event) => {
// 		let schoolInput = document.getElementById("school");
// 		const {schools} = this.state;
// 		schools.push(schoolInput.value);
// 		this.setState({
// 			schools : schools
// 		});
//
// 	};
//
// 	addSchool = (event) => {
//
// 	};
//
// 	loadSchools = (event) => {
// 		const self = this;
//
// 		axios({
//             method: 'get',
//             url: window.location.protocol + '://'+window.location.hostname + ':' + window.location.port + '/schools',
//             params: {'id': id * 24 + 5},
//             CORS: true,
//         })
//         .then(function (response) {
//             let data = response.data;
// 			const { schools } = self.state;
// 			for(let school in data){
// 				schools.push(school);
// 			}
// 			self.setState({
// 				schools: schools
// 			});
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// 	};
//
// 	render() {
//
// 		return (
// 	    	<div className="layout" style={{backgroundColor:"white",marginTop:"10px"}}>
// 		      	<h1>Hello Diddi!</h1>
// 				{
// 					this.state.schools.map((value, index) => {
// 						console.log(value);
// 						return <SchoolComponent key={value} school={value}></SchoolComponent>
// 					})
// 				}
// 				<Input id="school"/>
// 				<Button type="primary" onClick={this.handleClick}>Add School</Button>
// 	        </div>
// 	    );
//     }
// }
//
// export default Login;


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