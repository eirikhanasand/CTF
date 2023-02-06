import React, { Component } from 'react';
import _ from 'lodash';
import Card from './card';



export default class MainContainer extends Component {
  constructor(){
    super();
    this.state = {
      coins:[],
    }
    this.headers = {
      'content-type': 'application/json',
      'accept': 'application/json',
    };

    this.options = {
      headers: this.headers,
      timeout: 5000,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="section">
              <h3 className="header">Looks basic.. but you still havent found my flag...</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.coins.length > 0 && this.renderCoinCard()}
        </div>
      </div>
    );
  }
}
