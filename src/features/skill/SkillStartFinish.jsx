import style from "./SkillStartFinish.module.css";
import { useSkillWithHistory } from "./useSkillWithHistory";

function SkillStartFinish() {
  const {
    isLoading,
    skillWithHistory,
    startDate,
    finishDate,
    itemsLeft,
    isFinished,
    isStarted,
  } = useSkillWithHistory();

  if (isLoading) return;

  return (
    <div className={style.block}>
      <p>
        {isStarted ? (
          <>
            Started: <span>{startDate}</span>
          </>
        ) : (
          ""
        )}
      </p>
      {isFinished ? (
        <p>
          Finished: <span>{finishDate}</span>
        </p>
      ) : (
        <p>
          {itemsLeft} {skillWithHistory.counterWord}s left
        </p>
      )}
    </div>
  );
}

export default SkillStartFinish;
