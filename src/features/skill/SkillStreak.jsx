import { PiFire, PiFireFill } from "react-icons/pi";
import style from "./SkillStreak.module.css";
import { useSkillWithHistory } from "./useSkillWithHistory";

function SkillStreak() {
  const { practicedToday } = useSkillWithHistory();
  const currentStreak = "todo";
  const longestStreak = "todo";

  return (
    <div className={style.wrapper}>
      <div className={`${style.icon} ${practicedToday ? "done" : ""}`}>
        {practicedToday ? <PiFireFill /> : <PiFire />}
      </div>
      <p className={style.streak}>
        Streak: {currentStreak}{" "}
        {practicedToday ? (
          ""
        ) : (
          <span className={style.small}>Don't forget to practice today!</span>
        )}
      </p>
      <p className={style.longest}>Longest streak: {longestStreak}</p>
    </div>
  );
}

export default SkillStreak;
