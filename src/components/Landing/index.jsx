import React, { useEffect, useState } from "react";
import { Form, Typography, message, Tabs } from "antd";
import { useHistory, useLocation } from "react-router";
import { Overlay, Button, Input, Space, Card } from "@components/custom";
import { colors } from "@themes";
const { TabPane } = Tabs;

export default function index({ user }) {
  const location = useLocation();
  const history = useHistory();
  const [loginForm] = Form.useForm();
  const [signupForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const checkAuth = () => {
    if (user.isLoggedIn) {
      history.push("/");
    }
  };
  useEffect(() => {
    checkAuth();
  }, [user]);

  const handleLogin = async () => {
    console.log(loginForm.getFieldValue());
    const { username, password } = loginForm.getFieldValue();
    console.log(username, password);
    console.log(username, password);

    try {
      if (!username || !password) {
        throw new Error("Please Fill Fields");
      }
      if (username.length > 50) {
        throw new Error("Username length cannot be greater than 50");
      }
      if (password.length > 50) {
        throw new Error("Password length cannot be greater than 50");
      }
      setLoading(true);
      const res = await user.LoginUser(username, password.trim());
      console.log(res);
      setLoading(false);
      if (res.data.message === "Success") {
        message.success(<strong>Signed In Successfully</strong>);
        localStorage.setItem("token", res.data.token);
        console.log(res.data.user);
        user.setCurrentUser(res.data.user);
        user.setIsLoggedIn(true);
      } else {
        console.log("inside else");
        message.error(<strong>{res.data}</strong>);
      }
    } catch (err) {
      setLoading(false);
      message.error(<strong>{err.message}</strong>);
    }
  };
  const handleSignup = async () => {
    console.log(signupForm.getFieldValue());
    const { username, email, password } = signupForm.getFieldValue();
    console.log(username.toString(), email, password);
    try {
      if (!username || !email || !password) {
        throw new Error("Please Fill Fields");
      }
      if (username.length > 50) {
        throw new Error("username length cannot be greater than 50");
      }
      if (email.length > 50) {
        throw new Error("Email length cannot be greater than 50");
      }
      if (password.length > 50) {
        throw new Error("Password length cannot be greater than 50");
      }
      setLoading(true);
      const res = await user.SignUpUser(
        username.trim(),
        email.trim(),
        password.trim()
      );
      console.log(res);
      setLoading(false);
      if (res.data.message === "Success") {
        message.success(<strong>Signed In Successfully</strong>);
        localStorage.setItem("token", res.data.token);
        console.log(res.data.user);
        user.setCurrentUser(res.data.user);
        user.setIsLoggedIn(true);
      } else {
        message.error(<strong>{res.data}</strong>);
      }
    } catch (err) {
      setLoading(false);
      message.error(<strong>{err.message}</strong>);
    }
  };
  return (
    <Overlay>
      <Card style={{ maxWidth: 500, width: "100%", position: "relative" }}>
        <Tabs defaultActiveKey="1">
          <TabPane
            disabled={loading}
            tab={<strong style={{ color: `${colors.primary}` }}>Login </strong>}
            key="1"
          >
            <Form
              requiredMark={false}
              name="login"
              form={loginForm}
              onFinish={handleLogin}
              layout="vertical"
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item label="Username" name="username">
                <Input />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" />
              </Form.Item>
              <Space top="2em" />
              <Button
                disabled={loading}
                style={{ width: "100%", color: `${colors.white}` }}
                type="primary"
                color={colors.white}
              >
                Login
              </Button>
            </Form>
            <Space top="1em" />
          </TabPane>
          <TabPane
            disabled={loading}
            tab={<strong style={{ color: `${colors.primary}` }}>Signup</strong>}
            key="2"
          >
            <Form
              requiredMark={false}
              form={signupForm}
              onFinish={handleSignup}
              name="signup"
              layout="vertical"
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item label="Username" name="username">
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input type="password" />
              </Form.Item>

              <Space top="2em" />
              <Button
                style={{ width: "100%", color: `${colors.white}` }}
                type="primary"
              >
                Signup
              </Button>
            </Form>
          </TabPane>
        </Tabs>
      </Card>
    </Overlay>
  );
}
