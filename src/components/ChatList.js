import React, { Component } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import MessageWindow from './MessageWindow';
const socket = io();

//https://socket.io/get-started/chat/
//I used a sockets tutorial to get a general sense of how to set this up
//http://www.thegreatcodeadventure.com/real-time-react-with-socket-io-building-a-pair-programming-app/
//obviously i took out all of the redux stuff
//and applied everything to my own code, but the process is here
class ChatList extends Component {

  constructor(){
    super();
    this.state = {
      //leave room for possible state stuff later
      stuffToSay: '',
      messages: [],
      username: ''
    }; //end of state
  }; //end of constructor

  updateStuffFromSockets(payload) {
    //this is our listener for incoming messages
    let newMessages = this.state.messages;
    newMessages.push(payload.message);
    this.setState({
      messages: newMessages
    })
  }

  componentDidMount(){
    socket.on('receive message', (payload)=>{
      this.updateStuffFromSockets(payload)
    })
    socket.emit('room', {
      room: 'chat room',
      user: this.state.username
    })
    axios.get('https://agile-temple-91762.herokuapp.com/users').then((response) =>{
      this.setState({
        username: response.data.username
      })
    })
  }//end of component did mount

  componentWillUnmount(){
    socket.emit('leave room', {
      room: 'chat room'
    })
  }

  sayStuff(){
    //this is what we're gonna use onSubmit
    //this will emit the event
    socket.emit('speaking event', {
      room: 'chat room',
      message: this.state.stuffToSay
    })//end of socket.emit
  }//end of sayStuff

  handleInput(e){
    this.setState({
      stuffToSay: e.target.value
    })
  }

//we need a window to display all of these messages
//<MessageWindow messages={this.state.messages} username={this.state.username} />
render(){
  console.log(this.state.stuffToSay)
  console.log(this.state.messages)
  return (
    <div className='chat-window'>
      <MessageWindow messages={this.state.messages} username={this.state.username} />
      <input type='text' onChange={(e)=>this.handleInput(e)} />
      <button onClick={()=>this.sayStuff()}>Say Stuff</button>
    </div>
  );
};

};//end of class
export default ChatList;
