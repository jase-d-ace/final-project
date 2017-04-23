import React, { Component } from 'react';
import axios from 'axios';
import Auth from 'j-toker';

//this shit works. Database is live, and rendering data. yay.

class Pokemon extends Component {

  constructor(){
    super();
    this.state = {
      pokemon: null
    }
  }

  componentDidMount(){
    Auth.configure({
      apiUrl: 'http://localhost:3000'
    })
    Auth.validateToken()
        .then((response)=>{
          console.log('token validated')
          console.log(response)
        }).catch((error)=>{
          console.log('auth error: ', error)
        })
    axios.get('http://localhost:3000/monsters').then((response) =>{
      console.log(Auth.user)
      this.setState({
        pokemon: response.data
      });
    }).catch((error) =>{
      console.log('axios error:', error)
    })
  }

  signOut(){
    Auth.signOut();
    console.log('signed out')
    this.props.history.push('/')
  }

  renderPoke(){
    if (this.state.pokemon){
      return this.state.pokemon.map((poke, index) =>{
    return (
            <div key={index} className='pokemon'>
              <h1>Pokemon here</h1>
              <h2>{poke.name}</h2>
              <img src={poke.sprite} />
            </div>
            )
            })
    } else {
      return <h1>Nothing here</h1>
    }
  }

  render(){
    console.log(this.state)
    return(
      <div className='pokemon-container'>
      {this.renderPoke()}
      <button onClick={() => this.signOut()}>Log Out</button>
    </div>
    )
  }

}

export default Pokemon;
