import AccordionSimple from "../../ui/AccordionSimple";
import style from "./SkillHistory.module.css";

function SkillHistory() {
  const date = "12.03.2024";
  const counterWord = "lesson";
  const progress = 10;
  const hasHistory = true;

  return (
    <AccordionSimple
      defaultOpen={true}
      heading="History"
      className={style.history}
    >
      <div className={style.content}>
        {hasHistory ? (
          <>
            <div className={style.day}>
              <div className={style.date}>{date}</div>
              <hr />
              <div className={style.amount}>
                {counterWord} #{progress}
              </div>
            </div>
            <div className={style.day}>
              <div className={style.date}>{date}</div>
              <hr />
              <div className={style.amount}>
                {counterWord} #{progress}
              </div>
            </div>
            <div className={style.day}>
              <div className={style.date}>{date}</div>
              <hr />
              <div className={style.amount}>
                {counterWord} #{progress}
              </div>
            </div>
            <div className={style.day}>
              <div className={style.date}>{date}</div>
              <hr />
              <div className={style.amount}>
                {counterWord} #{progress}
              </div>
            </div>
          </>
        ) : (
          "Nothing here yet..."
        )}
      </div>
    </AccordionSimple>
  );
}

export default SkillHistory;
