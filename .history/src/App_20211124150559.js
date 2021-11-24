import logo from "./logo.svg";
import "./App.css";
import WebCamCapture from "./WebCamCapture";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <
        <Switch>
          <Route path="/">
            <WebCamCapture />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
