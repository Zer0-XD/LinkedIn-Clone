import { Avatar } from '@material-ui/core'
import React, { forwardRef, useState } from 'react'
import InputOptions from './InputOption'
import './Post.css'
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp'
import { ChatOutlined, SendOutlined, ShareOutlined } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {

    const user = useSelector(selectUser);

    return (
        <div className='post' ref={ref}>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOptions Icon={ThumbUpAltSharpIcon} title="Like" />
                <InputOptions Icon={ChatOutlined} title="Comment" />
                <InputOptions Icon={ShareOutlined} title="Share" />
                <InputOptions Icon={SendOutlined} title="Send" />
            </div>
        </div>
    )
})

export default Post
