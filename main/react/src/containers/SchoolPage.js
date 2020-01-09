import React, { Component } from 'react';
import axios from 'axios';
import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Card,Rate,Avatar,List} from "antd";

import CustomHeader from "./header";
import CustomFooter from "./footer";


class SchoolPage extends Component{


    render() {

        const data = [
      {
        title: 'Monika Pandey',
      },
      {
        title: 'Paras Jain',
      },
      {
        title: 'Diddi ki jai',
      },
      {
        title: 'Bhaiya pagal hai',
      },
    ];

        return(

            <div className='container'>

                <CustomHeader/>

                <Row style={{padding:'30px'}}>

                    <Col sm={24}>
                        <div className="container" style={{padding:'10px'}}>
                            <img height='400px' width={'100%'} src={'/static/main/school2.jpg'}></img>
                            <div className='container' style={{backgroundColor:'grey',padding:'20px',height:'100px'}}>

                                <div className="container" style={{padding:'5px',color:'white',fontSize:'20px',fontWeight:'bold'}}>Kendra Vidyalaya, Meerut </div>

                                    <Rate disabled defaultValue={2} />

                                <div className="container" style={{position:'relative',float:'right'}}>

                                    <Button type='primary' >
                                        SUBSCRIBE
                                    </Button>

                                </div>

                            </div>

                        </div>
                    </Col>

                </Row>




                <Row type='flex' style={{alignText:'center',justifyContent: 'center'}}>

                    <h2 style={{color:'grey'}}>Rate This School</h2>


                        <div className='container' style={{paddingLeft:'10px'}}> <Rate allowHalf defaultValue={2.5}/></div>



                </Row>




                <Row type='flex' style={{alignText:'center',justifyContent: 'center'}}>
                    <Col sm={20} style={{padding:'10px'}}>



                     <div className='container' style={{fontSize:'15px',fontWeight:'bold',backgroundColor:'grey',padding:'10px',alignText:'center',color:'white',justifyContent:'center'}}>

                         REVIEWS


                     </div>

                    <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                              <List.Item>
                                <List.Item.Meta
                                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                  title={<a href="https://ant.design">{item.title}</a>}
                                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                              </List.Item>
                            )}
                          />

                          </Col>

                </Row>

                <CustomFooter/>

            </div>


        );
    }
}

export default SchoolPage;