import { useNavigate } from "react-router-dom";
import style from "./PageNotFound.module.css";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className={style.page}>
      Page not found 🤨
      <br />
      <button className={style.button} onClick={() => navigate(-1)}>
        Go back!
      </button>
    </div>
  );
}

export default PageNotFound;
