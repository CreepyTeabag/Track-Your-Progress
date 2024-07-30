import { useState } from "react";
import NewSkill from "./NewSkill";
import EditSkill from "./EditSkill";
import Table from "./Table";
import Update from "./Update";
import History from "./History";
import ThemeButton from "./ThemeButton";
import { useSkills } from "../context/SkillsContext";

const initialTypes = [
  { typeName: "book 📔", counterWord: "page" },
  { typeName: "course 🧐", counterWord: "lecture" },
  { typeName: "skill 💪", counterWord: "level" },
];

function App() {
  const { isShowUpdate, isShowHistory, isShowAdd, isShowEdit } = useSkills();

  const [isDark, setIsDark] = useState(false);

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

export default App;
