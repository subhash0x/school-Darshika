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
              axios.defaults.headers.common['Authorization'] = token; // for all requests
              Utils.setCookie("auth", token, 7);
              message.error("Logged in successfully!");
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

        <Col span={20}  style={{ display: 'block',  padding: '10px'}}>

            <div className="container" style={{position:'relative', marginLeft:'30px', backgroundColor:'rgb(220,220,220)', padding: '10px', borderRadius:'5px'}}>

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                      {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                      })(
                        <Input
                            id='email'
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
                          id='password'
                          placeholder="Password"
                        />,
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(<Checkbox>Remember me</Checkbox>)}
                      <a className="login-form-forgot" href="">
                        Forgot password
                      </a>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                      </Button>
                      Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        </Col>

    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

 export default WrappedNormalLoginForm;
