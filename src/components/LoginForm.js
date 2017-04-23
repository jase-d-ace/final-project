import React, { Component } from 'react';
import axios from 'axios';
import Auth from 'j-toker';
import { Link } from 'react-router-dom';

class LoginForm extends Component{

  componentDidMount(){
    Auth.configure({
      apiUrl: 'http://localhost:3000/'
    })
  }

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
    Auth.emailSignIn({
      email: this.state.email,
      password: this.state.password
    }).then((response) =>{
      console.log('signed in');
      this.props.history.push('/home')
    }).catch((error)=>{
      console.log('Sign In error: ', error)
    })
  }

  render(){
    return(
      <div className='landing-page'>
        <Link to='/signup'>Sign Up</Link>
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <label>Email</label>
        <input type='email' placeholder='Email' onChange={(e)=>this.handleEmailInput(e)} />
        <label>Password</label>
        <input type='password' placeholder='Password' onChange={(e)=>this.handlePasswordInput(e)} />
        <input type='submit' />
      </form>
    </div>
    )//end of return
  }//end of render

}//end of class

export default LoginForm;
