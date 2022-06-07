import {
  Container,
  FlexBetween,
  FlexContainer,
  Text,
} from "@components/custom";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { List, Avatar } from "antd";
import { colors } from "@themes";
import { CheckOutlined } from "@ant-design/icons";
import { api } from "@api";
import { AVARTAR_SRC } from "@utils/constants";
export default function index({ user, chats, messageStore }) {
  const history = useHistory();
  const [tempChatList, setTempChatList] = useState(chats.chatList);
  const checkAuth = () => {
    if (!user.isLoggedIn) {
      history.push("/landing");
    } else {
      messageStore.socket.emit("add-user", user.currentUser.id);
    }
  };
  useEffect(() => {
    window.addEventListener("beforeunload", (ev, user) => {
      messageStore.socket.emit("unload", user.currentUser.id);
    });
  }, []);


  const handleClick = (item) => {
    console.log(item);
    let localRoomId = item.id;
    let otherId;
    let username;
    const currentId = user.currentUser.id;
    if (item.user1.id === currentId) {
      otherId = item.user2.id;
      username = item.user2.username;
    } else {
      otherId = item.user1.id;
      username = item.user1.username;
    }
    chats.setRoom(localRoomId);
    chats.markAsRead(localRoomId);
    history.push({
      pathname: `/${localRoomId}`,
      state: {
        id: localRoomId,
        other_id: otherId,
        username: username,
      },
    });
  };


  const createChatRoom = async (item) => {
    let localRoomId;
    const currentId = user.currentUser.id;
    const otherId = item._id;
    if (currentId < otherId) {
      localRoomId = currentId + otherId;
    } else {
      localRoomId = otherId + currentId;
    }
    const user1 = {
      id: currentId,
      username: user.currentUser.username,
    };
    const user2 = {
      id: item._id,
      username: item.username,
    };
    const res = await chats.createChatRoom(localRoomId, user1, user2);

    console.log(res);
    history.push({
      pathname: `/${localRoomId}`,
      state: {
        id: localRoomId,
        other_id: otherId,
        username:  item.username,
      },
    })

  };
  useEffect(() => {
    checkAuth();
  }, [user]);
  const getLatestMessages = async () => {
    const res = await api.post("/chats/chat-list", { id: user.currentUser.id });
    setTempChatList(res.data.chats);
  };
  useEffect(() => {
    messageStore.socket.on("chat-refresh-receive", (data) => {
      console.log("chat-refresh-receive");
      getLatestMessages();
    });
  }, []);

  const NewChatRoomList = () => {
    return (
      <Container>
        <Text>Select a User to Start a New Chat</Text>
        <List itemLayout="vertical">
          {chats.users.map((item) => {
            return (
              <FlexContainer
                onClick={() => createChatRoom(item)}
                style={{
                  width: "100%",
                  height: "5rem",
                  alignItems: "center",
                  borderBottom: "1px solid black",
                  borderBottomColor: "#d0cfcf",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  size={"large"}
                  shape="circle"
                  style={{
                    border: `2px solid ${colors.primary}`,
                    padding: "2px",
                  }}
                  src={AVARTAR_SRC}
                />
                <Text style={{ marginLeft: "1rem" }}>{item.username}</Text>
              </FlexContainer>
            );
          })}
        </List>
      </Container>
    );
  };

  const SelfTile = ({ item }) => {
    return (
      <FlexContainer
        style={{
          height: "100%",
          alignItems: "center",
          padding: "auto",
          marginTop: "auto",
        }}
      >
        <Avatar
          size={"large"}
          shape="circle"
          style={{
            border: `2px solid ${colors.primary}`,
            padding: "2px",
          }}
          src={AVARTAR_SRC}
        />
        <div>
          {item.user1.id === user.currentUser.id ? (
            <Text style={{ marginLeft: ".5rem" }}>{item.user2.username}</Text>
          ) : (
            <Text style={{ marginLeft: ".5rem" }}>{item.user1.username}</Text>
          )}
          {item.lastMessage.message && (
            <FlexContainer style={{ marginLeft: ".5rem" }}>
              <span style={{ margin: "0px" }}>
                <CheckOutlined />
              </span>
              <span style={{ marginLeft: "4px", marginTop: "0px" }}>
                {item.lastMessage?.message}
              </span>
            </FlexContainer>
          )}
        </div>
      </FlexContainer>
    );
  };
  const OtherTile = ({ item }) => {
    return (
      <FlexBetween
        style={{
          height: "100%",
          alignItems: "center",
          padding: "auto",
          marginTop: "auto",
        }}
      >
        <FlexContainer
          style={{
            height: "100%",
            alignItems: "center",
            padding: "auto",
            marginTop: "auto",
          }}
        >
          <Avatar
            size={"large"}
            shape="circle"
            style={{
              border: `2px solid ${colors.primary}`,
              padding: "2px",
            }}
            src={AVARTAR_SRC}
          />
          {item.lastMessage.isRead ? (
            <div>
              {item.user1.id === user.currentUser?.id ? (
                <Text style={{ marginLeft: ".5rem" }}>
                  {item.user2.username}
                </Text>
              ) : (
                <Text style={{ marginLeft: ".5rem" }}>
                  {item.user1.username}
                </Text>
              )}
              {item.lastMessage.message && (
                <FlexContainer style={{ marginLeft: ".5rem" }}>
                  <span style={{ marginLeft: "4px", marginTop: "0px" }}>
                    {item.lastMessage?.message}
                  </span>
                </FlexContainer>
              )}
            </div>
          ) : (
            <div>
              {item.user1.id === user.currentUser?.id ? (
                <Text style={{ fontWeight: "bold", marginLeft: "1rem" }}>
                  {item.user2.username}
                </Text>
              ) : (
                <Text style={{ fontWeight: "bold", marginLeft: "1rem" }}>
                  {item.user1.username}
                </Text>
              )}
              {item.lastMessage.message && (
                <FlexContainer style={{ marginLeft: ".5rem" }}>
                  <span style={{ margin: "0px" }}></span>
                  <span
                    style={{
                      marginLeft: "4px",
                      marginTop: "0px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.lastMessage?.message}
                  </span>
                </FlexContainer>
              )}
            </div>
          )}
        </FlexContainer>
        {!item.lastMessage.isRead ? (
          <div
            style={{
              height: "10px",
              width: "10px",
              borderRadius: "50%",
              background: `${colors.primary}`,
            }}
          ></div>
        ) : (
          <></>
        )}
      </FlexBetween>
    );
  };
  return (
    <Container>
      <Text>Previous Chats</Text>
      <List itemLayout="vertical">
        {tempChatList?.map((item) => {
          return (
            <Container
              onClick={() => handleClick(item)}
              style={{
                width: "100%",
                height: "5rem",
                alignItems: "center",
                borderBottom: "1px solid black",
                borderBottomColor: "#d0cfcf",
                cursor: "pointer",
              }}
            >
              {item.lastMessage.from === user.currentUser.id ? (
                <SelfTile item={item} />
              ) : (
                <OtherTile item={item} />
              )}
            </Container>
          );
        })}
      </List>
      <NewChatRoomList />
    </Container>
  );
}
