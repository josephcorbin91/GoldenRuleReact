import React, { Component } from 'react';
import Navigation from './Navigation.js';
import Footer from './layouts/Footer.js';
import BackgroundImage from './images/Banner.png';

var style = {
	width: "100%",
	height: "400px",
	backgroundImage: "url("+ BackgroundImage + ")"
};
export default class App extends Component {


  render() {
    return (
      <div style = { style }>
        <Navigation />
         <Footer />
      </div>
    );
  }
}
