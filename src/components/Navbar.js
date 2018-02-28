import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navbar = () =>
  <div className="navBar">
    <Button className="homeButton" bsStyle="success"><NavLink to="/" className="buttonName">Home</NavLink></Button>
    <Button className="newPostButton" bsStyle="success"><NavLink to="/posts/new" className="buttonName">New post</NavLink></Button>
  </div>

export default Navbar;
