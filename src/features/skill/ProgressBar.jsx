import { PiMedal } from "react-icons/pi";
import style from "./ProgressBar.module.css";

function ProgressBar({ progress, size }) {
  let percentage = (progress / size) * 100;
  if (percentage > 0 && percentage < 1) percentage = 1;
  else percentage = Math.floor(percentage);

  return (
    <>
      {percentage === 100 && (
        <>
          <p className={style.text}>
            Finished{" "}
            <div className={style.icon}>
              <PiMedal />
            </div>
          </p>
        </>
      )}
      {percentage === 0 && <p className={style.text}>Not started yet</p>}
      {percentage > 0 && percentage < 100 && (
        <div className={style.container}>
          <div className="progress">
            <div
              className="percentage"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className={style.text}>{percentage}%</p>
        </div>
      )}
    </>
  );
}

export default ProgressBar;
