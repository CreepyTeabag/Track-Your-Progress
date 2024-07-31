import style from "./SkillStartFinish.module.css";

function SkillStartFinish() {
  const startDate = "12.03.2024";
  const finishDate = "23.07.2024";
  const isFinished = false;
  const itemsLeft = 95;
  const counterWord = "lesson";

  return (
    <div className={style.block}>
      <p>
        Started: <span>{startDate}</span>
      </p>
      {isFinished ? (
        <p>
          Finished: <span>{finishDate}</span>
        </p>
      ) : (
        <p>
          {itemsLeft} {counterWord} left
        </p>
      )}
    </div>
  );
}

export default SkillStartFinish;
