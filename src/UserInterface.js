import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import App from './components/App';
import Battle from './components/Battle';
import Pokemon from './components/Pokemon';

class UI extends Component{
  constructor(){
    super();
    this.state = {
      id: null,
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
      id: res.id,
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
  setInterval(()=>{
    axios.put('/users/'+this.state.id,{
      pokeballs: 0,
      greatballs: 0,
      ultraballs: 0,
      cash: (-200),
      masterballs: 0
    }).then((response) =>{
      this.setState({
        cash: response.data.cash
      })
    }).catch((error) =>{
      console.log('interval error:', error)
    })
  }, 300000)
}

renderUserInfo(){
  if(this.state.username){
    return (
      <div className='hud-details'>
      <span>Welcome, {this.state.username}</span>
      <p>Your Cash: &#8381;{this.state.cash}</p>
      <nav className='nav-bar'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/battle' >Find Pokes</Link></li>
        <li><Link to='/pokemon'>Your Pokes</Link></li>
        <li><Link to='/shop'>Shop</Link></li>

      </nav>
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
  </div>
    )
  }
}
export default UI;
