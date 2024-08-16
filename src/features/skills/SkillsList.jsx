import style from "./SkillsList.module.css";
import PageHeader from "../../ui/PageHeader";
import Search from "./Search";
import NewItemButton from "./NewItemButton";
import FilterSkills from "./FilterSkills";
import SortSkills from "./SortSkills";
import CardList from "./CardList";

function SkillsList() {
  return (
    <div className={style.page}>
      <PageHeader className={style.header}>Your Skills</PageHeader>
      <Search />
      <NewItemButton />
      <FilterSkills />
      <SortSkills />
      <CardList />
    </div>
  );
}

export default SkillsList;
