import { useState } from "react";
import { PiArrowDownBold, PiArrowUpBold } from "react-icons/pi";
import style from "./AccordionSimple.module.css";

function AccordionSimple({
  defaultOpen = false,
  heading,
  className = "",
  children,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${style.accordion} ${isOpen ? "open" : ""} ${className}`}>
      <button className={style.button} onClick={() => setIsOpen(!isOpen)}>
        <h2 className={style.heading}>{heading}</h2>
        <div className={style.icon}>
          {isOpen ? <PiArrowUpBold /> : <PiArrowDownBold />}
        </div>
      </button>
      {isOpen && <div className={style.content}>{children}</div>}
    </div>
  );
}

export default AccordionSimple;
