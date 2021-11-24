import React, { useRef } from "react";
import Webcam from "react-webcam";
const videoConstraints = {
  width: 600,
  height: 400,
  facingMode: "user",
};

export default function WebCamCapture() {
  const webcamRef = useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
            <button class onClick={capture}>Capture photo</button>

    </div>
  );
}
