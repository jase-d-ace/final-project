import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  componentDidMount(){
    axios.get('http://pokeapi.co/api/v2/pokemon/blaziken').then((response)=>{
      console.log(response.data)
    }).catch((error) =>{
      console.log('error', error)
    })
  }
  render() {
    return (
      <div className='main'>
      <h1>bitches</h1>
      <p>bitches bitches bitches bitches bitches</p>
    </div>
    )
  }
}

export default App;
