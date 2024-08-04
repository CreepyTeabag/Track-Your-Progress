import style from "./Loader.module.css";

function Loader() {
  return (
    <div className={style.wrapper}>
      <span className={style.loader}></span>
    </div>
  );
}

export default Loader;
