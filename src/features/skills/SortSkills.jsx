import { PiSortAscending } from "react-icons/pi";
import Select from "../../ui/Select";
import { sortSkillsOptions } from "../../utils/constants";
import style from "./SortSkills.module.css";

function SortSkills() {
  return (
    <div className={style.sort}>
      <PiSortAscending />
      <Select options={sortSkillsOptions} filterField="sortBy" />
    </div>
  );
}

export default SortSkills;
