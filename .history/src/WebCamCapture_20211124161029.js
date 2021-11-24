import { Create, Note, RadioButtonChecked } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Webcam from "react-webcam";
import "./WebcamCapture.css";
import {
  selectedCameraImage,
  setCameraImage,
} from "./features/slices/cameraSlice";
import { TextField } from "@material-ui/core";
const videoConstraints = {
  width: 600,
  height: 400,
  facingMode: "user",
};

export default function WebCamCapture() {
  <TextField />
  <Create />
  <Note />
  <Music
  const dispatch = useDispatch();
  const image = useSelector((state) => state.camera.cameraImage);
  console.log(image);
  const webcamRef = useRef(null);
  // const [image, setImage] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    dispatch(setCameraImage(imageSrc));
    history.push("/preview");
  }, [webcamRef]);

  const history = useHistory();

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
      <RadioButtonChecked
        fontSize="large"
        className="webCamCapture__button"
        onClick={capture}
      >
        Capture photo
      </RadioButtonChecked>
    </div>
  );
}
