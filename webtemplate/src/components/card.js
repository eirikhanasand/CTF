import React, { Component } from 'react';

export default class Card extends Component {

  constructor(){
    super()
    this.state = {blink:false}
  }
  shouldComponentUpdate(nextProps, nextState) {


      if (this.props.coin.last !== nextProps.coin.last ||
        this.props.coin.yesterday_last !== nextProps.coin.yesterday_last ||
        this.props.coin.volume !== nextProps.coin.volume
      ){
       this.setState({blink: true});
       this.timeoutId= setTimeout(function () {
        this.setState({blink: false});
      }.bind(this), 1000);
      }


      return true;
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }
  render() {
    return (
      <div>
        <h1>This was removed</h1>
        {/* Note to self: the flag for this challenge should be S2G{p3rs0n@l_f@v0r1t3} */}
      </div>
    );
  }
}
