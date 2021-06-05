import { FiMenu, FiSettings } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

import { ADMIN_ROUTES } from "../../../../../routes/meta-data";
import IconButton from "../../../../../shared/components/button/icon-button/IconButton";
import styles from "./Header.module.css";

const Header = ({ onToggle }) => {
  const { pathname } = useLocation();

  const currentPath = Object.keys(ADMIN_ROUTES).find(
    (value) => ADMIN_ROUTES[value].path === pathname
  );

  return (
    <header className={`px-3 ${styles.Root}`}>
      <IconButton className={`px-2 py-3 fs-3`} onClick={onToggle}>
        <FiMenu />
      </IconButton>
      {currentPath && (
        <h1 className={`ps-2 fs-3 ${styles.Title}`}>
          {ADMIN_ROUTES[currentPath].name}
        </h1>
      )}
      <ul className={`${styles.NavItems}`}>
        <li className={`${styles.NavItem}`}>
          <NavLink
            to="2"
            className={`px-2 py-3 fs-3 ${styles.NavLink}`}
            activeClassName={`${styles.LinkActive}`}
            exact
          >
            <FiSettings />
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
