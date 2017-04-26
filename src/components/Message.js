import React from 'react';
import '../../styles/Messages.css'

const Message = (props) =>{
  return (
    <li><span>{props.username}</span><p>{props.message}</p></li>
  )
}

export default Message;
