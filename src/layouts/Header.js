import React, { Component } from 'react';
import { Grid, Form, FormControl, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import WebsiteLogo from '../images/WebSiteLogoImage.png';
import '../css/Navigation.css';
import reFirebase from '../reFirebase';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { logout: false };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    reFirebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({ logout: true });
      } else {
        // No user is signed in.
        this.setState({ logout: false });
      }
    });
  }
  login() {
    const provider = new reFirebase.auth.GoogleAuthProvider();

    reFirebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("User signin " + user + " with token " + token );
      // ...
      // User is signed in.
      this.setState({ logout: true });
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
      console.log("Err " + errorCode + " msg " + errorMessage
        + " email " + email + " cred " + credential);
    });
  }
  logout() {
    reFirebase.auth().signOut().then(() => {
      this.setState({ logout: false });
    }, function(error) {
      // An error happened.
    });
  }
  render() {
    return (
      <div className="Navigation__container">
        <Navbar inverse >
          <Navbar.Header>
           <Navbar.Brand>
              <a href="#">&#9776; React-Bootstrap
          <img src={WebsiteLogo} style={{width:100, marginTop: -7}} />
          </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullLeft>
              <NavItem >
                App
              </NavItem>
              <NavItem >
                Org
              </NavItem>
               <NavItem >
                Publicity
              </NavItem>
              <NavItem >
                Sponsor
              </NavItem>
              <NavItem >
                Q&A
              </NavItem>
              
              {this.state.logout
                ? <NavItem onClick={this.logout} href="">
                    Logout <Glyphicon glyph="log-out" /></NavItem>
                : <NavItem onClick={this.login} href="">
                    Login <Glyphicon glyph="transfer" /></NavItem>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}
