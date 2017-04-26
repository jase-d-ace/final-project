import React from 'react';

const Message = (props) =>{
  return (
    <li key={props.index}><span>{props.username}</span><p>{props.message}</p></li>
  )
}

export default Message;
