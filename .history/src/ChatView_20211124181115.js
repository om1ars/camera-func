import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './ChatView.css'
import { selectSelectedImage } from './features/slices/appSlice'

export default function ChatView() {
    const selectedImage= useSelector(selectSelectedImage)

    const history = useHistory()
    return (
        <div className='ChatView'>
            <img src={selectedImage} />
        </div>
    )
}
