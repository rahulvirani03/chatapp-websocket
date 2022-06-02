
import { colors, styles } from "@themes";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Button, Container } from "./custom";
import Input from "./custom/Input";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const CustomContainer = styled.div`
  padding: 1rem;
  margin: 0 auto;
  display: grid;
  height:fit-content;
  max-height: 90vh;
  width: fit-content;
  grid-template-rows: 90% 1fr;
  background-color: whitesmoke;
`;
const InputBox = styled.div`
  margin-top: 0;
  display: flex;
  padding: .3rem;
  margin-bottom: 0;
  width: 100%;
box-shadow: ${styles.boxShadow};
  border-radius: ${styles.borderRadius};
  margin-top: 1rem;
`;
const SenderMessage = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${colors.primary};
  color: ${colors.white};
  border-radius: 10px;

  width: fit-content;
  max-width: 50%;
  min-height: 6vh;
  max-height: fit-content;
  padding: 0.9rem;
  margin-top: 5px;
  margin-left: auto;
  margin-right: 0;
`;
const MsgTime = styled.div`
  margin-top: auto;
  margin-bottom: 0;
  margin-left: 1.5rem;
  font-size: 8px;
  margin-right: 0;
  margin-left: auto;
`;
const ReceivedMessage = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${colors.primary};
  color: ${colors.white};
  border-radius: 10px;
  width: max-content;
  max-width: 50%;
  min-height: 6vh;
  max-height: fit-content;
  padding: 0.9rem;
  margin-top: 5px;
  margin-left: 0;
  margin-right: auto;
`;

const MessageContainer = styled.div`
  overflow: scroll;
  scrollbar-width: none;
  overflow-x: hidden;
  padding-right: 20px;
 
`;
export default function Messages({ location }) {
  // const [message, setMessage] = useState("");
  // const [chatMessages, setChatMessages] = useState([]);


  // const getTime = (date) => {
  //   const hours = new Date(date).getHours();
  //   const mins = new Date(date).getMinutes();
  //   const time = `${hours}:${mins}`;
  //   return time;
  // };

  // const sendMessage = async () => {
  //   const msgTime = getTime();
  //   const docRef = await addDoc(
  //     collection(db, "chats", location.state.key, "messages"),
  //     {
  //       message: message,
  //       sentAt: Date.now(),
  //       sender: auth.currentUser.uid,
  //     }
  //   );
  //   setMessage("");
  // };

  // const handleChange = (e) => {
  //   setMessage(e.target.value);
  // };

  // const getMessages = async () => {
  //   let newres = [];
  //   const q = query(collection(db, "chats", location.state.key, "messages"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       newres.push(doc.data());
  //     });
  //     console.log(newres);
  //     newres.sort((a, b) => {
  //       return a.sentAt - b.sentAt;
  //     });
  //     const tempres = [];
  //     newres.map((data) => {
  //       let time = getTime(data.sentAt);
  //       const item = {
  //         message: data.message,
  //         sentAt: time,
  //         sender: data.sender,
  //       };

  //       tempres.push(item);
  //     });
  //     newres = [];
  //     console.log(tempres);
  //     setChatMessages([...tempres]);
  //     var myDiv = document.getElementById("scroller");
  //     myDiv.scrollTop = myDiv.scrollHeight;
  //   });
  // };
  // useEffect(() => {
  //   getMessages();
  // }, []);
  return (
    <CustomContainer style={{ minHeight: "90vh" }}>
      {/* <MessageContainer id="scroller">
       
          {chatMessages.map((chat) => {
            if (chat.sender === auth.currentUser.uid) {
              return (
                <SenderMessage>
                  <div style={{ margin: "0 0.5rem" }}> {chat.message} </div>
                  <MsgTime>{chat.sentAt}</MsgTime>
                </SenderMessage>
              );
            } else {
              return (
                <ReceivedMessage>
                  <div style={{ margin: "0 0.5rem" }}> {chat.message} </div>
                  <MsgTime>{chat.sentAt}</MsgTime>
                </ReceivedMessage>
              );
            }
          })}
       
      </MessageContainer>

      <InputBox>
        <Input
          
          value={message}
          onChange={handleChange}
        />
        <Button onClick={sendMessage} type="primary">
          Send
        </Button>
      </InputBox> */}
      Chat list
    </CustomContainer>
  );
}
