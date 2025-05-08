import ProgressBar from "./ProgressBar";
import style from "./SkillProgress.module.css";

function SkillProgress({ isStarted, isFinished, progress, size }) {
  return (
    <div>
      {!isFinished && isStarted && (
        <>
          <span className={style.largeText}>#{progress}</span> of {size}
        </>
      )}
      <ProgressBar progress={progress} size={size} />
    </div>
  );
}

export default SkillProgress;
