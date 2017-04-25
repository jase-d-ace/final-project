import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon';

class App extends Component {

  logOut(){
    axios.get('/users/logout').then((response) =>{
      const self = this
      console.log('successfully signed out')
      self.props.history.push('/')
    }).catch((error)=>{
      console.log('logout error: ', error)
    })
  }

  render() {
    return (
      <div className='main'>
        <button onClick={() => this.logOut()}>Log Out</button>
        <h1>Welcome to the Safari Zone!</h1>
        <p>To be a master, you have to think like a master</p>
        <Link to='/pokemon'>Your Pokes</Link>
        <Link to='/shop'>Buy some Equipment</Link>

      </div>
    )//end of return
  }//end of render
}//end of class

export default App;
