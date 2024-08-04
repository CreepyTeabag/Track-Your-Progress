import style from "./SkillName.module.css";
import { useSkillWithHistory } from "./useSkillWithHistory";

function SkillName() {
  const { skillWithHistory } = useSkillWithHistory();

  return <h1 className={style.name}>{skillWithHistory.name}</h1>;
}

export default SkillName;
