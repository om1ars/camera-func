import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Preview() {
    useEffect(() => {
        if(image!)
    }, [])
    const image = useSelector(state => state.camera.cameraImage)
    return (
        <div>
            <img src={image} />
        </div>
    )
}
