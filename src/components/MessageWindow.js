import React, { Component } from 'react';
import Message from './Message';

class MessageWindow extends Component {

  renderMessages(){
    return this.props.messages.map((message, index) =>{
      return <Message username={this.props.username} index={index} message={message} />
    })
  }

  render(){
    return(
      <ul>
        {this.renderMessages()}
      </ul>
    )
  }

}
export default MessageWindow;
