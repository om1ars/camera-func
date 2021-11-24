import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export default function Preview() {
    const image = useSelector(state => state.camera.cameraImage)

    const history = useHistory()
    useEffect(() => {
        if(!image) {
            history.replace('/')
        }
    }, [image, history])
    return (
        <div className='preview'>
            <img src={image} />
        </div>
    )
}
