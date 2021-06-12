import { Route, Switch } from "react-router-dom";

import { TEACHER_ROUTES } from "./meta-data";
import Header from "../pages/teacher/components/header";
import Home from "../pages/teacher/home";
import NotFound from "../pages/404";
import Pupil from "../pages/teacher/pupil";
import Auth from "../pages/teacher/auth/Auth";
import Test from "../pages/teacher/test";
import TestDetail from "../pages/teacher/test-deatil";

const Teacher = () => {
  return (
    <Switch>
      <Route path={TEACHER_ROUTES.auth.path} exact>
        <Auth />
      </Route>
      <Route>
        <Header />
        <main className={`container py-3`}>
          <Switch>
            <Route path={TEACHER_ROUTES.home.path} exact>
              <Home />
            </Route>
            <Route path={TEACHER_ROUTES.pupils.path} exact>
              <Pupil />
            </Route>
            <Route path={TEACHER_ROUTES.tests.path} exact>
              <Test />
            </Route>
            <Route path={TEACHER_ROUTES.testDetail.path} exact>
              <TestDetail />
            </Route>
            <Route>
              <NotFound path={TEACHER_ROUTES.home.path} />
            </Route>
          </Switch>
        </main>
      </Route>
    </Switch>
  );
};

export default Teacher;
