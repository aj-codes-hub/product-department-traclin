import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'



const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
       <Header />
         <main className="flex flex-col px-[20px]">
            <Outlet />
         </main>
    </div>
  )
}

export default MainLayout