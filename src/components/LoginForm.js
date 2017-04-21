import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component{

  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
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

  handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:3000/auth/sign_in', {
      credentials: 'include',
      email: this.state.email,
      password: this.state.password
    }).then((response) =>{
      console.log('signed in')
      console.log(response)
      this.props.setCurrentUser(response.data.data.email, response.data.data.id)
    }).catch((error)=>{
      console.log('Sign In error: ', error)
    })
  }

  render(){
    return(
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <input type='email' onChange={(e)=>this.handleEmailInput(e)} />
        <input type='password' onChange={(e)=>this.handlePasswordInput(e)} />
        <input type='submit' />
      </form>
    )//end of return
  }//end of render

}//end of class

export default LoginForm;
