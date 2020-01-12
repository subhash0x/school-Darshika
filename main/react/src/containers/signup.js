import React, { Component } from 'react';
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete} from 'antd';
import CustomFooter from "./footer"
import CustomHeader from "./header";
import APIClient from "../api_client";
import {message} from "antd/lib/index";
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class signup extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
      e.preventDefault();
      if(e.target.getAttribute('id') === 'login')
          return;
      this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
              APIClient.signup(values).then((response) => {
                  message.info("Signed up successfully!");
                  window.location = "/app/login";
              }).catch((error) => {
                  message.error("Couldn't sign up. Please try again!");
                  console.log(error);
                  console.log('Received values of form: ', values);
              });
          }
      });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {


    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '91',
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
      </Select>,
    );

       const adharformt = getFieldDecorator('prefix', {
      initialValue: '91',
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
      </Select>,
    );



    return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <center><h2>Join now to be heard and contribute</h2></center>

          <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input your full name!',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              }
            ],
          })(<Input.Password />)}
        </Form.Item>


        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>



 <Form.Item label="Adhar Number">
          {getFieldDecorator('aadhaar', {
            rules: [{ required: true, message: 'Please input your Adhar number!' }],
          })(<Input maxLength={12} style={{ width: '100%' }} />)}
        </Form.Item>



        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('is_ngo', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              Check if you registering as an NGO?
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>  <center>Already Registered? <a id="login" href="/app/">Login</a></center>


        </Form.Item>

      </Form>

    );
  }
}

const SignupForm = Form.create({ name: 'register' })(signup);

 export default SignupForm;