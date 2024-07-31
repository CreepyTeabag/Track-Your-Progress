import { PiTrendUp } from "react-icons/pi";
import style from "./UpdateSkillButton.module.css";

function UpdateSkillButton() {
  return (
    <button className={style.update}>
      <PiTrendUp />
    </button>
  );
}

export default UpdateSkillButton;
