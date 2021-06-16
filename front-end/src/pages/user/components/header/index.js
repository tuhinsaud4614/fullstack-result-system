import { NavLink } from "react-router-dom";

// import styles from "./Index.module.css";
import {
  ADMIN_ROUTES,
  TEACHER_ROUTES,
  USER_ROUTES,
} from "../../../../routes/meta-data";

const Header = () => {
  return (
    <header className={`navbar navbar-expand-sm navbar-dark bg-primary`}>
      <div className="container">
        <NavLink className={`navbar-brand`} to={USER_ROUTES.home.path}>
          Pupil
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav ms-sm-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={ADMIN_ROUTES.dashboard.path}
              >
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={TEACHER_ROUTES.home.path}
              >
                Teacher
              </NavLink>
            </li>
            <li className="nav-item">
              <span className="nav-link">Sign Out (Pupil)</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
