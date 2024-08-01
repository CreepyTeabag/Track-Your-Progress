import { format } from "date-fns";
import AccordionSimple from "../../ui/AccordionSimple";
import style from "./SkillHistory.module.css";
import { useSkillWithHistory } from "./useSkillWithHistory";

function SkillHistory() {
  const { isLoading, skillWithHistory, isStarted } = useSkillWithHistory();

  if (isLoading) return;

  return (
    <AccordionSimple
      defaultOpen={true}
      heading="History"
      className={style.history}
    >
      <div className={style.content}>
        {isStarted ? (
          <>
            {skillWithHistory.history.map((item) => (
              <div className={style.day}>
                <div className={style.date}>
                  {format(item.date, "d MMM  y")}
                </div>
                <hr />
                <div className={style.amount}>
                  {skillWithHistory.counterWord} #{item.progress}
                </div>
              </div>
            ))}
          </>
        ) : (
          "Nothing here yet..."
        )}
      </div>
    </AccordionSimple>
  );
}

export default SkillHistory;
