import styles from "./Sidebar.module.css";

function SidebarButton({ onClick, children, className = "" }) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default SidebarButton;
