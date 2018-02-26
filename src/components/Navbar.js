import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>
  <div>
    <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
    <NavLink style={{ marginRight: '10px' }} to="/posts/new">New post</NavLink>
  </div>

export default Navbar;
