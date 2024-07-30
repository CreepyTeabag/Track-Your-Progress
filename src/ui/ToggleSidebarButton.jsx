import { PiArrowCircleLeft, PiArrowCircleRight } from "react-icons/pi";
import style from "./Sidebar.module.css";
function ToggleSidebarButton({ isOpen, onClick }) {
  return (
    <button onClick={onClick} className={style.toggleButton}>
      {isOpen ? <PiArrowCircleLeft /> : <PiArrowCircleRight />}
    </button>
  );
}

export default ToggleSidebarButton;
