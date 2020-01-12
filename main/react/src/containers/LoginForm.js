import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Checkbox, message} from "antd";
import React, { Component } from 'react';
import APIClient from "../api_client"
import axios from "axios"
import Utils from "../utils"


class LoginForm extends Component {

    handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          APIClient.login(values.email, values.password).then((response) => {
              let token = response.data.token;
              axios.defaults.headers.common['Authorization'] = 'token ' + token; // for all requests
              Utils.setCookie("auth", token, 7);
              message.info("Logged in successfully!");
              window.location = "/app";
          }).catch((error) => {
              console.log(error);
              message.error("Couldn't login. Please try again!");
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (

        <Col sm={20}  style={{ display: 'block',  padding: '10px'}}>

            <div className="container" style={{position:'relative', margin:'50px', backgroundColor:'rgb(240,240,240)', padding: '30px', borderRadius:'5px'}}>

            <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <br></br>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
             <br></br>
          <Button type="primary" htmlType="submit" className="login-form-button" block>
            Log in
          </Button>
            <br></br>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> Or <a href="">register now!</a></div>
        </Form.Item>
      </Form>
                </div>
        </Col>

    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

 export default WrappedNormalLoginForm;
