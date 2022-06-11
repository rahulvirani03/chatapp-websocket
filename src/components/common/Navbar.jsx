import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { Container, FlexBetween } from "@components/custom";
import logo from "@assets/logo.svg";
import { colors, styles } from "@themes";
import { Avatar, Button as AntdButton, Dropdown, Menu, Space } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

const NavContainer = styled.div`
  background-color: ${colors.white};
  box-shadow: ${styles.boxShadow};
`;

const Link = styled(NavLink)`
  display: inline-block;
  padding: 1.2em 1em;
  outline: none;
  color: ${colors.text};
  transition: all 0.2s;
  border-bottom: 3px solid ${colors.primary};
  &.active {
    border-bottom: 3px solid ${colors.primary};
    color: ${colors.primary};
  }
`;
const menu = (user) => (
  <Menu
    items={[
      {
        icon: <LogoutOutlined />,
        label: "Logout",
        key: "1",
        onClick: () => user.LogoutUser(),
      },
    ]}
  />
);

export default function Navbar({ user }) {
  console.log("Navbar user ");
  console.log({ user });
  return (
    <NavContainer>
      <Container>
        <FlexBetween>
          <Link to="/"> Chat.in</Link>

          <div
            style={{
              padding: "10px",
              borderRadius: `${styles.borderRadius}`,
              boxShadow: `${styles.boxShadow}`,
              color: "blue",
              // backgroundColor: `${colors.white}`,
              border: `1px solid ${colors.primary}`,
            }}
          >
            <Dropdown
              arrow={false}
              overlayStyle={{
                marginTop: "20px",
                paddingTop: "15px",
                color: `${colors.primary}`,
              }}
              trigger={["click"]}
              overlay={menu(user)}
            >
              <a
                style={{ color: `${colors.primary}` }}
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  <UserOutlined
                    style={{
                      border: "1px solid black",
                      borderRadius: "50%",
                      padding: "5px",
                    }}
                  />
                  {user.currentUser?.username}
                </Space>
              </a>
            </Dropdown>
          </div>
        </FlexBetween>
      </Container>
    </NavContainer>
  );
}
