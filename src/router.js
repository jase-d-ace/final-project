import React from 'react';
import App from './components/App';
import Test from './components/Test'
import { BrowserRouter, Route } from 'react-router-dom';

export default (
  <BrowserRouter>
    <div className='App'>
      <Route exact path='/' component={App} />
      <Route path='/test' component={Test} />
    </div>
  </BrowserRouter>
)
