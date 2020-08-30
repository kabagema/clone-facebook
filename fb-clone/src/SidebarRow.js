import React from 'react'
import './SidebarRow.css'
function SidebarRow({src, icon, title}) {
    return (
        <div className="SidebarRow">
            <p>{title}</p>
            <p>{icon}</p>
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
