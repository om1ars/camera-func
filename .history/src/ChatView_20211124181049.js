import React from 'react'
import { useSelector } from 'react-redux'
import './ChatView.css'
import { selectSelectedImage } from './features/slices/appSlice'

export default function ChatView() {
    const selectedImage= useSelector(selectSelectedImage)
    return (
        <div className='ChatView'>
            
        </div>
    )
}
