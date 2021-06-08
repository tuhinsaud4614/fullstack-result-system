import { Route, Switch } from "react-router-dom";

import { TEACHER_ROUTES } from "./meta-data";
import Home from "../pages/teacher/home";
import NotFound from "../pages/404";

const Teacher = () => {
  return (
    <Switch>
      <Route path={TEACHER_ROUTES.home.path} exact>
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Teacher;
