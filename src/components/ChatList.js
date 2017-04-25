import React, { Component } from 'react';
import io from 'socket.io-client';
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
      stuffToSay: ''
    }; //end of state
    socket.on('receive message', (payload)=>{
      this.updateStuffFromSockets(payload)
    })
  }; //end of constructor

  updateStuffFromSockets(payload) =>{
    this.setState({
      stuffToSay: payload.message
    })
  }

  componentDidMount(){
    socket.emit('room', {room: 'chat room'})
  }//end of component did mount

  componentWillUnmount(){
    socket.emit('leave room', {
      room: 'chat room'
    })
  }

  sayStuff(text){
    this.setState({
      stuffToSay: text
    });
    socket.emit('speaking event', {
      room: 'chat room',
      message: text
    })//end of socket.emit
  }//end of sayStuff



};//end of class
export default ChatList;
