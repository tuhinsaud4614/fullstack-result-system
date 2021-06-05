import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import { ADMIN_ROUTES } from "./meta-data";
import Dashboard from "../pages/admin/dashboard";
import NotFound from "../pages/404/404";
import Header from "../pages/admin/components/navigations/header/Header";
import Sidebar from "../pages/admin/components/navigations/sidebar/Sidebar";
import styles from "./Admin.module.css";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className={`${styles.Root}`}>
      <Sidebar open={isSidebarOpen} onClose={closeSidebar} />
      <section className={`${styles.Content}`}>
        <Header onToggle={toggleSidebar} />
        <main className={`p-4`}>
          <Switch>
            <Route path={ADMIN_ROUTES.dashboard.path} exact>
              <Dashboard />
            </Route>
            <Route>
              <NotFound name="Admin" />
            </Route>
          </Switch>
        </main>
      </section>
    </div>
  );
};

export default Admin;
