import Loader from "../../ui/Loader";
import SkillCard from "./SkillCard";
import style from "./CardList.module.css";
import { useSkillsList } from "./useSkillsList";
import { useSearchParams } from "react-router-dom";
import { skillSortRules } from "../../utils/constants";

function CardList() {
  const { isLoading, skillsList } = useSkillsList();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Loader />;

  const sortBy = searchParams.get("sortBy") || "last-activity";
  const sortedSkillsList = skillsList.sort(skillSortRules[sortBy]);

  console.log("skillsList", skillsList);
  return (
    <div className={style.list}>
      {sortedSkillsList.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
}

export default CardList;
