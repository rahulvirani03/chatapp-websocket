import { api } from "@api";
import React, { createContext, useState,useContext, useEffect } from "react";

import { io } from "socket.io-client";

export const ChatStoreContext = createContext();
export default function ChatStoreProvider({ children }) {
  let chatMessages = [];
 
  //let socket;
  const socket = io.connect("http://localhost:4000");
  
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getChat = async (room) => {
    console.log("Get chats called" + room);
    const res = await api.post("/chats/messages", { room: room });
    if (res.data === "No chats found") {
      console.log("No chats found");
    } else {
      setMessages(res.data);
    }
  
  };

  const sendMessageStore = async (message, id, room, receiver_id) => {
    console.log(message, id, room);
    const currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    if (currentHours < 10) {
      currentHours = "0" + currentHours;
    }
    if (currentMinute < 10) {
      currentMinute = "0" + currentMinute;
    }
    const time = currentHours + ":" + currentMinute;
    console.log(time);
    console.log(socket);
    socket.emit("send-msg", {
      to: receiver_id,
      from: id,
      message,
      time,
    });
   
    console.log("after socket");
    const messageData = {
      room: room,
      sender: id,
      message: message,
      time: time,
    };
    const res = await api.post("/chats/message", { messageData });
    const lastMessageData ={
      room:room,
      to: receiver_id,
      from: id,
      message,
      time:currentTime,
      isRead:false
    }
   const latMessageRes= await api.post('/chats/set-last-message',{lastMessageData})
   //console.log(latMessageRes);
   
   socket.emit("chat-list-refresh",{
    to:receiver_id
  })
    return messageData;
    //  await socket.emit("send_message", messageData);
    // setMessages((list) => [...list, messageData]);
    // setCurrentMessage("");
  };

  const values = {
    messages,
    getChat,
    socket,
    sendMessageStore,
    chatMessages,
    setMessages,
  };
  // if(loading)return(<div> loading.... </div> )
  return (
    <ChatStoreContext.Provider value={values}>
      {children}
    </ChatStoreContext.Provider>
  );
}
