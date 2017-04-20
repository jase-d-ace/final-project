import React from 'react';
import App from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';

export default (
  <BrowserRouter>
    <div className='App'>
      <Route exact path='/' component={App} />
    </div>
  </BrowserRouter>
)
