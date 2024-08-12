import style from "./SkillsList.module.css";
import PageHeader from "../../ui/PageHeader";
import Search from "./Search";
import NewItem from "./NewItem";
import FilterSkills from "./FilterSkills";
import SortSkills from "./SortSkills";
import CardList from "./CardList";

function SkillsList() {
  return (
    <div className={style.page}>
      <PageHeader className={style.header}>Your Skills</PageHeader>
      <Search />
      <NewItem />
      <FilterSkills />
      <SortSkills />
      <CardList />
    </div>
  );
}

export default SkillsList;
