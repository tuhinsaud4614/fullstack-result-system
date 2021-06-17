import { Route, Switch } from "react-router-dom";

import { USER_ROUTES } from "./meta-data";
import SubjectTestGrade from "../pages/user/subject-test-grade";
import Home from "../pages/user/home";
import Auth from "../pages/user/auth";
import NotFound from "../pages/404";
import Header from "../pages/user/components/header";

const User = () => {
  return (
    <Switch>
      <Route path={USER_ROUTES.auth.path} exact>
        <Auth />
      </Route>
      <Route>
        <Header />
        <main className={`container py-3`}>
          <Switch>
            <Route path={USER_ROUTES.home.path} exact>
              <Home />
            </Route>
            <Route path={USER_ROUTES.tests.path} exact>
              <SubjectTestGrade />
            </Route>
            <Route>
              <NotFound path={USER_ROUTES.home.path} />
            </Route>
          </Switch>
        </main>
      </Route>
    </Switch>
  );
};

export default User;
