import { api } from "@api";
import React, { createContext,useContext, useState, useEffect } from "react";
import {AuthContext} from './AuthStore';

export const HomeStoreContext = createContext();

export default function HomeStoreProvider({ children }) {
  const contextUser = useContext(AuthContext)||{};
console.log(contextUser);
const id = contextUser.currentUser?.id;
  const [chatList, setChatList] = useState([]);
  const [users,setUsers]= useState([]);
  const [room,setRoom]= useState();
  const [loading,setLoading]= useState(true);

  const getChats = async () => {
    const res = await api.post("/chats/chat-list",{id});
    console.log(res);
    setChatList(res.data.chats);
    //const userRes = await api.get("/chats/user-list");
    //console.log(userRes);
    setUsers(res.data.users);
    setLoading(false)
    return res.data;
  };
  const markAsRead = async (id)=>{
      const res = await api.post('chats/marks-as-read',{id})
      console.log(res);
  }
  const createChatRoom =async (id,user1,user2)=>{
    const res= await api.post('/chats/create-chat-room',{
      id,
      user1,
      user2
    })
    console.log(res);
  }
  useEffect(() => {
    getChats();
  }, []);

  const chats = { chatList,room,setRoom,users,createChatRoom,getChats,setChatList,markAsRead};
  if(loading)return(<div> loading.... home store </div> )
  return (
    <HomeStoreContext.Provider value={chats}>
      {children}
    </HomeStoreContext.Provider>
  );
}
