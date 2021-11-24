import React from 'react'
import Webcam from 'react-webcam';
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

export default function WebCamCapture() {
    return (
        <div className='webcamCapture'>
            <Webcam />
        </div>
    )
}
