import React, { Component } from 'react';
import axios from 'axios';

class SignupForm extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
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
      <form action='/users' method='POST'>
        <input type='text' placeholder='Username' onChange={(e)=>this.handleUsernameInput(e)} id="username" name='user[username]' />
        <input type='password' id='password' name='user[password]' placeholder='Your password' onChange={(e)=>this.handlePasswordInput(e)} />
        <input type='submit' value="Sign Up" />
      </form>
    )//end of return
  }//end of render

}//end of class
export default SignupForm;
