import {Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Signin from "../pages/signin/Signin";

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/app">
          <h1>Admin section</h1>
        </Route>
        <Route path="/">
        <Signin />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
