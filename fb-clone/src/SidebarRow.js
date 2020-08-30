import React from 'react'
import {Avatar, Icon} from "@material-ui/core"
import './SidebarRow.css'
function SidebarRow({src, icon, title}) {
    return (
        <div className="SidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
            <p>{icon}</p>
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
