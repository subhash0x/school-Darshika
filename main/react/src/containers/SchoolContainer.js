import React, { Component } from 'react';
import Card from "antd/es/card";
import { Button, Row, Col, Upload, Input, message, Spin, Icon, Menu, Layout, Avatar} from 'antd';



class SchoolComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}


	render() {
		return (
	    	<Row>
				<Row>
					<Col sm={20} offset={0}><img src={this.props.school.cover_image} height={'300px'} width={'100%'} alt={'logo'} className="thumbnail" style={{position:'relative', margin:'0px', backgroundColor:'rgb(240,240,240)', padding: '0px', borderRadius:'0px'}}/></Col>
				</Row>
				<Col sm={20}>
						  <div style={{padding: '0px' }}>
							  <Row  style={{ display: 'block',  padding: '0px'}}>
            						<Row className="container" style={{position:'relative', margin:'10px', backgroundColor:'rgb(240,240,240)', padding: '30px', borderRadius:'5px'}}>
										<Col sm={3}>
											 <Avatar size={64} icon="user" src={this.props.school.profile_image} />
										</Col>
										<Col sm={5}>
											<Row>
												<h2>{this.props.school.name}</h2>
											</Row>
											<Row>
												<h3>{this.props.school.location.city}, {this.props.school.location.state}</h3>
											</Row>
										</Col>
									</Row>
							  </Row>

							{/*<Card title={this.props.school.name} bordered={false} style={{ width: '100vw'}}>*/}
							{/*	<h1>*/}

							{/*	  {this.props.school.location.city}*/}

							{/*  </h1>*/}


							{/*</Card>*/}
						  </div>

         		</Col>

	        </Row>
	    );
    }
}

export default SchoolComponent;