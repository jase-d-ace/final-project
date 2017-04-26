import React from 'react';
import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Battle from './components/Battle'
import Pokemon from './components/Pokemon';
import Shop from './components/Shop';
// import One from './components/One';
import UserInterface from './UserInterface';
import { BrowserRouter, Route } from 'react-router-dom';

export default (
  <BrowserRouter>
    <div className='App'>
      <UserInterface />
      <Route exact path='/' component={LoginForm} />
      <Route path='/signup' component={SignupForm} />
      <Route path='/home' component={App} />
      <Route path='/shop' component={Shop} />
      <Route path='/battle' component={Battle} />
      <Route exact path='/pokemon' component={Pokemon} />
      {/* <Route path='/pokemon/:id' component={One} /> */}
    </div>
  </BrowserRouter>
)
