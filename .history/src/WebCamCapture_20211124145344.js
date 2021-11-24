import { RadioButtonChecked } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
const videoConstraints = {
  width: 600,
  height: 400,
  facingMode: "user",
};

export default function WebCamCapture() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null)

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();

      console.log(imageSrc)
      setImage(imageSrc)
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
            <RadioButtonChecked fontSize='large' className='webCamCapture__button' onClick={capture}>Capture photo</RadioButtonChecked>

    </div>
    
  );
}
