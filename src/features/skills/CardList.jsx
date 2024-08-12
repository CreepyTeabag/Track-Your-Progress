import Loader from "../../ui/Loader";
import SkillCard from "./SkillCard";
import style from "./CardList.module.css";
import { useSkillsList } from "./useSkillsList";
import { parseISO } from "date-fns";

function CardList() {
  const { isLoading, skillsList } = useSkillsList();

  if (isLoading) return <Loader />;

  console.log("skillsList", skillsList);
  return (
    <div className={style.list}>
      {skillsList
        .sort((a, b) => parseISO(b.lastActivity) - parseISO(a.lastActivity))
        .map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
    </div>
  );
}

export default CardList;
