import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Checkbox, message, Radio, Spin} from "antd";
import React, { Component } from 'react';
import APIClient from "../api_client"
import axios from "axios"
import Utils from "../utils"


class SchoolSideNav extends Component {


    constructor(props){
        super(props);
        this.state = {
            amenities: [],
            selected: null,
            isAmenitiesLoading: true
        }
    }

    componentDidMount() {
        const self = this;
        APIClient.getAmenities({}).then((response) => {
            const { amenities } = this.state;
            console.log(response.data);
            for(let i=0; i<response.data.length; i++)
            {
                amenities.push(response.data[i]);
            }
            self.setState({
                amenities: amenities,
                isAmenitiesLoading: false
            });
        });
    }

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
        this.props.handleChange(e.target.value);
    };


  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (

            <Col sm={5}  style={{ display: 'block',  padding: '10px'}}>
            <div className="container" style={{position:'relative', margin:'50px', backgroundColor:'rgb(240,240,240)', padding: '30px', borderRadius:'5px'}}>
                <h3>Sort by individual amenity</h3>
                {
                    (!this.state.isAmenitiesLoading) ?
                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                        {
                            this.state.amenities.map(amenity => (
                                <Radio style={radioStyle} value={amenity.id}>
                                    {amenity.label}
                                </Radio>
                            ))
                        }
                    </Radio.Group>  :
                        <div>
                            <br/>
                            <center><Spin/></center>
                        </div>
                }

                <br/><br/>
                <Button onClick={(event) => this.props.handleChange(null)}>Clear Selection</Button>
            </div>
        </Col>

    );
  }
}


 export default SchoolSideNav
