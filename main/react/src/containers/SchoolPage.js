import React, { Component } from 'react';
import axios from 'axios';
import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Card} from "antd";

import CustomHeader from "./header";
import CustomFooter from "./footer";


class SchoolPage extends Component{

    render() {

        return(

            <div className='container'>

                <CustomHeader/>


                <Row style={{padding:'40px'}}>

                    <Col sm={24}>
                        <div>
                            <img height='400px' width={'100%'} src={'/static/main/school2.jpg'}></img>
                            <div className='container' style={{backgroundColor:'grey',height:'100px',alignItems:'center'}}>

                                <p style={{padding:'20px',color:'white',fontSize:'20px',fontWeight:'bold'}}>Kendra Vidyalaya, Meerut </p>

                            </div>

                        </div>
                    </Col>

                </Row>



                <CustomFooter/>

            </div>


        );
    }
}

export default SchoolPage;