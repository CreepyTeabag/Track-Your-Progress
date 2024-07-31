import SkillName from "./SkillName";
import SkillProgress from "./SkillProgress";
import SkillTags from "./SkillTags";
import UpdateSkillButton from "./UpdateSkillButton";
import style from "./SkillMainInfo.module.css";
import SkillStreak from "./SkillStreak";
import { useSkill } from "./useSkill";

function SkillMainInfo() {
  const skillId = useSkill();

  console.log(skillId);
  const skillName = "TypeScript";
  const isStarted = true;
  const isFinished = false;
  const tags = [
    {
      name: "TypeScript",
      color: "blue",
    },
    {
      name: "course",
      color: "yellow",
    },
    {
      name: "abandoned",
      color: "red",
    },
  ];

  return (
    <div className={style.mainInfo}>
      <SkillName>{skillName}</SkillName>
      {!isFinished && <UpdateSkillButton />}
      <SkillProgress isFinished={isFinished} />
      <SkillTags tags={tags} />
      {isStarted && !isFinished && <SkillStreak />}
    </div>
  );
}

export default SkillMainInfo;
