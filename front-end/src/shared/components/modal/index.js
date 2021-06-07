import { createPortal } from "react-dom";

import { getValidObjectValue } from "../../utils";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Modal = ({ classes, children, id = "modal", ...rest }) => {
  let root = getValidObjectValue("root", classes);
  let dialog = getValidObjectValue("dialog", classes);
  let content = getValidObjectValue("content", classes);
  return createPortal(
    <div className={`modal fade ${root}`} id={id} {...rest}>
      <div className={`modal-dialog ${dialog}`}>
        <div className={`modal-content ${content}`}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal-wrapper")
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
