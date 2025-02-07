"use client";

import { create } from "zustand";
import type { Socket } from "socket.io-client";

export type OnlineUser = {
  socketId?: string;
  name?: string;
  location?: string;
  image?: string;
};

export type User = {
  userId?: string;
  name?: string;
  email?: string;
  phone?: string;
};

interface SocketState {
  socket: Socket | null;
  user: User | null;
  onlineUsers: OnlineUser[];
  setUser: (user: User | null) => void;
  setSocket: (socket: Socket | null) => void;
  setOnlineUsers: (users: OnlineUser[]) => void;
}

export const useSocketStore = create<SocketState>((set) => ({
  socket: null,
  user: null,
  onlineUsers: [],
  setUser: (user) => set({ user }),
  setSocket: (socket) => set({ socket }),
  setOnlineUsers: (users) => set({ onlineUsers: users }),
}));
