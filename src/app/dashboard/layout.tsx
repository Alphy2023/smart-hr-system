"use client"

import React from 'react'
import {AuthFooter} from "@/components/footer/AuthFooter"
import {AuthHeader} from "@/components/header/AuthHeader"
import {AuthSidebar} from "@/components/sidebar/AuthSidebar"

import {SocketProvider} from "@/contexts/socket-context"

interface LayoutProps {
    children:React.ReactNode
}

const AuthLayout = ({children}:LayoutProps) => {
  return (
    <SocketProvider>
      <div className="w-full flex relative bg-dashColor">
          <AuthSidebar/>
          <div className="w-full p-3 pt-0 pb-0">
              <AuthHeader/>
              <main className="bg-green-300 rounded-md 
              w-full mt-3 mb-3 flex-grow">
                  {children}
              </main>
              <AuthFooter/>
          </div>
      </div>
    </SocketProvider>
  )
}

export default AuthLayout