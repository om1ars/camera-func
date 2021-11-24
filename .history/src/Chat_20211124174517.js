import { Avatar } from "@material-ui/core";
import { StopRounded } from "@material-ui/icons";
import React from "react";
import "./Chat.css";

export default function Chat({ id, username, imageUrl, read, timestamp }) {
    console.log(timestamp);
  return (
    <div className="chat">
      <Avatar className='chat__avatar' src={imageUrl}/>
      <div className='chat__info'>
          <h4>{username}</h4>
          <p>Tap to View - </p>

      </div>
      {!read && <StopRounded className='chat__readIcon' />}
    </div>
  );
}
