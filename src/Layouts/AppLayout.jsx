import React from 'react'
import Header from '../Common/Components/Header.jsx'
import Footer from '../Common/Components/Footer.jsx'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    // min-h-screen: makes the entire app to be of 100vh, flex-col for keeping every component vertically aligned
    // flex-grow in main content making main content to take all available space pushing footer to bottom of page
    <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='contaiiner flex-grow border border-red-500 w-full'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default AppLayout