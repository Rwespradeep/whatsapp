import React, { useState } from "react";
import "./ChatComponent.scss";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import MicIcon from "@mui/icons-material/Mic";
import axios from "../../axios";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatComponent = ({ messages, rooms }) => {
  const [input, setInput] = useState("");
  const user = useAuthState(auth);

  const lastRoom = rooms.slice(-1);

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input,
      name: "pradeep",
      timestamp: "Just now",
      recieved: true,
    });

    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />

        <div className="chat_header_info">
          <h3>{lastRoom[0].GroupName}</h3>
        </div>

        <div className="chat_headerright">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        {messages.map((message) => (
          <p className={`chat_msg ${message.recieved && "chat_reciever"}`}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timeStamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat_footer">
        <EmojiEmotionsOutlinedIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default ChatComponent;
