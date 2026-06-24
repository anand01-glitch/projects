function Button({ variant = "primary", children, ...props }) {
  return (
    <button className={`button button-${variant}`} type="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
