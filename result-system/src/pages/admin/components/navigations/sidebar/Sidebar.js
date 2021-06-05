import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

import { ADMIN_ROUTES } from "../../../../../routes/meta-data";
import Backdrop from "../../../../../shared/components/backdrop/Backdrop";
import styles from "./Sidebar.module.css";

const SubItems = ({ data }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <ul
      className={`${styles.SubItems} ${open ? styles.NavLinkClicked : ""}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <span className={`${styles.NavLink}`}>
        <BsGrid1X2Fill />
        <span className={`mx-3 ${styles.NavLinkText}`}>
          {ADMIN_ROUTES.dashboard.name}
        </span>
        <FiChevronRight />
      </span>
      {open && (
        <>
          {data.map((el, index) => (
            <li key={index}>
              <NavLink
                to={el.path}
                className={`${styles.SubItemLink}`}
                activeClassName={`${styles.LinkActive}`}
              >
                {el.name}
              </NavLink>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

const Sidebar = ({ open, onClose }) => {
  return (
    open && (
      <>
        <Backdrop className={`${styles.Back}`} open={open} clicked={onClose} />
        <aside className={`${styles.Root}`}>
          <menu className={`${styles.Menu}`}>
            <h1 className={`m-0 ${styles.Title}`}>Admin</h1>
            <nav>
              <ul className={`m-0 p-0 ${styles.NavItems}`}>
                <li>
                  <NavLink
                    to={ADMIN_ROUTES.dashboard.path}
                    className={`${styles.NavLink}`}
                    activeClassName={`${styles.LinkActive}`}
                  >
                    <BsGrid1X2Fill />
                    <span className={`ms-3 ${styles.NavLinkText}`}>
                      {ADMIN_ROUTES.dashboard.name}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <SubItems
                    data={[
                      { ...ADMIN_ROUTES.dashboard },
                      { ...ADMIN_ROUTES.dashboard },
                    ]}
                  />
                </li>
              </ul>
            </nav>
          </menu>
        </aside>
      </>
    )
  );
};

export default Sidebar;
