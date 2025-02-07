"use client";

import { createContext, useContext, useEffect,useState } from "react";
import { useSocketStore,User } from "@/store/socketStore";
import { io } from "socket.io-client";
import { Socket } from "socket.io-client";


const SocketContext = createContext(null);

const socketUrl:string = "http://localhost:8080"


interface SockerProviderProps{
    children:React.ReactNode,
}

export const SocketProvider = ({ children}:SockerProviderProps) => {
  const {setOnlineUsers,setSocket } = useSocketStore();
  // const [socket,setSocket] = useState<Socket>(null)

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
      // newSocket.emit("user-offline", user?.userId);
      newSocket.disconnect();
      setSocket(null);
    };
  }, [setSocket, setOnlineUsers]);

  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
};

export const useSocket = () => useContext(SocketContext);
