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

  const searchQuery = searchParams.get("search") || "";

  const finalSkillsList = searchQuery
    ? sortedSkillsList.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : sortedSkillsList;

  return (
    <div className={style.list}>
      {finalSkillsList.length > 0 ? (
        finalSkillsList.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))
      ) : (
        <div className={style.emptyList}>
          <span className={style.emptyText}>Nothing found</span>
        </div>
      )}
    </div>
  );
}

export default CardList;
