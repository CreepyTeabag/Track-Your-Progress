import style from "./Button.module.css";

function Button({ children, onClick, className = "", disabled = false }) {
  return (
    <button
      className={`${style.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
