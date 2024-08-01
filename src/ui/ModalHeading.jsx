import style from "./ModalHeading.module.css";

function ModalHeading({ children }) {
  return <h3 className={style.heading}>{children}</h3>;
}

export default ModalHeading;
