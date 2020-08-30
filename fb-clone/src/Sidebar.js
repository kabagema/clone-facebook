import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'

function Sibebar() {
    return (
        <div className = "sidebar">
        
            <SidebarRow title="Pages"/>
            <SidebarRow title="Friends"/>
            <SidebarRow />
        </div>
    )
}

export default Sibebar
