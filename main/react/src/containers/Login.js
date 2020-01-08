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
import APIClient from "../api_client"


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
			schools: [],
			location: null
		};
	}

	componentDidMount() {
		this.loadLocation();
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.location == null && this.state.location != null){
			this.loadSchools();
		}
	}


	handleClick = (event) => {
		let schoolInput = document.getElementById("school");
		const {schools} = this.state;
		schools.push(schoolInput.value);
		this.setState({
			schools : schools
		});

	};


	loadLocation = () => {
		const self = this;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				self.setState({
					location: {lat: position.coords.latitude, lng: position.coords.longitude}
				});
			});
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	};


	loadSchools = (event) => {
		const self = this;
		let params = {lat: this.state.location.lat, lng: this.state.location.lng};
		APIClient.getSchools(params).then(function (response) {
				let data = response.data;
				const { schools } = self.state;
				for(let i = 0; i<data.length; i++){
					schools.push(data[i]);
				}
				self.setState({
					schools: schools
				});
			}
		).catch(function (error) {
            console.log(error);
        });
	};

	render() {

		return (
	    	<div className="layout" style={{backgroundColor:"white",marginTop:"10px"}}>
		      	<h1>Hello Diddi!</h1>
				{
					this.state.schools.map((value, index) => {
						console.log(value);
						return <SchoolComponent key={value.id} school={value}></SchoolComponent>
					})
				}
				<Input id="school"/>
				<Button type="primary" onClick={this.handleClick}>Add School</Button>
	        </div>
	    );
    }
}

export default Login;