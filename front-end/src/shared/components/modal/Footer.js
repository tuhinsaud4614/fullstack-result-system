const Footer = ({ className = "", children, ...rest }) => {
  return (
    <div className={`modal-footer ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Footer;
