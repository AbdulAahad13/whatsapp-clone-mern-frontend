import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, SearchOutlined,  } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'

import React from 'react'
import './Chat.css'
function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQacIkvULb678NQRLgjW4VcDN0cGQzQs3gA&usqp=CAU' />
                <div className="chat__headerInfo">
                    <h3>
                        Roman
                    </h3>
                    <p>last seen at 10.00pm</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className='chat__message'>
                    <span className='chat__name'>
                        Roman
                    </span>

                    Are we actually fighting the avengers??
                    <span className=" chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className='chat__reciever chat__message'>
                    <span className='chat__name'>
                        Dom
                    </span>

                    Yes
                    <span className=" chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>


                <p className='chat__message'>
                    <span className='chat__name'>
                        Roman
                    </span>

                    HOWWW WE GOT NO POWERS THO
                    <span className=" chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat__reciever chat__message'>
                    <span className='chat__name'>
                        Dom
                    </span>

                    We don't need superpowers when we got family
                    <span className=" chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form >
                    <input type="text"
                        // value={input}
                        // onChange={(e) => setInput(e.target.value)}
                        placeholder='Type a message'
                    />
                    <button
                        // onClick={sendMessage}
                        type='submit'>
                        Send a message
                    </button>
                </form>
                <Mic/>
            </div>
        </div>
    )
}

export default Chat
