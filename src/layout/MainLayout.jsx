import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/reusableComponents/Navbar'
import Footer from '../components/reusableComponents/Footer'
import { Toaster } from '@/components/ui/toast'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        
        <div className="flex-1">
            <Navbar />
            <Outlet/>
            <Toaster/>
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout