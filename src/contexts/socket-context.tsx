"use client";

import { createContext, useContext, useEffect,useState } from "react";
import { useSocketStore,User,OnlineUser } from "@/store/socketStore";
import {io, Socket } from "socket.io-client";


interface SocketContextType {
  socket: Socket | null;
}

const SocketContext = createContext<SocketContextType | null>(null);

const socketUrl:string = "http://localhost:8080"


interface SockerProviderProps{
    children:React.ReactNode,
}

export const SocketProvider = ({ children}:SockerProviderProps) => {
  const {setOnlineUsers,setSocket,user,socket} = useSocketStore();

  useEffect(() => {
    // if (!user) return;

    const newSocket = io(socketUrl);

    setSocket(newSocket);

    // newSocket.emit("user-online", {
    //   userId: user?.id,
    //   name: user?.name,
    //   image: user?.image,
    //   location: "Nairobi, Kenya",
    // });
    newSocket.emit("user-online", {
      userId: "user-1",
      name: "Jane doe",
      email: "jane@example.com",
      location: "Nairobi, Kenya",
    });
    newSocket.on("message",(message)=>{
      console.log("text messsage:",message)
    })

    newSocket.on("online-users", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      newSocket.emit("user-offline", user?.userId);
      newSocket.disconnect();
      setSocket(null);
    };
  }, [user,setSocket, setOnlineUsers]);

  return <SocketContext.Provider value={{socket}}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};;
