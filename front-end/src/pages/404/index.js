import { useHistory } from "react-router-dom";

import img from "../../assets/404.svg";
import Button from "../../shared/components/button";
import styles from "./Index.module.css";

const NotFound = () => {
  const { goBack } = useHistory();

  return (
    <div className={`${styles.Root}`}>
      <img src={img} alt="Page Not Found" className="img-fluid w-75" />
      <h1 className="text-danger mt-4">
        Page not <span className="fw-bolder">found</span>
      </h1>
      <p className="my-4 lead">
        Oops! Looks like you followed a bad link. If you think this is a problem
        with us, please tell us.
      </p>
      <Button className="btn-info" type="button" onClick={() => goBack()}>
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
