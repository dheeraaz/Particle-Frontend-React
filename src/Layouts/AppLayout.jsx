import React, { useEffect } from 'react'
import {Header, Footer} from '../Common/Components'
import { Outlet, useLocation } from 'react-router-dom'

const AppLayout = () => {

  const { pathname } = useLocation();
  useEffect(()=>{
    // For ensuring scrollbar remains at top position whenever page changes [based on path]
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0,left:0, behavior: "smooth" });

  },[pathname])

  return (
    // min-h-screen: makes the entire app to be of 100vh, flex-col: keeps every component vertically aligned
    // flex-grow in main content making main content to take all available space pushing footer to bottom of page
    <div className='min-h-screen flex flex-col'>
        <Header />
        {/* <Breadcrumbs2 /> */}
        <main className='flex-1 w-full'>
          {/* This section is dynamic, changes according to route */}
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default AppLayout