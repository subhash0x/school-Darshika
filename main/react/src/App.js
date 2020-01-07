import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect'
import BaseRouter from './routes';
import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
    /*<HttpsRedirect>*/
  		<div className="App">
    		<Router>
    			<BaseRouter />
    		</Router>
  		</div>
  	/*</HttpsRedirect>*/
    );
  }
}

export default App;
