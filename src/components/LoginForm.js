import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class LoginForm extends Component{

  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }//end of state
  }//end of constructor

  handleUsernameInput(e){
    this.setState({
      username: e.target.value
    })//end of setState
  }//end of handleEmailInput

  handlePasswordInput(e){
    this.setState({
      password: e.target.value
    })//end of setState
  }//end of handlePasswordInput

  render(){
    return(
      <div className='landing-page'>
        <Link to='/signup'>Sign Up</Link>
      <form action='/users/login' method='POST'>
        <label>Username</label>
        <input placeholder='username' name='user[username]' onChange={(e)=>this.handleUsernameInput(e)} />
        <label>Password</label>
        <input type='password' name='user[password]' placeholder='Password' onChange={(e)=>this.handlePasswordInput(e)} />
        <input type='submit' value="Log In" />
      </form>
    </div>
    )//end of return
  }//end of render

}//end of class

export default LoginForm;
