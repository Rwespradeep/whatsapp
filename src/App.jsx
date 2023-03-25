import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./componenets/Sidebar/Sidebar";
import ChatComponent from "./componenets/ChatComponent/ChatComponent";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Pusher from "pusher-js";
import axios from "./axios";
import Login from "./componenets/login/login";

function App() {
  const [user] = useAuthState(auth);

  const [messages, setMessages] = useState([]);
  const [room, setRooms] = useState([]);

  //for message calling from db to ui
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  //for rooms info, calling from db to ui
  useEffect(() => {
    axios.get("/rooms/sync").then((response) => {
      setRooms(response.data);
    });
  }, []);

  useEffect(() => {
    var pusher = new Pusher("9ac8b522e12bbf9060da", {
      cluster: "mt1",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      setMessages([...messages, newMessage]);
    });

    var channel2 = pusher.subscribe("rooms");
    channel2.bind("inserted", function (newRoom) {
      setRooms([...room, newRoom]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();

      channel2.unbind_all();
      channel2.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app_body">
        {!user ? (
          <Login />
        ) : (
          <>
            <Sidebar rooms={room} />
            <ChatComponent messages={messages} rooms={room} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
