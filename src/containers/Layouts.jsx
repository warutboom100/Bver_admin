import React from 'react'
import PageContents from './container/Pagecontent'
import LeftSidebar from "./container/Leftsidebar"

function Layouts() {
  return (
    <>
        { /* Left drawer - containing page content and side bar (always open) */ }
        <div className="drawer  lg:drawer-open">
            <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <PageContents/>
            <LeftSidebar/>
            
        </div>

        
    </>
  )
}

export default Layouts