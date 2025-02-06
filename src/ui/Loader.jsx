import style from "./Loader.module.css";

function Loader({ size }) {
  return (
    <div className={`${style.wrapper} ${size === "tiny" ? style.tiny : ""}`}>
      <span className={style.loader}></span>
    </div>
  );
}

export default Loader;
