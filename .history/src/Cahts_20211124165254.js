import { Avatar } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import './Chats.css'

export default function Cahts() {
    return (
        <div className='chats'>
            <div className='chats__header'>
                <Avatar className='chats__avatar' />
                <div className='chats__search'>
                    <Search />
                    <input placeholder='Friends' className='chats__chatIcon' />
                </div>
                    
                </div>
            </div>
        </div>
    )
}
