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
import CustomHeader from "./header";
import SchoolListHeader from "./SchoolListHeader";
import SchoolSideNav from "./SchoolSideNav"


let videoConstraints = {
    width: 1280,
    height: 720,
    screenshotFormat: "image/webm",
    facingMode: "camera",
};

const antIcon = <Icon type="loading" style={{ fontSize: 24, color: 'white' }} spin />;

class SchoolsList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showTest: false,
			schools: [],
			location: null,
			isSchoolsLoading: true
		};
	}

	componentDidMount() {
		this.loadLocation();
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.location == null && this.state.location != null){
			this.loadSchools();
			this.loadAmenities();
			//this.loadFeedbacks(1);
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

	loadAmenities = () => {
		APIClient.getAmenities({}).then((response) => {
			console.log(response.data);
		}).catch((error) => {
			console.log(error);
		});
	};

	// loadFeedbacks = (schoolId) => {
	// 	APIClient.getFeedbacks({school: schoolId}).then((response) => {
	// 		console.log(response.data);
	// 	}).catch((error) => {
	// 		console.log(error);
	// 	})
	// };


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
		if(this.state.location == null)
			return;
		this.setState({
			isSchoolsLoading: true
		});
		const self = this;
        let params = {lat: this.state.location.lat, lng: this.state.location.lng};
        if(self.state.amenity != null)
        	params.amenity=self.state.amenity;
        APIClient.getSchools(params).then(function (response) {
				let data = response.data;
				console.log(data);
				const { schools } = self.state;
				for(let i = 0; i<data.length; i++){
					schools.push(data[i]);
				}
				self.setState({
					schools: schools,
					isSchoolsLoading: false
				});
			}
        ).catch(function (error) {
            console.log(error);
        });
	};

	handleAmenityChange = (value) => {
		const self = this;
		this.setState({
			schools: [],
			amenityFilter: value
		}, () => {
			self.loadSchools();
		});
	};

	render() {

		return (
			<div className="layout" style={{backgroundColor:"white",marginTop:"10px"}}>
				<SchoolListHeader/>
				<SchoolSideNav handleChange={this.handleAmenityChange}/>
			{
				(this.state.location != null && !this.state.isSchoolsLoading)?
						<div>
						<Col sm={15}  style={{justifyContent:'left', alignItems:'left', display: 'block',  padding: '10px'}}>
						{
							this.state.schools.map((value, index) => {
								console.log(value);
								return(
									<SchoolComponent key={value.id} school={value}></SchoolComponent>
								);
							})
						}
						</Col></div> :
						<Col sm={15}>
							<br/>
							<br/>
							<br/>
							<center>
								<Spin/>
								<h4>Loading schools near you</h4>
							</center>
						</Col>

			}
			</div>

	    );
    }
}

export default SchoolsList;