import PageHeader from "../../ui/PageHeader";
import style from "./SkillName.module.css";
import { useSkillWithHistory } from "./useSkillWithHistory";

function SkillName() {
  const { skillWithHistory } = useSkillWithHistory();

  return (
    <PageHeader className={style.name}>{skillWithHistory.name}</PageHeader>
  );
}

export default SkillName;
