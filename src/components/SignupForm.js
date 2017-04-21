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

  handleEmailInput(e){
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

  handleSubmit(e){
    e.preventDefault();
    if (this.state.password != this.state.passwordConfirmation){
      alert('Your Passwords Don\'t Match!');
    } else {
      axios.post('http://localhost:3000/auth',{
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation
      }).then((response) =>{
        console.log("OK");
      }).catch((error)=>{
        console.log('Signup Error: ', error)
      })//end of axios call
    } //end of else
  } //end of handleSubmit

  render(){
    return(
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <input type='email' placeholder='Your email' onChange={(e)=>this.handleEmailInput(e)} />
        <input type='password' placeholder='Your password' onChange={(e)=>this.handlePasswordInput(e)} />
        <input type='password' placeholder='Confirm password' onChange={(e)=>this.handleConfirmationInput(e)} />
        <input type='submit' />
      </form>
    )//end of return
  }//end of render

}//end of class
export default SignupForm;
