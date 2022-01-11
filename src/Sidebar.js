import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (

        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>

            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
                <Avatar className='side__avatar' src={user.photoUrl} >{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h5>{user.email}</h5>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__stat_number">2,532</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on posts</p>
                    <p className="sidebar__stat_number">1,640</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('HTML')}
                {recentItem('Javascript')}
                {recentItem('Computerscience')}
                {recentItem('Reactjs')}
                {recentItem('jsx')}
            </div>

        </div>
    )
}

export default Sidebar
