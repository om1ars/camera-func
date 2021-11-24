import { Avatar } from "@material-ui/core";
import { StopRounded } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import ReactTimeago from "react-timeago";
import "./Chat.css";
import { selectImage } from "./features/slices/appSlice";
import { db } from "./firebase";

export default function Chat({ id, username, imageUrl, read, timestamp }) {
    console.log(timestamp);
    const dispatch = useDispatch()

    const open =() => {
        if(!read){
            dispatch(selectImage(imageUrl))
            db.collection('posts').doc(id).
        }
    }
  return (
    <div onClick= {open} className="chat">
      <Avatar className='chat__avatar' src={imageUrl}/>
      <div className='chat__info'>
          <h4>{username}</h4>
          <p>Tap to View - <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} /></p>

      </div>
      {!read && <StopRounded className='chat__readIcon' />}
    </div>
  );
}
