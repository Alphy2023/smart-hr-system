"use client"

import React from 'react'
import { useSocketStore } from "@/store/socketStore";

const AuthPage = () => {
  const { onlineUsers } = useSocketStore();
  console.log("online users:",onlineUsers)
  return (
    <div>dashbard entry page

      <br/>
      online users: {JSON.stringify(onlineUsers)}
    </div>
  )
}

export default AuthPage