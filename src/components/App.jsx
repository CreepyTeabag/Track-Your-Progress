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
  const { curSkill, setCurSkill, setEditedSkill } = useSkills();

  const [showUpdate, setShowUpdate] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [isDark, setIsDark] = useState(false);

  function handleShowUpdate(skill) {
    setShowHistory(false);
    setShowAdd(false);
    setShowEdit(false);

    if (curSkill === null || curSkill.name !== skill.name) {
      setCurSkill(skill);
      setShowUpdate(true);
    } else {
      setShowUpdate((open) => !open);
    }
  }

  function handleShowHistory(skill) {
    setShowUpdate(false);
    setShowAdd(false);
    setShowEdit(false);

    if (curSkill === null || curSkill.name !== skill.name) {
      setCurSkill(skill);
      setShowHistory(true);
    } else {
      setShowHistory((open) => !open);
    }
  }

  function handleShowAdd() {
    setShowUpdate(false);
    setShowHistory(false);
    setShowEdit(false);
    setCurSkill(null);
    setShowAdd((open) => !open);
  }

  function handleShowEdit(skill) {
    setShowUpdate(false);
    setShowHistory(false);
    setShowAdd(false);
    setEditedSkill(skill);

    if (curSkill === null || curSkill.name !== skill.name) {
      setCurSkill(skill);
      setShowEdit(true);
    } else {
      setShowEdit((open) => !open);
    }
  }

  return (
    <div className={`App${isDark ? " dark" : ""}`}>
      <div className="container">
        <Table
          handleShowUpdate={handleShowUpdate}
          handleShowHistory={handleShowHistory}
          handleShowAdd={handleShowAdd}
          handleShowEdit={handleShowEdit}
        />

        {showUpdate && (
          <Update
            setShowUpdate={setShowUpdate}
            setShowHistory={setShowHistory}
            onShowUpdate={handleShowUpdate}
          />
        )}
        {showHistory && <History onShowHistory={handleShowHistory} />}
        {showAdd && (
          <NewSkill
            types={initialTypes}
            onShowAdd={handleShowAdd}
            setShowAdd={setShowAdd}
          />
        )}

        {showEdit && (
          <EditSkill
            types={initialTypes}
            onShowEdit={handleShowEdit}
            setShowEdit={setShowEdit}
          />
        )}

        <ThemeButton isDark={isDark} setIsDark={setIsDark}></ThemeButton>
      </div>
    </div>
  );
}

export default App;
