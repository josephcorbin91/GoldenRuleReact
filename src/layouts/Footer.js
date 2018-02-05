import React, { Component } from 'react';
import { Grid, Form, FormControl, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="Navigation__container">
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">React Eshop</Link>
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
