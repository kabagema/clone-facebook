import React from 'react'
import './sidebar.css'
//import './public/icloud.png'
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import chatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
function Sibebar() {
    return (
        <div className = "sidebar">
        
            <SidebarRow 
            src="https://imgix.bustle.com/inverse/09/71/a8/91/f673/44dc/855d/4a46588b0b32/harrowjpg.jpeg?w=710&h=399.72999999999996&auto=format%2Ccompress&cs=srgb&q=70&fit=max&crop=faces&dpr=2"
            title='Julien Kabagema'
            />
            <SidebarRow 
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={chatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default Sibebar

// title={user.displayName} 