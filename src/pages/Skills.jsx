import EditSkill from "../components/EditSkill";
import History from "../components/History";
import NewSkill from "../components/NewSkill";
import Table from "../components/Table";
import ThemeButton from "../components/ThemeButton";
import Update from "../components/Update";
import { useSkills } from "../context/SkillsContext";

const initialTypes = [
  { typeName: "book 📔", counterWord: "page" },
  { typeName: "course 🧐", counterWord: "lecture" },
  { typeName: "skill 💪", counterWord: "level" },
];

function Skills({ isDark, setIsDark }) {
  const { isShowUpdate, isShowHistory, isShowAdd, isShowEdit } = useSkills();

  return (
    <div className={`App${isDark ? " dark" : ""}`}>
      <div className="container">
        <Table />

        {isShowUpdate && <Update />}
        {isShowHistory && <History />}
        {isShowAdd && <NewSkill types={initialTypes} />}
        {isShowEdit && <EditSkill types={initialTypes} />}

        <ThemeButton isDark={isDark} setIsDark={setIsDark}></ThemeButton>
      </div>
    </div>
  );
}

export default Skills;
