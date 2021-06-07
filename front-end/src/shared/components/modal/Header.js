import { getValidObjectValue } from "../../utils";

const Header = ({ label, closeBtn, classes, closeProps, children }) => {
  let root = getValidObjectValue("root", classes);
  let title = getValidObjectValue("title", classes);
  let close = getValidObjectValue("close", classes);

  let props = { "data-bs-dismiss": "modal" };
  if (typeof closeProps === "object" && closeProps !== null) {
    props = closeProps;
  }

  return (
    <header className={`modal-header ${root}`}>
      {label && <h5 className={`modal-title ${title}`}>{label}</h5>}
      {children}
      {closeBtn && (
        <button
          type="button"
          className={`btn-close ${close}`}
          {...props}
        ></button>
      )}
    </header>
  );
};

export default Header;
