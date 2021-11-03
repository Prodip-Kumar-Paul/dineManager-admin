import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "../pages/landing/Index";
import NewRetsurant from "../pages/new-restaurant/Index";

const WebApp = () => {
    return <Router>
        <Switch>
            <Route path="/app" exact>
                <Landing />
            </Route>
            <Route path="/app/register" exact>
                <NewRetsurant />
            </Route>
        </Switch>
    </Router>
} 

export default WebApp;