import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import App from './components/App';
import Battle from './components/Battle';
import ChatList from './components/ChatList';
import Pokemon from './components/Pokemon';
import '../styles/UI.css'

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
    } //end of state
  } //end of constructor

componentDidMount(){
  axios.get('https://safari-zone.herokuapp.com/users').then((response) =>{
    const res = response.data;
    console.log(res)
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
  }) //end of set User
  setInterval(()=>{
    axios.put('https://safari-zone.herokuapp.com/users/'+this.state.id,{
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
    })//end of axios promise
  }, 300000) //end of passive income generation
}//end of componentDidMount

renderUserInfo(){
  if(this.state.username){
    return (
      <div className='hud-details'>
      <span>Welcome, {this.state.username}</span>
      <p>Your Cash: &#8381;{this.state.cash}</p>
      <nav className='nav-bar'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/battle'>Find Pokes</Link></li>
        <li><Link to='/pokemon'>Your Pokes</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
      </nav>
      <ChatList />
    </div>
  ) //end of return
  } else {
    return (
      <p>Please Log In</p>
    )//end of return
  }//end of else
}//end of render user info

render(){
  return(
    <div className='hud'>
      {this.renderUserInfo()}
  </div>
    )// end of return statement
  }//end of render
}//end of UI class
export default UI;
