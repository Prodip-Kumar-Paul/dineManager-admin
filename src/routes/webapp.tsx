import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SideBar from "../components/SideBar";

import Landing from "../pages/landing/Index";
import NewRetsurant from "../pages/new-restaurant/Index";

const WebApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/app" exact>
          <SideBar />
          <Landing />
        </Route>
        <Route path="/app/register" exact>
          <SideBar />
          <NewRetsurant />
        </Route>
      </Switch>
    </Router>
  );
};

export default WebApp;
