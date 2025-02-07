"use client";

import { create } from "zustand";
import { Socket } from "socket.io-client";

export type OnlineUser ={
    socketId?:string;
    name?:string;
    location?:string;
    image?:string;

}
export type User={
    userId?:string;
    name?:string;
    email?:string;
    phone?:string;

}

interface SocketState {
  socket: Socket | null;
  user:User|null;
  setUser:(user:User | null)=<void;
  onlineUsers: OnlineUser[];
  setSocket: (socket: Socket | null) => void;
  setOnlineUsers: (users: OnlineUser[]) => void;
}

export const useSocketStore = create<SocketState>((set) => ({
  socket: null,
  user:null,
  setUser:(user)=>set({user:user}),
  onlineUsers: [],
  setSocket: (socket) => set({ socket }),
  setOnlineUsers: (users) => set({ onlineUsers: users }),
}));
