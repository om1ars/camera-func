import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './ChatView.css'
import { selectSelectedImage } from './features/slices/appSlice'

export default function ChatView() {
    const selectedImage= useSelector(selectSelectedImage)

    const exit= () => {}

    useEffect(() => {
        if(!selectedImage) {}
    }, [])

    const history = useHistory()
    return (
        <div className='ChatView'>
            <img src={selectedImage} alt='' onclick={exit} />
        </div>
    )
}
