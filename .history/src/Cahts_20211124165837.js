import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Chats.css";
import { db } from "./firebase";

export default function Cahts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('times')
    }, [])
  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar className="chats__avatar" />
        <div className="chats__search">
          <Search />
          <input placeholder="Friends" className="chats__chatIcon" />
        </div>
      </div>
      <div className="chat__posts">
          <h2>Hello</h2>
      </div>
    </div>
  );
}
