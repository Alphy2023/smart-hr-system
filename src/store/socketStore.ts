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
  onlineUsers: OnlineUser[];
  setSocket: (socket: Socket | null) => void;
  setOnlineUsers: (users: OnlineUser[]) => void;
}

export const useSocketStore = create<SocketState>((set) => ({
  socket: null,
  onlineUsers: [],
  setSocket: (socket) => set({ socket }),
  setOnlineUsers: (users) => set({ onlineUsers: users }),
}));
