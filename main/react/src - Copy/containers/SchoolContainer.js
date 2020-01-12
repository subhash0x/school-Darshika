import React, { Component } from 'react';

class SchoolComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}


	render() {
		return (
	    	<div>
		      	<h1>{this.props.school.name}, {this.props.school.location.city}</h1>
	        </div>
	    );
    }
}

export default SchoolComponent;