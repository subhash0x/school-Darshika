import React, { Component } from 'react';
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';

import CustomFooter from "./footer"
import CustomHeader from "./header";
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
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  // validateToNextPassword = (rule, value, callback) => {
  //   const { form } = this.props;
  //   if (value && this.state.confirmDirty) {
  //     form.validateFields(['confirm'], { force: true });
  //   }
  //   callback();
  // };



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
    <div className="layout" >
        <CustomHeader/>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
             <Form.Item label="Name">

          <Input />
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
              },
              // {
              //   validator: this.validateToNextPassword,
              // },
            ],
          })(<Input.Password />)}
        </Form.Item>
        {/*<Form.Item label="Confirm Password" hasFeedback>*/}
        {/*  {getFieldDecorator('confirm', {*/}
        {/*    rules: [*/}
        {/*      {*/}
        {/*        required: true,*/}
        {/*        message: 'Please confirm your password!',*/}
        {/*      },*/}
        {/*      {*/}
        {/*        validator: this.compareToFirstPassword,*/}
        {/*      },*/}
        {/*    ],*/}
        {/*  })(<Input.Password onBlur={this.handleConfirmBlur} />)}*/}
        {/*</Form.Item>*/}


        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>



 <Form.Item label="Adhar Number">
          {getFieldDecorator('Adhar', {
            rules: [{ required: true, message: 'Please input your Adhar number!' }],
          })(<Input maxLength={12} style={{ width: '100%' }} />)}
        </Form.Item>



        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>

        </Form.Item>
           <div>
        <CustomFooter/>
        </div>
      </Form>
    </div>



    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(signup);

 export default WrappedRegistrationForm;