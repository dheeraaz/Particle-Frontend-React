import React from 'react'
import Header from '../Common/Components/Header.jsx'
import Footer from '../Common/Components/Footer.jsx'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default AppLayout