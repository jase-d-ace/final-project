import React, { Component } from 'react';
import axios from 'axios';

//this shit works. Database is live, and rendering data. yay.

class Pokemon extends Component {

  constructor(){
    super();
    this.state = {
      pokemon: null
    }
  }

  componentDidMount(){
    axios.get('/pokemon').then((response) =>{
      this.setState({
        pokemon: response.data
      });
    }).catch((error) =>{
      console.log('axios error:', error)
    })
  }

  signOut(){
    axios.get('http://localhost:8080/users/logout').then((data) =>{
      this.props.history.push('/')
    }).catch((error) =>{
      console.log('Logout error', error)
    })
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
