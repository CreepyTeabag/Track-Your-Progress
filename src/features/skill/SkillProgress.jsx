import ProgressBar from "./ProgressBar";
import style from "./SkillProgress.module.css";

function SkillProgress({ isFinished }) {
  const counterWord = "lesson";
  const progress = 5;
  const size = 100;

  return (
    <div className={style.skillProgress}>
      {!isFinished && (
        <>
          On {counterWord} <span className={style.largeText}>#{progress}</span>{" "}
          of {size}
        </>
      )}
      <ProgressBar progress={progress} size={size} />
    </div>
  );
}

export default SkillProgress;
