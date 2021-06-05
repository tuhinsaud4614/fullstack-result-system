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
      <IconButton className={`py-4`} onClick={onToggle}>
        <FiMenu />
      </IconButton>
      {currentPath && (
        <h1 className={`pl-4 ${styles.Title}`}>
          {ADMIN_ROUTES[currentPath].name}
        </h1>
      )}
      <ul className={`pl-4 ${styles.NavItems}`}>
        <li className={`pl-4 ${styles.NavItem}`}>
          <NavLink
            to="2"
            className={`py-4 px-3 ${styles.NavLink}`}
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
