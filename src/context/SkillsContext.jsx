const { createContext, useContext, useState } = require("react");

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

const SkillsContext = createContext();

function SkillsProvider({ children }) {
  const [skills, setSkills] = useState(initialSkills);
  const [curSkill, setCurSkill] = useState(null);
  const [editedSkill, setEditedSkill] = useState(null);

  function handleUpdate(update) {
    const date = new Date();

    setSkills((prev) =>
      prev.map((skill) =>
        skill.id === curSkill.id
          ? {
              ...skill,
              currentProgress: update,
              history: [...skill.history, { date: date, progress: update }],
            }
          : skill
      )
    );

    setCurSkill(null);
  }

  function handleAddSkill(newSkill) {
    setSkills((skills) => [...skills, newSkill]);
  }

  function handleEditSkill(editedSkill) {
    setSkills((prevSkills) =>
      prevSkills.map((prevSkill) =>
        prevSkill.id === editedSkill.id
          ? { ...prevSkill, ...editedSkill }
          : prevSkill
      )
    );
  }

  function handleDeleteSkill(deletedSkill) {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill.id !== deletedSkill.id)
    );
    setCurSkill(null);
  }

  return (
    <SkillsContext.Provider
      value={{
        skills,
        setSkills,
        curSkill,
        setCurSkill,
        editedSkill,
        setEditedSkill,
        handleUpdate,
        handleAddSkill,
        handleEditSkill,
        handleDeleteSkill,
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
}

function useSkills() {
  const context = useContext(SkillsContext);
  if (context === undefined)
    throw new Error("SkillsContext was used outside of SkillsProvider");
  return context;
}

export { SkillsProvider, useSkills };
