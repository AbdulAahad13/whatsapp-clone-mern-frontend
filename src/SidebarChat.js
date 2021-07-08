import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

function SidebarChat({ title , message, pic}) {
    return (
        <div className='sidebarChat'>
            <Avatar src={pic} />
            <div className="sidebarChat__info">
                <h2>{title} </h2>
                <p> {message}</p>
                
            </div>
        </div>
    )
}

export default SidebarChat
