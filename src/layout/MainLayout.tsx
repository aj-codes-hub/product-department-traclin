import React from 'react'
import Header from '../components/common/header'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
      <main className="flex flex-col px-[20px]">
        {children}
      </main>
    </div>
  )
}

export default MainLayout