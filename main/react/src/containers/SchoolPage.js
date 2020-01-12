import React, { Component } from 'react';
import axios from 'axios';
import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Card,Rate,Avatar,List,Modal, Spin} from "antd";

import CustomHeader from "./header";
import CustomFooter from "./footer";
import QuickFeedback from "./QuickFeedback";
import APIClient from "../api_client";
import QuickFeedbackAmenity from "./QuickFeedbackAmenity";
import ReviewComponent from "./ReviewComponent";
import index from "rc-scroll-anim";



class SchoolPage extends Component{



    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            visible: false,
            school: null,
            description:'',
            feedbacks:[],
            scores:[],
            ngo_subscribed:[],
            amenities_scores:[],


        };
    }


    componentDidMount() {
        const { schoolId } = this.props.match.params;

        const {feedbacks} = this.state;

        const {ngo_subscribed} = this.state;



        APIClient.getSchoolById(schoolId).then((response) => {


            for(let i=0;i<response.data.feedbacks.length;i++)
            {
                feedbacks.push(response.data.feedbacks[i]);

            }

            for(let i=0;i<response.data.scores.length;i++)
            {
               // this.setState({[response.data.scores[i].amenity.label]:response.data.scores[i].score});
                scores[response.data.scores[i].amenity.label]=response.data.scores[i].score;


                console.log(response.data.scores[i].amenity.label+" value is: "+response.data.scores[i].score);

            }


            for(let i=0;i<response.data.subscriptions.length;i++)
            {
                if(response.data.subscriptions[i].owner.is_ngo)
                {
                    ngo_subscribed.push(response.data.subscriptions[i].owner.email);
                }
            }

           this.setState({
               school: response.data,
               feedbacks:feedbacks,
               ngo_subscribed:ngo_subscribed,
               amenities_score:response.data.scores,

           });
        }).catch((error) => {
            console.log(error);
        });
    }


    showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };


    render() {

        const { visible, loading } = this.state;




        return(

            <div className='container'>

                <CustomHeader/>

                {
                    this.state.school != null ?
                        <div><Row style={{padding:'10px'}}>

                        <Col sm={24}>
                            <div className="container">
                                <img height='400px' width={'100%'} src={'/static/main/school2.jpg'}></img>
                                <div className='container' style={{backgroundColor:'grey',padding:'20px',height:'100px'}}>

                                    <div className="container" style={{padding:'5px',color:'white',fontSize:'20px',fontWeight:'bold'}}>{this.state.school.name}</div>

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


                        <div>
                            <Button type="primary" onClick={this.showModal}>
                              Quick Feedback
                            </Button>
                            <Modal
                              visible={visible}
                              title="Please Submit the feedback"
                              onOk={this.handleOk}
                              onCancel={this.handleCancel}
                              footer={[
                                <Button key="back" onClick={this.handleCancel}>
                                  Return
                                </Button>,
                                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                  Submit
                                </Button>,
                                ]}
                                >

                                <QuickFeedback schoolId={1} />
                            </Modal>
                        </div>


                     </Row></div> : <Spin/>
                    }

                    <Row>

                        <Col sm={16}>

                         <Row style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',padding:'20px',backgroundColor:'rgba(0, 0, 0, 0.85)',width: '55vw',marginLeft:'3vw',marginTop:'50px'}}>
                                         <b>REVIEWS</b>
                         </Row>

                        <div className="container" style={{backgroundColor:"white",float:'left'}}>
                            {

                                this.state.feedbacks.map((value, index) => {

                                    // console.log(value);



                                    return <ReviewComponent owner={value.owner.email} description={value.description} scores={value.scores} images={value.images}/>

                                })
                            }

                        </div>

                            </Col>

                        <Col sm={8}>

                            <div className='container' style={{marginRight:'10px'}}>

                                 <Row style={{color:'white',justifyContent:'center',display:'flex',padding:'20px',backgroundColor:'rgba(0, 0, 0, 0.85)',marginTop:'50px'}}>
                                         <b>NGOs Subscribed</b>
                                 </Row>

                                <Row>

                                    <div className="container" style={{backgroundColor:"grey",marginTop:"10px",padding:'10px',color:'white'}}>
                                    {
                                        this.state.ngo_subscribed.map((value, index) => {
                                            return <div><Avatar style={{ backgroundColor: '#87d068' }} icon="user" /><span style={{marginLeft:'5px'}}><b>{value}</b></span></div>
                                        })
                                    }

                                     </div>

                                </Row>


                                <Row>
                                {/*     <div className="container" style={{backgroundColor:"white",marginTop:"10px"}}>*/}
                                {/*        {*/}
                                {/*            this.state.amenities_scores.map((value, index) => {*/}
                                {/*                console.log(value);*/}
                                {/*                return <p>{value.amenity.label}</p>*/}
                                {/*            })*/}
                                {/*        }*/}

                                {/*</div>*/}
                                </Row>



                            </div>


                        </Col>

                    </Row>

                   <Row>




                   </Row>

                <CustomFooter/>
            </div>

        );
    }
}

export default SchoolPage;