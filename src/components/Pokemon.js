import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
//this shit works. Database is live, and rendering data. yay.

class Pokemon extends Component {

  constructor(){
    super();
    this.state = {
      pokemon: null
    }
  }

  componentDidMount(){
    axios.get('/api').then((response) =>{
      this.setState({
        pokemon: response.data
      });
    }).catch((error) =>{
      console.log('axios error:', error)
    })
  }

  renderPoke(){
    if (this.state.pokemon){
      if (this.state.pokemon.length >= 1){
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
        return <h1>You have no pokemon! Go out and catch some!</h1>
      }
    } else {
      return <h1>Nothing here</h1>
    }
  }

  render(){
    console.log(this.state)
    return(
      <div className='pokemon-container'>
      {this.renderPoke()}
      <Link to='/'>Log Out</Link>
    </div>
    )
  }

}

export default Pokemon;
