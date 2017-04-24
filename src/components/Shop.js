import React, { Component } from 'react';
import axios from 'axios';

class Shop extends Component{

  constructor(){
    super();
    this.state = {
      pokeballs: 0,
      greatballs: 0,
      ultraballs: 0,
      cash: 0,
      id: ''
    }//end of state
  }//end of constructor

  componentDidMount(){
    axios.get('/users').then((response) =>{
      const res = response.data
      this.setState({
        pokeballs: res.pokeballs,
        greatballs: res.greatballs,
        ultraballs: res.ultraballs,
        cash: res.cash,
        id: res.id
      });
    }).catch((error) =>{
      console.log('Set User Error: ', error)
    })
  }//end of componentDidMount

  render(){
    return(
      <div className='shop'>
        <p>{this.state.pokeballs}</p>
      </div>
    )
  }
}

export default Shop;
