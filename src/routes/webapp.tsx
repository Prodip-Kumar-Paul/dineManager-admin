import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SideBar from "../components/SideBar";

import Landing from "../pages/landing/Index";
import NewRetsurant from "../pages/new-restaurant/Index";
import DetailsPage from "../pages/restaurant-details/details-page";
import RestaurantList from "../pages/restaurant-details/RestaturantList";

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
        <Route path="/app/list" exact>
          <SideBar />
          <RestaurantList />
        </Route>
        <Route path="/app/details" exact>
          <SideBar />
          <DetailsPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default WebApp;
