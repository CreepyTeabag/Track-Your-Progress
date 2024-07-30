import EditSkill from "../components/EditSkill";
import History from "../components/History";
import NewSkill from "../components/NewSkill";
import Table from "../components/Table";
import Update from "../components/Update";
import { useSkills } from "../context/SkillsContext";

const initialTypes = [
  { typeName: "book 📔", counterWord: "page" },
  { typeName: "course 🧐", counterWord: "lecture" },
  { typeName: "skill 💪", counterWord: "level" },
];

function Skills() {
  const { isShowUpdate, isShowHistory, isShowAdd, isShowEdit } = useSkills();

  return (
    <div className="App">
      <div className="container">
        <Table />

        {isShowUpdate && <Update />}
        {isShowHistory && <History />}
        {isShowAdd && <NewSkill types={initialTypes} />}
        {isShowEdit && <EditSkill types={initialTypes} />}
      </div>
    </div>
  );
}

export default Skills;
