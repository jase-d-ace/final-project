import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Battle extends Component {

  constructor(){
    super();
    this.state = {
      randomPoke: null,
      trainer_id: null,
      pokeballsInHand: 0,
      greatballsInHand: 0,
      ultraballsInHand: 0,
      pokeballsThrown: 0,
      greatballsThrown: 0,
      ultraballsThrown: 0,
      //we'll need a pokeball count here
      //pokeballs on hand, and pokeballs spent
      //this will have to be set to 0 and become a negative number.
      //also we'll need to store user id here
    }//end of this.state
  }//end of constructor

  componentDidMount(){
    axios.get('/users').then((response) =>{
      const res = response.data
      console.log('got a user')
      console.log(response.data)
      this.setState({
        trainer_id: res.id,
        pokeballsInHand: res.pokeballs,
        greatballsInHand: res.greatballs,
        ultraballsInHand: res.ultraballs
      })
    })
  }

  getRandomPoke(){
    const randomPoke = Math.floor(Math.random()*721)
    axios.get('http://pokeapi.co/api/v2/pokemon/'+randomPoke).then((response) =>{
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

  caught(){
    //if your pokemon is caught
    //run an axios call to put it in your database
    //and another axios call to give you back about 1000 bucks
    axios.post('/api', {
      name: this.state.randomPoke.name,
      sprite: this.state.randomPoke.sprites.front_default,
      trainer_id: this.state.trainer_id
    }).then((response) =>{
      return <p>Congratulations!{this.state.randomPoke.name} was caught!</p>
      this.props.history.push('/pokemon')
    }).catch((error)=>{
      console.log('axios post error: ', error)
    });
    //the logic has to be reversed here.
    //the model only accepts additions to pokeballs, and subtractions to cash.
    //since this logic lowers the balls and raises cash,
    //you need to reverse everything and make them negative
    axios.put('/users/'+this.state.trainer_id,{
      cash: -1000
    }).then((response) =>{
      console.log('successful catch')
    }).catch((error) =>{
      console.log('catch error: ', error)
    })
  }

  pokeCatch(){
    console.log('poke ball thrown')
    let wildRate = Math.random()*10;
    let pokeCatchFactor = Math.random()*0.65;
    let pokeCatchRate = Math.random()*pokeCatchFactor*10;
    console.log('compare');
    console.log(pokeCatchRate, wildRate)
    if (this.state.pokeballsInHand != 0){
      this.setState((prevState) =>{
        return {
          pokeballsInHand: prevState.pokeballsInHand - 1,
          pokeballsThrown: prevState.pokeballsThrown + 1
        }
      })
      if (pokeCatchRate>=wildRate){
        this.caught()
      } else {
        axios.put('/users/'+this.state.trainer_id, {
          pokeballs: -1
        }).then((response)=>{
          console.log('successfully knocked off a ball')
        }).catch((error)=>{
          console.log('knock-off error: ', error)
        })
        return <h3>Argh! Try again!</h3>
      }
    } else {
      alert('You have none left!')
    }
  }

  greatCatch(){
    console.log('Great Ball thrown')
    let wildRate = Math.random()*10;
    let greatCatchFactor = Math.random*0.75;
    let greatCatchRate = Math.random*greatCatchFactor*10;
    console.log('compare')
    console.log(greatCatchRate, wildRate)
    if (this.state.greatballsInHand != 0){
      this.setState((prevState) =>{
        return {
          greatballsInHand: prevState.greatballsInHand - 1,
          greatballsThrown: prevState.greatballsThrown + 1
        }
      })
      if(greatCatchRate>=WildRate){
        this.caught()
      } else {
        return <h3>Argh! Try again!</h3>
      }
    } else {
      alert('You have none left!')
    }
  }

  ultraCatch(){
    console.log('ultra ball thrown')
    const randomize = (num) =>{
      Math.ceil(Math.random()*num);
    };
    let wildRate = randomize(100);
    let ultraCatchFactor = randomize(0.85);
    let ultraCatchRate = randomize((ultraCatchFactor*100));
    console.log('compare:')
    console.log(ultraCatchRate, wildRate)
    if (this.state.ultraballsInHand !=0) {
      this.setState((prevState) =>{
        return {
          ultraballsInHand: prevState.ultraballsInHand - 1,
          ultraballsThrown: prevState.ultraballsThrown + 1
        }
      })
      if (ultraCatchRate >= wildRate){
        this.caught()
      } else {
        return <h3>Argh! Try again!</h3>
      }
    } else {
      alert('You have none left!')
    }
  }

  renderWild(){
    if(this.state.randomPoke){
    return (
        <div className='wild-pokemon'>
          <p>{this.state.pokeballsThrown} Pokeballs Thrown</p>
          <p>{this.state.greatballsThrown} Great Balls Thrown</p>
          <p>{this.state.ultraballsThrown} Ultra Balls Thrown</p>
          <p>{this.state.randomPoke.name}</p>
          <img src={this.state.randomPoke.sprites.front_default} />
          <div className='battle-hud'>
            <button onClick={()=>this.pokeCatch()}>Throw a Pokeball?({this.state.pokeballsInHand} left)</button>
            <button onClick={()=>this.greatCatch()}>Throw a Great Ball? ({this.state.greatballsInHand} left)</button>
            <button onClick={()=>this.ultraCatch()}>Throw an Ultra Ball? ({this.state.ultraballsInHand} left)</button>
          <Link to='/home'>Run!</Link>
        </div>
        </div>
      )
    } else {
      return (
        <h2>Shhh... There may be one approaching</h2>
      )
    }
  }

  render(){
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
