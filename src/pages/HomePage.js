import React, { Component } from 'react';
import Header from '../layouts/Header.js';
import Footer from '../layouts/Footer.js';
import VideoPlayer from '../components/VideoPlayer.js';
import BannerImage from '../images/Banner.jpeg';
import GooglePlayButton from '../images/GooglePlayStore.png';
import AppleStoreButton from '../images/AppleStore.png';
import BlueLine from '../images/blueLine.png';

const googlePlayButtonStyle = {
  top: '60%',
  left: '30%',
  position: 'absolute'
}

const appleStoreButtonStyle = {
top: '60%',
right: '30%',
  position: 'absolute'
}

const BannerImageStyle = {
  position: 'relative',
  top: '0',
  relative: '0'

}

export default class HomePage extends Component {

  constructor(props){
    super(props);
    this.appleStoreButtonClicked = this.appleStoreButtonClicked.bind(this);
    this.googlePlayButtonClicked = this.googlePlayButtonClicked.bind(this);
  }

  googlePlayButtonClicked(){
      console.log('google play button was clicked');
  }

  appleStoreButtonClicked(){
      console.log('apple store button was clicked');
  }


  render() {
    return (
      <div style={{backgroundColor: "#ebebeb"}}>
        <Header />

        <div className="bannerImage" style={BannerImageStyle}>
        <a href='https://play.google.com/store' style={googlePlayButtonStyle} onClick={this.googlePlayButtonClicked}>
          <img src={GooglePlayButton} position='absolute' top="-100px"/>

          </a>
           <a href='https://www.apple.com' style={appleStoreButtonStyle} onClick={this.appleStoreButtonClicked}>
          <img src={AppleStoreButton}/>

          </a>
          <img src={BannerImage} width="100%" height="100%"/>
        </div>
         <div className="blueLine">
          <img src={BlueLine} width="100%" height="10%"/>
        </div>
        <VideoPlayer />
        <p> Video for our company </p>
      </div>
    );
  }
}
