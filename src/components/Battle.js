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
    axios.get('http://pokeapi.co/api/v2/pokemon'+randomPoke).then((response){
      setPoke(response.data);
    }).catch((error) =>{
      console.log('Random pokemon error: ', error)
    });
  };

  setPoke(poke){
    this.setState({
      randomPoke: poke
    });
  };

  renderPoke(poke){
    
  }

}//end of class

export default Battle;
