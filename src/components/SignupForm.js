import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/Form.css';

class SignupForm extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    }//end of state
  }//end of constructor

  handleUsernameInput(e){
    this.setState({
      email: e.target.value
    })//end of setState
  }//end of handleEmailInput

  handlePasswordInput(e){
    this.setState({
      password: e.target.value
    })//end of setState
  }//end of handlePasswordInput

  handleConfirmationInput(e){
    this.setState({
      passwordConfirmation: e.target.value
    })//end of setState
  }//end of handleConfirmationInput

  render(){
    return(
    <div className='form-container'>
    <h1>Welcome, Trainer! Tell us about yourself</h1>
      <div className='login-form' id='signup-form'>
      <form className='form' action='/users' method='POST'>
      <div className='form-inputs'>
        <div className='username-input'>
          <label>Enter Your Username</label><br />
          <input type='text' placeholder='Username' onChange={(e)=>this.handleUsernameInput(e)} id="username" name='user[username]' />
        </div>
        <div className='password-input'><br />
          <label>Enter Your Password</label><br />
          <input type='password' id='password' name='user[password]' placeholder='Your password' onChange={(e)=>this.handlePasswordInput(e)} />
        </div>
      </div><br />
        <input className='button' type='submit' value="Sign Up" />
      </form>
    </div>
    </div>
    )//end of return
  }//end of render

}//end of class
export default SignupForm;
