import { Button, DatePicker, version, Layout, Menu, Breadcrumb, Row, Col , Form, Icon, Input, Checkbox} from "antd";
import React, { Component } from 'react';
import Utils from "../utils";


class Logout extends Component {

    render() {

        Utils.eraseCookie('auth');

        let token=Utils.getCookie('auth');

        let res=null;

        if(token!=null)
        {
            res=<div name='func'>Logout</div>;
        }
        else
        {
            res=<div name='func'>Sign Up</div>;
        }

        return(
            res
        );
    }
}

export default Logout