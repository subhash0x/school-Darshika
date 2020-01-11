import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect'
import BaseRouter from './routes';
import 'antd/dist/antd.css';
import { render } from "react-dom";
import { LocalizeProvider } from "react-localize-redux";
import Login from "./containers/Login";
import Route from "react-router-dom/es/Route";




class App extends Component {

  render() {
    return (
    	<LocalizeProvider>
          <div className="App">
    		<Router>
    			<BaseRouter />
    		</Router>
  		</div>
      </LocalizeProvider>
    );
  }
}

export default App;
