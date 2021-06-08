import { useLayoutEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import { ADMIN_ROUTES } from "./meta-data";
import Header from "../pages/admin/components/navigations/header/Header";
import Sidebar from "../pages/admin/components/navigations/sidebar/Sidebar";
import Auth from "../pages/admin/auth/Auth";
import Dashboard from "../pages/admin/dashboard";
import Users from "../pages/admin/users/Users";
import Classes from "../pages/admin/classes";
import NotFound from "../pages/404";
import styles from "./Admin.module.css";
import Subjects from "../pages/admin/subjects";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  useLayoutEffect(() => {
    if(window.matchMedia("(min-width: 768px)").matches) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);

    }
  }, []);

  return (
    <Switch>
      <Route path={ADMIN_ROUTES.auth.path} exact>
        <Auth />
      </Route>
      <Route>
        <div className={`${styles.Root}`}>
          <Sidebar open={isSidebarOpen} onClose={closeSidebar} />
          <section className={`${styles.Content}`}>
            <Header onToggle={toggleSidebar} />
            <main className={`p-3`}>
              <Switch>
                <Route path={ADMIN_ROUTES.dashboard.path} exact>
                  <Dashboard />
                </Route>
                <Route path={ADMIN_ROUTES.users.path} exact>
                  <Users />
                </Route>
                <Route path={ADMIN_ROUTES.classes.path} exact>
                  <Classes />
                </Route>
                <Route path={ADMIN_ROUTES.subjects.path} exact>
                  <Subjects />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </main>
          </section>
        </div>
      </Route>
    </Switch>
  );
};

export default Admin;
