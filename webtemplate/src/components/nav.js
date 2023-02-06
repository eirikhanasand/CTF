import React, { Component } from 'react';


export default class Nav extends Component {
  render() {
    return (
      <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">S2G</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">HOME</a></li>
              <li><a href="/challenges">CHALLENGES</a></li>
              <li><a href="/secrets">SECRETS</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}
