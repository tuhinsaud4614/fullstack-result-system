import { classNameGenerator } from "../../../utils";
import styles from "./IconButton.module.css";

const IconButton = ({
  children,
  pending = false,
  disabled = false,
  className,
  pendingClassName,
  ...rest
}) => {
  if (pending) {
    disabled = true;
  }

  return (
    <button
      {...rest}
      disabled={disabled}
      className={`${styles.Root}${classNameGenerator(
        className
      )}${classNameGenerator(pending ? styles.Pending : null)}`}
    >
      {pending && <span className={`${styles.PendingBlock}${classNameGenerator(pendingClassName)}`} />}
      {children}
    </button>
  );
};
export default IconButton;
