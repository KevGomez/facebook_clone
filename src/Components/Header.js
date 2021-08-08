import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import { Add, ExpandMore, Forum, NotificationsActive, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt="Facebook_logo" />
            </div>

            <div className="header__input">
                <SearchIcon />
                <input placeholder="Search facebook" type="text" />
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontsize="large" />
                </div>

                <div className="header__option">
                    <FlagIcon fontsize="large" />
                </div>

                <div className="header__option">
                    <SubscriptionsOutlined fontsize="large" />
                </div>

                <div className="header__option">
                    <StorefrontOutlined fontsize="large" />
                </div>

                <div className="header__option">
                    <SupervisedUserCircle fontsize="large" />
                </div>
            </div>

            <div className="header__right">
                    <div className="header__info">
                        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9F6AMohqths3xKN03jjk4qAkvbelaPeHbKJBc6Hg=s192-c-mo" />
                        <h4>Kevin</h4>
                    </div>

                    <IconButton>
                         <Add />
                    </IconButton>

                    <IconButton>
                         <Forum />
                    </IconButton>

                    <IconButton>
                         <NotificationsActive />
                    </IconButton>

                    <IconButton>
                         <ExpandMore />
                    </IconButton>

                    
                </div>
        </div>
    )
}

export default Header
