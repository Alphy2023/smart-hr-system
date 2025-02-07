import React from 'react'


interface LayoutProps{
    children:React.ReactNode
}
const MainLayout = ({children}:LayoutProps) => {
  return (
    <div className="flex flex-col relative">
        <div className="h-[4rem] bg-red-300 sticky shadow-lg">

        </div>
        <main className="flex-grow">
            {children}
        </main>
        <div className="h-[5rem] bg-gray-300 fixed bottom-0 w-full">footr</div>
    </div>
  )
}


export default MainLayout