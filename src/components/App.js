import { useState } from "react";
import NewSkill from "./NewSkill";
import Table from "./Table";
import Update from "./Update";
import History from "./History";
import ThemeButton from "./ThemeButton";

const initialSkills = [
  {
    name: "JS course",
    type: "course 🧐",
    counterWord: "lecture",
    currentProgress: 15,
    size: 20,
    history: [{ date: "2023-12-14T16:31:09.477Z", progress: 10 }],
  },
  {
    name: "HTML + CSS course",
    type: "course 🧐",
    counterWord: "lecture",
    currentProgress: 30,
    size: 30,
    history: [
      { date: "2022-11-10T21:00:00.000Z", progress: 10 },
      { date: "2022-10-14T21:00:00.000Z", progress: 30 },
    ],
  },
  {
    name: "Typescript",
    type: "book 📔",
    counterWord: "page",
    currentProgress: 0,
    size: 276,
    history: [],
  },
  {
    name: "Touch typing. English",
    type: "skill 💪",
    counterWord: "level",
    currentProgress: 204,
    size: 685,
    history: [{ date: "2023-12-14T16:31:09.477Z", progress: 204 }],
  },
];

const initialTypes = [
  { typeName: "book 📔", counterWord: "page" },
  { typeName: "course 🧐", counterWord: "lecture" },
  { typeName: "skill 💪", counterWord: "level" },
];

function App() {
  const [skills, setSkills] = useState(initialSkills);
  const [types, setTypes] = useState(initialTypes);

  const [showUpdate, setShowUpdate] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const [curSkill, setCurSkill] = useState(null);

  const [isDark, setIsDark] = useState(false);

  function handleShowUpdate(skill) {
    setShowHistory(false);
    setShowAdd(false);

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
    setCurSkill(null);
    setShowAdd((open) => !open);
  }

  function handleUpdate(update) {
    if (update <= curSkill.currentProgress) {
      alert(
        `You can't set progress below its current value (${curSkill.counterWord} ${curSkill.currentProgress})`
      );
      return;
    }

    if (update > curSkill.size) {
      alert(
        `You can't set progress above its size (${curSkill.size} ${curSkill.counterWord}s)`
      );
      return;
    }

    const date = new Date();

    setSkills(
      skills.map((skill) =>
        skill.name === curSkill.name
          ? {
              ...skill,
              currentProgress: update,
              history: [...skill.history, { date: date, progress: update }],
            }
          : skill
      )
    );

    setCurSkill(null);
    setShowUpdate(false);
    setShowHistory(false);
  }

  function handleAddNew(newSkill) {
    setSkills((skills) => [...skills, newSkill]);
    setShowAdd(false);
  }

  return (
    <div className={`App${isDark ? " dark" : ""}`}>
      <div className="container">
        <Table
          skills={skills}
          handleShowUpdate={handleShowUpdate}
          handleShowHistory={handleShowHistory}
          handleShowAdd={handleShowAdd}
        />

        {showUpdate && <Update skill={curSkill} onUpdate={handleUpdate} />}
        {showHistory && (
          <History skill={curSkill} onShowHistory={handleShowHistory} />
        )}
        {showAdd && <NewSkill types={types} onAddNew={handleAddNew} />}

        <ThemeButton isDark={isDark} setIsDark={setIsDark}></ThemeButton>
      </div>
    </div>
  );
}

export default App;
