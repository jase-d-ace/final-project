import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/Form.css';

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
        <h1>Welcome to the Safari Zone!</h1>
          <div className='login-form'>
          <form className='form' action='/users/login' method='POST'>
          <div className='form-inputs'>
            <div className='username-input'>
              <label>Username</label><br/>
              <input placeholder='Username' name='user[username]' onChange={(e)=>this.handleUsernameInput(e)} />
            </div>
            <div className='password-input'>
              <label>Password</label><br/>
              <input type='password' name='user[password]' placeholder='Password' onChange={(e)=>this.handlePasswordInput(e)} />
            </div><br/>
          <input className='button' type='submit' value="Get Catching" />
          </div>
        </form>
      </div>
    </div>
    )//end of return
  }//end of render

}//end of class

export default LoginForm;
