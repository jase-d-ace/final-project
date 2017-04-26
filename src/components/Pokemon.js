import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/Pokemon.css'

class Pokemon extends Component {

  constructor(){
    super();
    this.state = {
      pokemon: null
    }//end of state
  }//end of constructor

  componentDidMount(){
    axios.get('/api').then((response) =>{
      this.setState({
        pokemon: response.data
      });
    }).catch((error) =>{
      console.log('axios error:', error)
    }) //end of API ping
  } //end of componentDidMount

  renderPoke(){
    if (this.state.pokemon){
      if (this.state.pokemon.length >= 1){
      return this.state.pokemon.map((poke, index) =>{
        return (
            <div key={index} className='pokemon'>
              <h2>{poke.name.charAt(0).toUpperCase()+poke.name.slice(1)}</h2>
            <img src={poke.sprite} />
            </div>
          )
        }) //end of map given you're a user that has some pokes
      } else {
        return <h1>You have no pokemon! Go out and catch some!</h1>
      } //end of if statement that checks if a user has pokes
    } else {
      return <h1>How did you get here without logging in?!</h1>
    } //end of if statement that looks for a user
  }//end of render poke

  render(){
    return(
      <div className='pokemon-container'>
      {this.renderPoke()}
    </div>
    ) //end of return
  } //end of render
}//end of class

export default Pokemon;
