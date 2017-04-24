import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon';
import Test from './Test';

class App extends Component {

  render() {
    return (
      <div className='main'>
        <h1>Welcome to the Safari Zone!</h1>
        <p>To be a master, you have to think like a master</p>
        <Link to='/test'>Test Link</Link>
        <Link to='/pokemon'>Your Pokes</Link>
        <Link to='/shop'>Buy some Equipment</Link>
      </div>
    )//end of return
  }//end of render
}//end of class

export default App;
