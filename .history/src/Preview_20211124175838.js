import { Close, Send } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./Preview.css";
import {
  AttachFile,
  Create,
  Crop,
  MusicNote,
  Note,
  RadioButtonChecked,
  Timer,
} from "@material-ui/icons";
import firebase from "firebase";
import { resetCameraImage, selectedCameraImage } from "./features/slices/cameraSlice";
import { TextField } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { db, storage } from "./firebase";

export default function Preview() {
  const cameraImage = useSelector((state) => state.camera.cameraImage);
  const test = useSelector(selectedCameraImage())
  


  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(resetCameraImage());
  };
  const history = useHistory();
  useEffect(() => {
    if (!cameraImage) {
      history.replace("/");
    }
  }, [cameraImage, history]);


  const sendPost = () => {
      console.log('clic');
    const id = uuid();
    const uploadTask = storage
      .ref(`posts/${id}`)
      .putString(cameraImage, "data_url");

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        alert(error);
      },
      () => {
          storage.ref('posts').child(id).getDownloadURL().then(url => {
              db.collection('posts').add({
                  imageUrl: url,
                  username: 'Omar',
                  read: false,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp()
              })
              history.replace('/chats')
          })
      }
    );
  };
  return (
    <div className="preview">
      <Close className="preview__close" onClick={handleClose} />
      <div className="preview__toolbarRight">
        <Create />
        <Note />
        <MusicNote />
        <AttachFile />
        <Crop />
        <Timer />
      </div>
      <img src={cameraImage} alt="" />
      <div onClick={sendPost} className="preview__footer">
        <h2>Send now</h2>
        <Send  className="preview__send" />
      </div>
    </div>
  );
}
