import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon';
import Test from './Test';

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentUser: null,
      loggedIn: false,
      currentUserId: ''
    }//end of state
  }//end of constructor

  //this is gonna die soon.
  //shift this functionality to a button to generate a pokemon.
  componentDidMount(){
    let id = Math.floor(Math.random()* 721)
    axios.get('http://pokeapi.co/api/v2/pokemon/'+id).then((response)=>{
      console.log(response.data)
    }).catch((error) =>{
      console.log('error', error)
    })//end of axios
  }//end of componentDidMount

  setCurrentUser(user, id){
    this.setState({
      currentUser: user,
      loggedIn: true,
      currentUserId: id
    })//end of setState
  }//end of setCurrentUser

  render() {
    console.log(this.state)
    return (
      <div className='main'>
        <h1>Welcome to the Safari Zone!</h1>
        <p>To be a master, you have to think like a master</p>
        <Link to='/test'>Test Link</Link>
        <Link to='/pokemon'>Your Pokes</Link>
      </div>
    )//end of return
  }//end of render
}//end of class

export default App;
