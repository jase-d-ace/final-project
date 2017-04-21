import React, { Component } from 'react';
import axios from 'axios';
import SignupForm from './SignupForm';

class App extends Component {
  //this is gonna die soon.
  componentDidMount(){
    let id = Math.floor(Math.random()* 721)
    axios.get('http://pokeapi.co/api/v2/pokemon/'+id).then((response)=>{
      console.log(response.data)
    }).catch((error) =>{
      console.log('error', error)
    })//end of axios
  }//end of componentDidMount
  render() {
    return (
      <div className='main'>
        <h1>bitches</h1>
        <p>bitches bitches bitches bitches bitches</p>
        <SignupForm />
      </div>
    )//end of return
  }//end of render
}//end of class

export default App;
