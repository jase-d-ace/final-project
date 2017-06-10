import React, { Component } from 'react';
import Message from './Message';
import '../../styles/Messages.css'

class MessageWindow extends Component {

  renderMessages(){
    if(this.props.messages.length >=1){
      return this.props.messages.map((message, index) =>{
        return <Message key={index} lastUser={this.props.lastUser} index={index} message={message} />
      })
    } else {
      return <p>Be the first to write something!</p>
    }
  }

  render(){
    return(
      <div className='message-window'>
      <ul>
        {this.renderMessages()}
      </ul>
    </div>
    )
  }

}
export default MessageWindow;
