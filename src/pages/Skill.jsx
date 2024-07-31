import SkillExtraInfo from "../features/skill/SkillExtraInfo";
import SkillStats from "../features/skill/SkillStats";
import SkillMainInfo from "../features/skill/SkillMainInfo";
import style from "./Skill.module.css";

function Skill() {
  return (
    <div className={style.page}>
      <SkillMainInfo />
      <SkillExtraInfo />
      <SkillStats />
    </div>
  );
}

export default Skill;
