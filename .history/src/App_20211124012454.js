import logo from './logo.svg';
import './App.css';
import WebCamCapture from './WebCamCapture';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

function App() {
  return (
    <div className="App">
     
     <WebCamCapture />
    </div>
  );
}

export default App;
