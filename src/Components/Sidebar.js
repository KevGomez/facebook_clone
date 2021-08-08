import React from 'react'
import './Sidebar.css'
import SideBarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StoreFrontIcon from '@material-ui/icons/Storefront'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
// import { useStatevalue } from '../StateProvider'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SideBarRow src ="https://lh3.googleusercontent.com/ogw/ADGmqu9F6AMohqths3xKN03jjk4qAkvbelaPeHbKJBc6Hg=s192-c-mo   " title="Kevin Gomez"/>
            <SideBarRow Icon={LocalHospitalIcon} 
            title="COVID-19 Information center" />

            <SideBarRow Icon={EmojiFlagsIcon} 
                        title="Pages" />

            <SideBarRow Icon={PeopleIcon} 
                        title="Friends" />

            <SideBarRow Icon={ChatIcon} 
                        title="Messenger" />

            <SideBarRow Icon={StoreFrontIcon} 
                        title="Marketplace" />

            <SideBarRow Icon={VideoLibrary} 
                        title="Videos" />

            <SideBarRow Icon={ExpandMoreOutlined} 
                        title="More" />

        </div>
    )
}

export default Sidebar
