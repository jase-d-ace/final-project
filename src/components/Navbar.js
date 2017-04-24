import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from './components/App';
import Battle from './components/Battle';
import Pokemon from './components/Pokemon'

const Navbar = ()=>{
  return(
    <nav>
      <li><Link to='/' component={App} /></li>
      <li><Link to='/battle' component={Battle} /></li>
      <li><Link to='/pokemon' component={Pokemon} /></li>
    </nav>
  )
}
export default Navbar;
