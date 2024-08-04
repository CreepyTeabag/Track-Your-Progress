import Loader from "../../ui/Loader";
import SkillMainInfo from "./SkillMainInfo";
import SkillExtraInfo from "./SkillExtraInfo";
import SkillStats from "./SkillStats";
import style from "./SkillDetail.module.css";

import { useSkillWithHistory } from "./useSkillWithHistory";

function SkillDetail() {
  const { isLoading } = useSkillWithHistory();

  if (isLoading) return <Loader />;

  return (
    <div className={style.page}>
      <SkillMainInfo />
      <SkillExtraInfo />
      <SkillStats />
    </div>
  );
}

export default SkillDetail;
