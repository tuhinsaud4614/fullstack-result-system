import { Route, Switch } from "react-router-dom";

import { USER_ROUTES } from "./meta-data";
import Home from "../pages/user/home";
import NotFound from "../pages/404";

const User = () => {
  return (
    <Switch>
      <Route path={USER_ROUTES.home.path} exact>
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default User;
