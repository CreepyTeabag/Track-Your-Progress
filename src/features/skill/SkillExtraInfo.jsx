import SkillHistory from "./SkillHistory";
import SkillNotes from "./SkillNotes";
import SkillStartFinish from "./SkillStartFinish";
import style from "./SkillExtraInfo.module.css";

function SkillExtraInfo() {
  return (
    <div className={style.wrapper}>
      <SkillStartFinish />
      <SkillHistory />
      <SkillNotes />
    </div>
  );
}

export default SkillExtraInfo;
