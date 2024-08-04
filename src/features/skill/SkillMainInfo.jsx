import SkillName from "./SkillName";
import SkillProgress from "./SkillProgress";
import SkillTags from "./SkillTags";
import UpdateSkillButton from "./UpdateSkillButton";
import style from "./SkillMainInfo.module.css";
import SkillStreak from "./SkillStreak";
import { useSkillWithHistory } from "./useSkillWithHistory";

function SkillMainInfo() {
  const { isFinished, isStarted } = useSkillWithHistory();

  const tags = [
    // {
    //   name: "TypeScript",
    //   color: "blue",
    // },
    // {
    //   name: "course",
    //   color: "yellow",
    // },
    // {
    //   name: "abandoned",
    //   color: "red",
    // },
    {
      name: "todo",
      color: "red",
    },
  ];

  return (
    <div className={style.mainInfo}>
      <SkillName />
      {!isFinished && <UpdateSkillButton />}
      <SkillProgress />
      <SkillTags tags={tags} />
      {isStarted && !isFinished && <SkillStreak />}
    </div>
  );
}

export default SkillMainInfo;
