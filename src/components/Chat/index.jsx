import React, { useState, useEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Container, Text, Button } from "@components/custom";
import styled from "styled-components";
import { api } from "@api";
import { colors, styles } from "@themes";
import { Avatar, Form } from "antd";
import ScrollableFeed from "react-scrollable-feed";
import { SendOutlined } from "@ant-design/icons";

const ChatContaier = styled(Container)`
  display: grid;
  width: 100%;
  min-height: 90vh;
  //border:1px solid black;
  max-height: 90vh;
  max-width: ${styles.maxWidth};
  margin-bottom: 10px;
  grid-template-rows: 10% 82% 8%;
  padding: 0px;
  background-color: whitesmoke;
  padding-bottom: 1px;
  .typing-dot {
    height: 5px;
    width: 5px;
    border-radius: 100%;
    margin: 0 2px;
    display: inline-block;
    background-color: #f1f1f1;
    animation: 1.2s typing-dot ease-in-out infinite;
  }
  .typing-dot:nth-of-type(2) {
    animation-delay: 0.15s;
  }
  .typing-dot:nth-of-type(3) {
    animation-delay: 0.25s;
  }
  @keyframes typing-dot {
    15% {
      transform: translateY(-35%);
      opacity: 0.5;
    }
    30% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const TitleContainer = styled(Container)`
  height: 100%;
  width: 100%;
  border: 1px solid white;
  background-color: ${colors.primary};
  color: ${colors.white};
  display: flex;
  align-items: center;
  .text {
    margin-left: 10px;
    align-items: center;
  }
`;

const InputContainer = styled(Form)`
  display: flex;
  height: 100%;
  width: 100%;
  margin: auto !important;
  padding: 0px 0px;
  margin-top: 4px;
  margin-bottom: 0px;
`;

const CustomInput = styled.input`
  display: flex;
  padding: 0 10px !important;
  height: 90%;
  border: 1px solid #b4afaf;
  margin: auto !important;
  border-radius: ${styles.borderRadius};
  &:focus {
    box-shadow: none;
    border: 2px solid ${colors.primary} !important;
  }
  &:hover {
    box-shadow: none;
    border: 2px solid ${colors.primary} !important;
  }
`;

const SelfMessage = styled.div`
  display: grid;
  //border:5px solid pink;
  grid-template-columns: 1fr 30px;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 7px 10px;
  padding-bottom: 5px;
  width: fit-content;
  max-width: 55%;
  border-radius: 10px;
  margin-right: 5px;
  margin-left: auto;
  margin-top: 2px;
`;

const OtherMessage = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  background-color: ${colors.primaryLight};
  color: ${colors.white};
  padding: 7px 10px;
  padding-bottom: 5px;
  width: fit-content;
  max-width: 55%;
  border-radius: 10px;
  margin-left: 5px;
  margin-right: auto;
  margin-top: 2px;
`;

const TypingAnimation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1f;
  height: 2rem;
  align-items: center;
  background-color: ${colors.primaryLight};
  color: ${colors.white};
  padding: 7px 10px;
  padding-bottom: 5px;
  width: fit-content;
  max-width: 55%;
  border-radius: 10px;
  margin-left: 5px;
  margin-right: auto;
  margin-top: 2px;
`;

const TimeTag = styled.p`
  font-size: 10px;
  align-self: flex-end;
  justify-content: flex-end;
  padding: 0px;
  margin: 0px;
  padding-left: 9px;
`;

export default function Chat({ user, chats, messageStore }) {
  const location = useLocation();
  const username = location.state.username;
  const history = useHistory();
  const [message, setMessage] = useState();
  const [locationKeys, setLocationKeys] = useState([]);
  const [selectedChat, setSelectedChat] = useState();
  const [newMessage, setNewMessage] = useState();
  const [typing, setTyping] = useState(false);
  const room = location.state.id;
  const receiver_id = location.state.other_id;


  const sendMessage = async () => {
    const res = await messageStore.sendMessageStore(
      message,
      user.currentUser.id,
      room,
      receiver_id
    );
    console.log(res);
    const Message = {
      sender: res.sender,
      time: res.time,
      message: res.message,
    };
    setSelectedChat([...selectedChat, Message]);
    setMessage("");

    setTyping(false);
  };

  const handleMessageChange = async (e) => {
    messageStore.socket.emit("typing", {
      to: receiver_id,
      from: user.currentUser.id,
    });
    setMessage(e.target.value);
  };

  const getSelectedChat = async () => {
    const res = await api.post("/chats/messages", { room: room });
    if (res.data === "No chats found") {
      console.log("No chats found");
    } else {
      setSelectedChat(res.data);
    }
  };

  useEffect(() => {
    getSelectedChat();
  }, []);

  useEffect(() => {
    messageStore.socket.on("msg-recieve", (data) => {
      const newItem = {
        message: data.data.message,
        sender: data.data.from,
        time: data.data.time,
      };
      setNewMessage(newItem);
      //chats.getChats();
      setTyping(false);
    });
  }, []);

  useEffect(() => {
    messageStore.socket.on("typing-receive", (data) => {
      setTyping(true);
    });
  }, []);

  useEffect(() => {
    console.log(newMessage);
    newMessage && setSelectedChat((prev) => [...prev, newMessage]);
  }, [newMessage]);

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === "PUSH") {
        setLocationKeys([location.key]);
      }
      if (history.action === "POP") {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);
         chats.getChats();
         chats.markAsRead(room)
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);
          chats.getChats();
          chats.markAsRead(room)
        }
      }
    });
  }, [locationKeys]);

  
  return (
    <ChatContaier style={{ height: "100%" }}>
      <TitleContainer>
        <Avatar size={"large"}></Avatar>
        <Text className="text">{username}</Text>
      </TitleContainer>
      <ScrollableFeed>
        {selectedChat?.map((item) => {
          return (
            <div style={{ paddingBottom: "2px" }}>
              {item.sender === user.currentUser.id ? (
                <SelfMessage>
                  <Text style={{ padding: "1px" }}>{item.message}</Text>
                  <TimeTag>{item.time}</TimeTag>
                </SelfMessage>
              ) : (
                <OtherMessage>
                  <Text style={{ padding: "1px" }}>{item.message}</Text>
                  <TimeTag>{item.time}</TimeTag>
                </OtherMessage>
              )}
            </div>
          );
        })}
        {typing && (
          <TypingAnimation
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
          >
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
          </TypingAnimation>
        )}
      </ScrollableFeed>

      <InputContainer>
        <CustomInput
          style={{
            width: "90%",
            display: "flex",
            padding: "0px",
            border: "1px solid #b4afaf",
            margin: "0 auto",
            borderRadius: "20px",
          }}
          value={message}
          onChange={(e) => handleMessageChange(e)}
        />
        <Button
          type="primary"
          style={{
            color: `${colors.white}`,
            width: "10%",
            height: "90%",
            borderRadius: "10px",
            margin: "auto 3px",
          }}
          onClick={sendMessage}
        >
          <SendOutlined />
        </Button>
      </InputContainer>
    </ChatContaier>
  );
}
