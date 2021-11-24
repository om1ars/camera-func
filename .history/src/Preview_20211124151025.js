import React from 'react'

export default function Preview() {
    const image = useSelector(state => state.camera.cameraImage)
    return (
        <div>
            <img src={image} />
        </div>
    )
}
