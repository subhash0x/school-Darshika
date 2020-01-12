import {Col, Rate, Row, Avatar, Comment, Input,Upload, message,Button,Icon} from "antd";
import React, {Component} from "react";
import APIClient from "../api_client";
import SchoolComponent from "./SchoolContainer";
import QuickFeedbackAmenity from "./QuickFeedbackAmenity";
import Utils from "../utils";

const {TextArea}=Input;

class QuickFeedback extends Component{

    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
            value: '',
            amenities: [],
            scores: {},
            images:[],
            description:'',
        };
    }

    uploader_props = {
      name: 'file',
      action: 'http://localhost:8000/api/images/',
      headers: {
        Authorization: 'token ' + Utils.getCookie('auth'),
      }
    };

    onUploaderStateChange = (info) => {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            const { images } = this.state;
            console.log(info);
            let uploaded_image = info.file.response;
            console.log("********************" + uploaded_image);
            images.push(uploaded_image);
            this.setState({
                images: images
            });
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      };


    componentDidMount() {
        this.loadAmenities();
    }



    loadAmenities = () => {
        const self = this;
        const { amenities } = self.state;
        let scores = {};
		APIClient.getAmenities({}).then((response) => {
		    console.log(response.data);
			for(let i=0; i<response.data.length; i++){
			    amenities.push(response.data[i]);
			    scores[response.data[i].id] = 2.5;
            }
			self.setState({
                amenities: amenities,
                scores: scores
            });
		}).catch((error) => {
			console.log(error);
		});
	};


    handleSubmit = () => {
        let feedback = {};
        feedback['description'] = document.getElementById("comment").value;
        //console.log(document.getElementById("comment").value);
        feedback['images'] = [];
        for(let imageIndex in this.state.images){
            feedback['images'].push({image_upload_id: this.state.images[imageIndex].id});
        }
        feedback['scores'] = [];
        for(let scoreIndex in this.state.scores){
            feedback['scores'].push({
                amenity_id: scoreIndex,
                score: this.state.scores[scoreIndex]
            });
        }

        feedback['school'] = this.props.schoolId;
        APIClient.addFeedback(feedback).then((response) => {
           console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };


    handleUploadImage = (file,fileList,event) => {

    };


  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAmenityChange = (amenityId, score) => {
      const { scores } = this.state;
      scores[amenityId] = score;
      console.log("amenities score is"+score);
      this.setState({
         scores: scores
      });
  };






    render()
    {


        const { comments, submitting, value } = this.state;


        return(

            <div className="container">


                <Row type='flex' style={{alignText:'center',justifyContent: 'left'}}>
                    <Col sm={24} style={{padding:'10px'}}>


                     <div className='container' style={{fontWeight:'bold',backgroundColor:'grey',alignText:'center',color:'white',justifyContent:'center',padding:'10px'}}>

                       <p style={{marginLeft:'35%',fontSize:'20px',marginTop:'10px'}}>QUICK FEEDBACK</p>

                     </div>

                    </Col>

                </Row>

                <Row>

                    <div className="container" style={{backgroundColor:"white",marginTop:"10px"}}>
                            {
                                this.state.amenities.map((value, index) => {
                                    console.log(value);
                                    return <QuickFeedbackAmenity key={value.id} amenity={value} onChange={this.handleAmenityChange}></QuickFeedbackAmenity>
                                })
                            }

                    </div>


                    </Row>


                <Row>

                    <div className='container'>


                    <Comment
                      avatar={
                        <Avatar
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                          alt="Han Solo"
                        />
                      }
                      content={
                          <TextArea id='comment' rows={4}/>
                      }

                      />

                      </div>

                </Row>

                <Row type='flex' style={{alignText:'center',justifyContent: 'center'}}>
                    <Upload {...this.uploader_props} onChange={this.onUploaderStateChange}>
                    <Button>
                      <Icon type="upload" /> Click to Upload Pictures
                    </Button>
                  </Upload>
                </Row>

                <Button onClick={this.handleSubmit}>Dabaao zor se</Button>

            </div>
        );
    }
}


export default QuickFeedback;

