import ProgressBar from "./ProgressBar";
import style from "./SkillProgress.module.css";
import { useSkillWithHistory } from "./useSkillWithHistory";

function SkillProgress() {
  const { skillWithHistory, isFinished, isStarted, progress } =
    useSkillWithHistory();

  return (
    <div className={style.skillProgress}>
      {!isFinished && isStarted && (
        <>
          On {skillWithHistory.counterWord}{" "}
          <span className={style.largeText}>#{progress}</span> of{" "}
          {skillWithHistory.size}
        </>
      )}
      <ProgressBar />
    </div>
  );
}

export default SkillProgress;
