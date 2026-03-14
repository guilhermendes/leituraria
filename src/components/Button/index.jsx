import "./button.style.css";

export function Button({ children, icon, ...rest }) {
  return (
    <button className="btn" {...rest}>
      {icon}
      {children}
    </button>
  );
}
