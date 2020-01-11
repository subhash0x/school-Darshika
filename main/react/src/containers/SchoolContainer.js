import React, { Component } from 'react';
import Card from "antd/es/card";
import { Button, Row, Col, Upload, Input, message, Spin, Icon, Menu, Layout } from 'antd';

class SchoolComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}


	render() {
		return (
	    	<Row>
				<Col sm={8}>
						  <div style={{padding: '30px' }}>

							<Card title={this.props.school.name} bordered={false} style={{ width: '100vw'}}>
								<h1>

								  {this.props.school.location.city}

							  </h1>
								<Col sm={14} offset={2}><img src={'/static/main/school.png'} height={'150px'} width={'50%'} alt={'logo'} className="thumbnail"/></Col>


							</Card>
						  </div>

         		</Col>

	        </Row>
	    );
    }
}

export default SchoolComponent;