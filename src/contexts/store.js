import { useContext } from "react";
import {AuthContext} from "./AuthStore";
import { ChatStoreContext } from "./ChatStore";
import { HomeStoreContext } from "./HomeStore";

export default { 
    user: () => useContext(AuthContext),
    chats:() => useContext(HomeStoreContext),
    messageStore:() =>useContext(ChatStoreContext)
}