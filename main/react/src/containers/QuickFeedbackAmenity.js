import {Col, Rate, Row} from "antd";
import React,{Component} from "react";

class QuickFeedbackAmenity extends Component{


    handleChange = (score) => {
      this.props.onChange(this.props.amenity.id, score);
    };

    render()
    {
        return(

            <div className='container'>

             <Col sm={12} style={{padding:'5px'}}>

                        <div className='container' style={{padding:'10px',backgroundColor:'#DCDCDC'}}>

                                <div className='container' style={{float:'left',marginRight:'30px',marginTop:'5px'}}>

                                <p style={{fontSize:'15px'}}><b>{this.props.amenity.label}</b></p>

                                 </div>

                                <div className='container' style={{position:'relative',fontSize:'15px'}}> <Rate allowHalf defaultValue={2.5} onChange={this.handleChange}/></div>

                        </div>

             </Col>


             </div>

        );
    }

}


export default QuickFeedbackAmenity;