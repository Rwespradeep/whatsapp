import React, { useState } from "react";
import "./Sidebar.scss";
import MessageIcon from "@mui/icons-material/Message";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SidebarChat from "../SidebarChats/SidebarChat";
import { auth, signOut } from "../../firebase";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Sidebar = ({ rooms }) => {
  const logOut = () => {
    signOut(auth);
  };

  const addRoom = () => {
    console.log("Inside new room");
  };
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar
          className="dp"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Sundar_pichai.png"
        />
        <h1 className="mobileTitle">Whatsapp</h1>
        <div className="sidebar_header_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton className="logout" onClick={logOut}>
            <PowerSettingsNewIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar_chats">
        {rooms.map((room) => (
          <SidebarChat chatName={room.GroupName} />
        ))}
      </div>

      <div className="add_button">
        <IconButton onClick={addRoom}>
          <AddCircleIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
