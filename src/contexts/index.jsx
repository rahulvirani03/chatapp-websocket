import React from "react";
import AuthStore from "./AuthStore";
import ChatStoreProvider from "./ChatStore";
import HomeStoreProvider from "./HomeStore";

export default function ContextWrapper({ children }) {
  return (
    <>
      <AuthStore>
        <HomeStoreProvider>
          <ChatStoreProvider>{children}</ChatStoreProvider>
        </HomeStoreProvider>
      </AuthStore>
    </>
  );
}
