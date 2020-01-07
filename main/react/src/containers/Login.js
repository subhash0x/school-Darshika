import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Upload, Input, message, Spin, Icon } from 'antd';
import Webcam from 'react-webcam';
import nodata from '../images/1.png';
import border from '../images/border_back.png';
import logo from '../images/logo.png';
import './capturevideo.css';
import TestComponent from './TestComponent';
import SchoolComponent from "./SchoolContainer";


let videoConstraints = {
    width: 1280,
    height: 720,
    screenshotFormat: "image/webm",
    facingMode: "camera",
};

const antIcon = <Icon type="loading" style={{ fontSize: 24, color: 'white' }} spin />;

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showTest: false,
			schools: [
				'Apex Publc School',
				'Navodaya',
				'DPS'
			]
		};
	}

	handleClick = (event) => {
		let schoolInput = document.getElementById("school");
		const {schools} = this.state;
		schools.push(schoolInput.value);
		this.setState({
			schools : schools
		});

	};

	addSchool = (event) => {

	};

	loadSchools = (event) => {
		const self = this;

		axios({
            method: 'get',
            url: window.location.protocol + '://'+window.location.hostname + ':' + window.location.port + '/schools',
            params: {'id': id * 24 + 5},
            CORS: true,
        })
        .then(function (response) {
            let data = response.data;
			const { schools } = self.state;
			for(let school in data){
				schools.push(school);
			}
			self.setState({
				schools: schools
			});
        })
        .catch(function (error) {
            console.log(error);
        });
	};

	render() {

		return (
	    	<div className="layout" style={{backgroundColor:"white",marginTop:"10px"}}>
		      	<h1>Hello Diddi!</h1>
				{
					this.state.schools.map((value, index) => {
						return <SchoolComponent school={value}></SchoolComponent>
					})
				}
				<Input id="school"/>
				<Button type="primary" onClick={this.handleClick}>Add School</Button>
	        </div>
	    );
    }
}

export default Login;