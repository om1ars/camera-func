import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export default function Preview() {
    const history = useHistory()
    useEffect(() => {
        if(!image) {
            history.replace()
        }
    }, [])
    const image = useSelector(state => state.camera.cameraImage)
    return (
        <div>
            <img src={image} />
        </div>
    )
}
