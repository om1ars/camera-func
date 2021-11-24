import React from 'react'
import { useSelector } from 'react-redux'

export default function Preview() {
    const image = useSelector(state => state.camera.cameraImage)
    return (
        <div>
            <img src={image} />
        </div>
    )
}
