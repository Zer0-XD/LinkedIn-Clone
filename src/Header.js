import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase'

function Header() {

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className="header__left">
                <img src="/logo.png" alt="LinkedInC" />

                <div className="header__search">
                    {/* search icon */}
                    <SearchIcon />
                    <input type="text" placeholder='Search' />

                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Netowrk" />
                <HeaderOption Icon={BusinessCenterIcon} title="My Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={"user.png "} title="Me" onClick={logOut} />
            </div>
        </div>
    )
}

export default Header
