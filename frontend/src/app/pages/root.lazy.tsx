import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { styled } from "@mui/material";
import { QueryClient } from "@tanstack/react-query";
import {AuthContextType} from "@/app/core";
import {createContext, useState} from "react";

export const DashLayoutWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.textTints[90],
  width: "100%",
  minHeight: "100vh",
}));

export const DashLayoutContainer = styled("div")(({ theme }) => ({
  paddingLeft: "4%",
  paddingRight: "4%",
  paddingTop: "2%",
  paddingBottom: "2%"
}));

export const ChatContext = createContext({
  showChat: false,
  setShowChat: (d) => {
  }
});
const RootComponent = () => {
  const [showChat, setShowChat] = useState(false);
  return (
    <>
      <ChatContext.Provider value={{showChat, setShowChat}}>
        <Outlet/>
      </ChatContext.Provider>
    </>
  );
};
export const rootRoute = createRootRouteWithContext<{
  queryClient: QueryClient,
  auth: AuthContextType
}>()({
  component: RootComponent,
});
