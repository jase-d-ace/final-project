import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from './components/App';
import Battle from './components/Battle'

const Navbar = ()=>{
  return(
    <nav>
      <li><Link to='/' component={App} /></li>
      <li><Link to='/battle' component={Battle} /></li>
    </nav>
  )
}
export default Navbar;
