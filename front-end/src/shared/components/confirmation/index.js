import Button from "../button";
import Modal from "../modal";
import styles from "./Index.module.css";

const Confirmation = ({ id, title, pending = false, onHide, handler }) => {
  return (
    <Modal id="modal" show={!!id} onHide={onHide} center scroll staticBack>
      <Modal.Body>
        Are you really want to delete{" "}
        <span className="fw-bolder text-danger">{title}</span>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className={`btn-outline-secondary`}
          type="button"
          onClick={onHide}
        >
          Cancel
        </Button>
        <Button
          pendingClassName={styles.Pending}
          className={`ms-3 btn-danger`}
          type="button"
          pending={pending}
          onClick={handler}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Confirmation;
