import { NavLink } from "react-router-dom";

import { classNameGenerator } from "../../../../../shared/utils";
import styles from "./Sidebar.module.css";

const NavItem = ({ children, icon, className, activeClassName, ...rest }) => {
  return (
    <li>
      <NavLink
        className={`${styles.NavLink}${classNameGenerator(className)}`}
        activeClassName={`${styles.LinkActive}${classNameGenerator(
          activeClassName
        )}`}
        {...rest}
      >
        {icon}
        <span className={`ms-3 ${styles.NavLinkText}`}>{children}</span>
      </NavLink>
    </li>
  );
};
export default NavItem;
