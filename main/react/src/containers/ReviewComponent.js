import React,{Component} from "react";
import Col from "antd/es/descriptions/Col";
import Row from "antd/es/grid/row";
import QuickFeedbackAmenity from "./QuickFeedbackAmenity";
import Card from "antd/es/card";
import Avatar, {Button, Modal} from "antd";

class ReviewComponent extends Component{

    constructor(props) {
        super(props);
        this.state = { isOpen: false,
                       visible:false,
                       clickedImage:'',
         loading: false,};
        this.showModal=this.showModal.bind(this);
    }

     handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log('clicked');
    };

    showModal = (image) => {
    this.setState({
      visible: true,
       clickedImage:image,
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


        return(

             <div style={{padding: '5px',width: '55vw',marginLeft:'3vw' }}>

                 <Modal
                              visible={this.state.visible}
                              title="Image"
                              onOk={this.handleOk}
                              onCancel={this.handleCancel}
                              footer={[
                                <Button key="back" onClick={this.handleCancel}>
                                  Return
                                </Button>
                                ]}
                                >
                     <img src={this.state.clickedImage} width='400px' height='400px'></img>
                 </Modal>

                 <Card title= {this.props.owner}>

                        <p
                          style={{
                            fontSize: 14,
                            color: 'rgba(0, 0, 0, 0.85)',
                            marginBottom: 16,
                            fontWeight: 500,
                          }}
                        >

                             <p style={{marginTop:"10px"}}>
                            {
                                this.props.scores.map((value, index) => {
                                    console.log(value);

                                   return <span
                          style={{ marginTop: 16 ,padding:'5px'}}
                          type="inner"
                          float='left'
                                   >{value.amenity.label}: <span style={{color:'grey'}}>{value.score}</span>
                        </span>})

                            }
                             </p>



                             <div className="container" style={{backgroundColor:"white",marginTop:"10px"}}>
                            {
                                this.props.images.map((value, index) => {
                                    console.log(value);

                                    return <img alt='Image' onClick={()=> this.showModal(value.image_upload.file)}
                                                src={value.image_upload.file} height='100px' width='100px'>
                                    </img>



                                })
                            }



                    </div>

                        </p>

                        <Card type="inner" title="Description">
                            <p>{this.props.description}</p>
                        </Card>

                 </Card>
                  </div>

        );
    }


}

export default ReviewComponent;