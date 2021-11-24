import logo from "./logo.svg";
import "./App.css";
import WebCamCapture from "./WebCamCapture";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Preview from "./Preview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app__body">
          <Switch>
            <Route exam path="/">
              <WebCamCapture />
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
