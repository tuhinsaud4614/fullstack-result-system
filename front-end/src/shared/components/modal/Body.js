const Body = ({ className = "", children, ...rest }) => {
  return (
    <div className={`modal-body ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Body;
