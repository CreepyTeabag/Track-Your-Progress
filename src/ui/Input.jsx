import style from "./Input.module.css";

function Input({
  type = "text",
  step,
  placeholder = "",
  disabled = false,
  className = "",
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      step={step}
      placeholder={placeholder}
      disabled={disabled}
      className={`${style.input} ${className}`}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
