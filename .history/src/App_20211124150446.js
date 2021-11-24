import logo from './logo.svg';
import './App.css';
import WebCamCapture from './WebCamCapture';



function App() {
  return (
    <div className="App">
        <Router>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
     <WebCamCapture />
    </div>
  );
}

export default App;
