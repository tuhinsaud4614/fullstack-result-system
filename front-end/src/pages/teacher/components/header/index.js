import { NavLink } from "react-router-dom";
import { BsBoxArrowRight, BsPeopleCircle } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";

import styles from "./Index.module.css";
import { TEACHER_ROUTES } from "../../../../routes/meta-data";

const Header = () => {
  return (
    <header className={`sticky-top bg-dark text-white shadow-sm`}>
      <div className={`container`}>
        <div
          className={`d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start`}
        >
          <NavLink
            to={TEACHER_ROUTES.home.path}
            className={`fs-4 d-flex align-items-center my-2 my-sm-0 me-sm-auto text-white text-decoration-none`}
            exact
          >
            Teacher
          </NavLink>
          <ul
            className={`nav col-12 col-sm-auto my-2 justify-content-center my-sm-0 text-small`}
          >
            <li>
              <NavLink
                to={TEACHER_ROUTES.pupils.path}
                className={`nav-link ${styles.Link}`}
                activeClassName="text-danger"
                exact
              >
                <BsPeopleCircle
                  className={`${styles.Icon} d-block mx-auto mb-1`}
                />
                {TEACHER_ROUTES.pupils.name}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={TEACHER_ROUTES.test.path}
                className={`nav-link ${styles.Link}`}
                activeClassName="text-danger"
                exact
              >
                <IoBookSharp
                  className={`${styles.Icon} d-block mx-auto mb-1`}
                />
                {TEACHER_ROUTES.test.name}
              </NavLink>
            </li>
            <li>
              <span className={`nav-link ${styles.Link}`}>
                <BsBoxArrowRight
                  className={`${styles.Icon} d-block mx-auto mb-1`}
                />
                Sign Out
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
