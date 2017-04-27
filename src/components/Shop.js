import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/Shop.css'

//yes, i know this looks like shit
//yes, i'm gonna get around to changing it around

class Shop extends Component{

  constructor(){
    super();
    this.state = {
      pokeballsInHand: 0,
      greatballsInHand: 0,
      ultraballsInHand: 0,
      pokeballsInCart: 0,
      greatballsInCart: 0,
      ultraballsInCart: 0,
      cash: 0,
      id: ''
    }//end of state
  }//end of constructor

  componentDidMount(){
    axios.get('https://safari-zone.herokuapp.com/users').then((response) =>{
      const res = response.data
      console.log(res)
      this.setState({
        pokeballsInHand: res.pokeballs,
        greatballsInHand: res.greatballs,
        ultraballsInHand: res.ultraballs,
        cash: res.cash,
        id: res.id
      });
    }).catch((error) =>{
      console.log('Set User Error: ', error)
    })
  }//end of componentDidMount

  addPokeballsToCart(e){
    this.setState({
      pokeballsInCart: parseInt(e.target.value)
    })
  }

  addGreatballsToCart(e){
    this.setState({
      greatballsInCart: parseInt(e.target.value)
    })
  }

  addUltraballsToCart(e){
    this.setState({
      ultraballsInCart: parseInt(e.target.value)
    })
  }

  buy(e){
    e.preventDefault();
    let total = ((this.state.pokeballsInCart*200)+(this.state.greatballsInCart*600)+(this.state.ultraballsInCart*1200));
    console.log('total purchase')
    console.log(total)
    console.log('net')
    console.log(this.state.cash-total)
    if(this.state.cash>=total){
      axios.put('https://safari-zone.herokuapp.com/users/'+this.state.id, {
        pokeballs: this.state.pokeballsInCart,
        greatballs: this.state.greatballsInCart,
        ultraballs: this.state.ultraballsInCart,
        cash: total
      }).then((data) =>{
        this.props.history.push('/home');
      }).catch((error)=>{
        console.log('axios purchase error: ', error)
      })
    } else {
      alert('You don\'t have enough money for this purchase.')
    } //end of check for funds
  } //end of buy

  render(){
    return(
      <div className='shop-container'>
        <div className='shop-holder'>
          <p>Your Cash: &#8381;{this.state.cash} </p>
          <ul>Your Stock:
            <li><img className='ball' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" /> {this.state.pokeballsInHand}</li>
            <li><img className='ball' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png' /> {this.state.greatballsInHand}</li>
            <li><img className='ball' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png" /> {this.state.ultraballsInHand}</li>
          </ul>
          <form className='shop' onSubmit={(e)=>this.buy(e)}>
            <img className='ball' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" /><p> &#8381;200 In Cart: {this.state.pokeballsInCart}</p>
            <input type='text' onChange={(e)=>this.addPokeballsToCart(e)} />
            <img className='ball' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png' /><p>&#8381;600 In Cart: {this.state.greatballsInCart}</p>
            <input type='text' onChange={(e)=>this.addGreatballsToCart(e)} />
            <img className='ball' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png" /><p>&#8381;1200 In Cart: {this.state.ultraballsInCart}</p>
            <input type='text' onChange={(e)=>this.addUltraballsToCart(e)} />
            <input className='button' type='submit' value="Buy" />
          </form>
        </div>
      </div>
    ) //end of return
  } //end of render
} //end of class

export default Shop;
