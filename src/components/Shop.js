import React, { Component } from 'react';
import axios from 'axios';

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
    axios.get('/users').then((response) =>{
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
    let total = ((this.state.pokeballs*200)+(this.state.greatballs*600)+(this.state.ultraballs*1200));
    console.log('total purchase')
    console.log(total)
    console.log('net')
    console.log(this.state.cash-total)
    if(this.state.cash>=total){
      axios.put('/users/'+this.state.id, {
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
    }
  }

  render(){
    return(
      <div className='shop-container'>
        <p>Your Cash: &#8381;{this.state.cash} </p>
        <ul>Your Stock:
          <li>Poke Balls: {this.state.pokeballsInHand}</li>
          <li>Great Balls: {this.state.greatballsInHand}</li>
          <li>Ultra Balls: {this.state.ultraballsInHand}</li>
        </ul>
        <form className='shop' onSubmit={(e)=>this.buy(e)}>
        <p>Poke Ball: &#8381;200 In Cart: {this.state.pokeballsInCart}</p>
        <input type='text' onChange={(e)=>this.addPokeballsToCart(e)} />
        <p>Great Ball: &#8381;600 In Cart: {this.state.greatballsInCart}</p>
          <input type='text' onChange={(e)=>this.addGreatballsToCart(e)} />
        <p>Ultra Ball: &#8381;1200 In Cart: {this.state.ultraballsInCart}</p>
          <input type='text' onChange={(e)=>this.addUltraballsToCart(e)} />
          <input type='submit' value="Buy" />
        </form>
      </div>
    )
  }
}

export default Shop;
