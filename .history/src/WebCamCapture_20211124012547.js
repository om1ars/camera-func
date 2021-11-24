import React, { useRef } from 'react'
import Webcam from 'react-webcam';
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

export default function WebCamCapture() {
    const webcamRef = useRef(null);

    return (
        <div className='webcamCapture'>
           <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
        </div>
    )
}
