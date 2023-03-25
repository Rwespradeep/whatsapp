import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.scss";

const SidebarChat = ({ chatName }) => {
  return (
    <div className="sidebar_chat">
      <Avatar />
      <div className="sidebar_chat_info">
        <h2>{chatName}</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
