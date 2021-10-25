import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Signin from "../pages/signin/Signin";
import RestaurantList from "../pages/restaurant-details/RestaturantList";

import "./App.css";

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <div className="App">
        <Switch>
          <Route path="/app">
            <h1>Admin section</h1>
          </Route>
          <Route path="/list">
            <RestaurantList />
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
