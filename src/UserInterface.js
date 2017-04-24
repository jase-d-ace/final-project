import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import App from './components/App';
import Battle from './components/Battle';
import Pokemon from './components/Pokemon'

class UI extends Component{
  constructor(){
    super();
    this.state = {
      username: null,
      cash: 0,
      pokeballs: 0,
      greatballs: 0,
      ultraballs: 0,
      masterballs: 0
    }
  }

componentDidMount(){
  axios.get('/users').then((response) =>{
    const res = response.data;
    this.setState({
      username: res.username,
      cash: res.cash,
      pokeballs: res.pokeballs,
      greatballs: res.greatballs,
      ultraballs: res.ultraballs,
      masterballs: res.masterballs
    });
  }).catch((error) =>{
    console.log('set User error: ', error)
  })
}

renderUserInfo(){
  if(this.state.username){
    return (
      <div className='hud-details'>
      <span>Welcome, {this.state.username}</span>
      <ul>Your Items:
        <li>&#8381;{this.state.cash}</li>
        <li>Poke Balls: {this.state.pokeballs}</li>
        <li>Great Balls: {this.state.greatballs}</li>
        <li>Ultra Balls: {this.state.ultraballs}</li>
      </ul>
    </div>
    )
  } else {
    return (
      <p>Please Log In</p>
    )
  }
}

render(){
  return(
    <div className='hud'>
      {this.renderUserInfo()}
    <nav className='nav-bar'>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/battle' >Find Pokes</Link></li>
      <li><Link to='/pokemon'>Your Pokes</Link></li>
    </nav>
  </div>
    )
  }
}
export default UI;
