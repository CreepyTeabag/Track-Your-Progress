import { useState } from "react";
import NewSkill from "./NewSkill";
import EditSkill from "./EditSkill";
import Table from "./Table";
import Update from "./Update";
import History from "./History";
import ThemeButton from "./ThemeButton";

const initialSkills = [
  {
    id: 1702546292,
    name: "JS course",
    type: "course 🧐",
    counterWord: "lecture",
    currentProgress: 15,
    size: 20,
    history: [{ date: "2023-12-14T16:31:09.477Z", progress: 10 }],
  },
  {
    id: 1665725492,
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
    id: 1702703466,
    name: "Typescript",
    type: "book 📔",
    counterWord: "page",
    currentProgress: 0,
    size: 276,
    history: [],
  },
  {
    id: 1692467275,
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

  const [showUpdate, setShowUpdate] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [curSkill, setCurSkill] = useState(null);

  const [isDark, setIsDark] = useState(false);

  const [editedSkill, setEditedSkill] = useState(curSkill);

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

    if (curSkill === null || curSkill.name !== skill.name) {
      setCurSkill(skill);
      setEditedSkill(skill);
      setShowEdit(true);
    } else {
      setShowEdit((open) => !open);
    }
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

    setSkills((prev) =>
      prev.map((skill) =>
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

  function handleEditSkill(editedSkill) {
    setSkills((prevSkills) =>
      prevSkills.map((prevSkill) =>
        prevSkill.id === editedSkill.id
          ? { ...prevSkill, ...editedSkill }
          : prevSkill
      )
    );
    setShowEdit(false);
  }

  return (
    <div className={`App${isDark ? " dark" : ""}`}>
      <div className="container">
        <Table
          skills={skills}
          handleShowUpdate={handleShowUpdate}
          handleShowHistory={handleShowHistory}
          handleShowAdd={handleShowAdd}
          handleShowEdit={handleShowEdit}
        />

        {showUpdate && <Update skill={curSkill} onUpdate={handleUpdate} />}
        {showHistory && (
          <History skill={curSkill} onShowHistory={handleShowHistory} />
        )}
        {showAdd && <NewSkill types={initialTypes} onAddNew={handleAddNew} />}

        {showEdit && (
          <EditSkill
            types={initialTypes}
            skill={curSkill}
            editedSkill={editedSkill}
            setEditedSkill={setEditedSkill}
            onEditSkill={handleEditSkill}
          />
        )}

        <ThemeButton isDark={isDark} setIsDark={setIsDark}></ThemeButton>
      </div>
    </div>
  );
}

export default App;
