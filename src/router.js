import React from 'react';
import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Test from './components/Test';
import Pokemon from './components/Pokemon';
import Shop from './components/Shop'
import { BrowserRouter, Route } from 'react-router-dom';

export default (
  <BrowserRouter>
    <div className='App'>
      <Route exact path='/' component={LoginForm} />
      <Route path='/signup' component={SignupForm} />
      <Route path='/home' component={App} />
      <Route path='/shop' component={Shop} />
      <Route path='/pokemon' component={Pokemon} />
    </div>
  </BrowserRouter>
)
