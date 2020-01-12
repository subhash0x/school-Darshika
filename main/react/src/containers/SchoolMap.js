import React, { Component,useState } from 'react';
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
import Utils from "../utils";


import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";


let videoConstraints = {
    width: 1280,
    height: 720,
    screenshotFormat: "image/webm",
    facingMode: "camera",
};

const antIcon = <Icon type="loading" style={{ fontSize: 24, color: 'white' }} spin />;


class SchoolMap extends Component {

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
				console.log(data);
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

	Map = () => {
		const [selectedSchool, setSelectedSchool] = useState(null);
		const self = this;
		return (
			<GoogleMap
				 defaultZoom ={10}
				 defaultCenter={{lat: self.state.location.lat, lng: self.state.location.lng}}

			>
				{
					self.state.schools.map(school =>
						(<Marker
                                key={school.id}
                                position={{lat:school.location.lat,
                                    lng:school.location.lng}}
                                onClick={()=>{
                                    setSelectedSchool(school);
                                }}
                            />
                    ))
				}

				{ selectedSchool && (
					<InfoWindow
						position={{lat:selectedSchool.location.lat,
										lng:selectedSchool.location.lng
						}}
						onCloseClick={()=>{
							setSelectedSchool(null)
						}}
					>
						<div><a href={"http://localhost:8000/app/schools/".concat(selectedSchool.id)}>{selectedSchool.name}</a></div>
					</InfoWindow>
				)}
			</GoogleMap>
		);
}	;

	render() {

		const WrappedMap = withScriptjs(withGoogleMap(this.Map));


		return (
	    	<div style={{width: '100vw', height:'100vh'}}>
				{
					this.state.schools.map((value, index) => {
						console.log(value);
						return <SchoolComponent key={value.id} school={value}></SchoolComponent>
					})


				}

				<Input id="school"/>
				<Button type="primary" onClick={this.handleClick}>Add School</Button>

                {
                	this.state.location != null ?
                    <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyASIwsQU8_-Ra5taPxlZP3GtWtgnLOJqbI`}
                        loadingElement={<div style={{height: `100%`}}/>}
                        containerElement={<div style={{height: `100%`}}/>}
                        mapElement={<div style={{height: `100%`}}/>}
                    />
                    : null
                }
            </div>
	    );
    }
}

export default SchoolMap;