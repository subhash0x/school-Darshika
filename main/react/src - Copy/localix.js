import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import {data} from './containers/data.js';

class Localix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en'
    };

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(e) {
    e.preventDefault();
    let lang = e.target.value;
    this.setState(prevState => ({
      language: lang
    }))
  }

  render() {
   data.setLanguage(this.state.language);
    return (
      <div>e.lang
         <select onChange={this.handleLanguageChange}>
          <option value="en">En- English</option>
          <option value="hi">Hi- Hindi</option>
        </select>
        {data.how}
      </div>
    );
  }
}


 export default Localix;
