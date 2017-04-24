import React, { Component } from 'react';
import axios from 'axios';

class Battle extends Component {

  constructor(){
    super();
    this.state = {
      randomPoke: null
    }//end of this.state
  }//end of constructor

  getRandomPoke(){
    const randomPoke = Math.floor(Math.random()*721)
    axios.get('http://pokeapi.co/api/v2/pokemon/'+randomPoke).then((response) =>{
      console.log('got random poke')
      console.log(response.data)
      this.setPoke(response.data);
    }).catch((error) =>{
      console.log('Random pokemon error: ', error)
    });
  };

  setPoke(poke){
    this.setState({
      randomPoke: poke
    });
  };

  tryToCatch(){
    //write up a chance function
    //compare catchRate vs wildRate
    //if catchRate > wildRate
    //then it's caught and saved,
    //and you lose your pokeball
    //if not, you lose your pokeball and it continues
  }

  renderWild(){
    console.log('in renderWild')
    if(this.state.randomPoke){
    return (
        <div className='wild-pokemon'>
          <p>{this.state.randomPoke.name}</p>
          <img src={this.state.randomPoke.sprites.front_default} />
        </div>
      )
    } else {
      return (
        <h2>Shhh... There may be one approaching</h2>
      )
    }
  }

  render(){
    console.log('rendered battle')
    console.log(this.state)
    return(
      <div className='battle-screen'>
        <h1>BITCHES</h1>
        <button onClick={() => this.getRandomPoke()}>Find!</button>
        {this.renderWild()}
    </div>
    )
  }

}//end of class

export default Battle;
