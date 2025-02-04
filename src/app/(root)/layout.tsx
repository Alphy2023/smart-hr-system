import React from 'react'


interface LayoutProps{
    children:React.ReactNode
}
const MainLayout = ({children}:LayoutProps) => {
  return (
    <div>
        navbar
        {children}
        footer
    </div>
  )
}


export default MainLayout