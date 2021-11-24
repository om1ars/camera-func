import { Avatar } from '@material-ui/core'
import React from 'react'
import './Chat.css'

export default function Chat({id,  username, imageUrl, read, timestamp}) {
    return (
        <div className='chat'>
            
            <Avatar />
        </div>
    )
}
