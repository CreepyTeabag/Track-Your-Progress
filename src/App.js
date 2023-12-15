import { useState } from "react";
import logo from "./logo.svg";

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
  const [curSkill, setCurSkill] = useState(null);

  function handleShowUpdate(skill) {
    setShowHistory(false);
    if (curSkill === null || curSkill.name !== skill.name) {
      setCurSkill(skill);
      setShowUpdate(true);
    } else {
      setShowUpdate((open) => !open);
    }
  }

  function handleShowHistory(skill) {
    setShowUpdate(false);
    if (curSkill === null || curSkill.name !== skill.name) {
      setCurSkill(skill);
      setShowHistory(true);
    } else {
      setShowHistory((open) => !open);
    }
  }

  function handleUpdate(update) {
    if (update <= curSkill.currentProgress) {
      alert(
        `You can't set progress below its current value (${curSkill.counterWord} ${curSkill.currentProgress})`
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

  return (
    <div className="App">
      <Table
        skills={skills}
        handleShowUpdate={handleShowUpdate}
        handleShowHistory={handleShowHistory}
      />
      {showUpdate && <Update skill={curSkill} onUpdate={handleUpdate} />}
      {showHistory && (
        <History skill={curSkill} onShowHistory={handleShowHistory} />
      )}
      <NewSkill types={types} />
    </div>
  );
}

function AddButton() {
  return (
    <div className="add-skill">
      <button className="button-big">➕</button>
    </div>
  );
}

function NewSkill({ types }) {
  return (
    <div className="table">
      <form className="new-skill">
        <h3>➕ Add</h3>

        <label>Name:</label>
        <input type="text" className="input" />

        <label>Type:</label>
        <select className="input">
          {types.map((type) => (
            <option>{type.typeName}</option>
          ))}
        </select>

        <label>Size (in pages):</label>
        <input type="text" className="input" />
      </form>
      <AddButton />
    </div>
  );
}

function Table({ skills, handleShowUpdate, handleShowHistory }) {
  return (
    <div className="table">
      <div className="header">
        <p> </p>
        <p>Name</p>
        <p>Type</p>
        <p>Current Progress</p>
        <p>Size</p>
        <p>Progress Bar</p>
        <p> </p>
      </div>
      {skills.map((skill) => (
        <Skill
          key={skill.name}
          skill={skill}
          onShowUpdate={handleShowUpdate}
          onShowHistory={handleShowHistory}
        />
      ))}
      <AddButton />
    </div>
  );
}

function Skill({ skill, onShowUpdate, onShowHistory }) {
  let percentage = (skill.currentProgress / skill.size) * 100;
  if (percentage > 100) percentage = 100;
  if (percentage > 0 && percentage < 1) percentage = 1;
  else percentage = Math.round(percentage);
  return (
    <ul className="line">
      <li>
        {percentage < 100 ? (
          <button className="button-small" onClick={() => onShowUpdate(skill)}>
            📈
          </button>
        ) : (
          <button className="button-small" disabled>
            ✅
          </button>
        )}
      </li>
      <li>{skill.name}</li>
      <li>{skill.type}</li>
      <li>{skill.currentProgress}</li>
      <li>{skill.size}</li>
      <li>
        {percentage === 100 && "Finished 🎉"}
        {percentage === 0 && "Not started yet"}
        {percentage > 0 && percentage < 100 && (
          <>
            {percentage}%
            <div className="progress">
              <div
                className="percentage"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </>
        )}
      </li>
      <li>
        <button className="button-small" onClick={() => onShowHistory(skill)}>
          📃
        </button>
      </li>
    </ul>
  );
}

function Update({ skill, onUpdate }) {
  const [curProgress, setCurProgress] = useState("");

  return (
    <form
      className="update"
      onSubmit={(e) => {
        e.preventDefault();
        onUpdate(Number(curProgress));
      }}
    >
      <h3>📈 Update progress on {skill.name}</h3>

      <label>What page are you on?</label>
      <input
        type="text"
        className="input"
        value={curProgress}
        onChange={(e) => setCurProgress(e.target.value)}
      />

      <button className="button-big">Update</button>
    </form>
  );
}

function History({ skill, onShowHistory }) {
  return (
    <div className="history">
      <h3>📃 Progress history of {skill.name}</h3>

      {skill.history.length === 0 && <div>Nothing here yet...</div>}

      {skill.history.length > 0 &&
        skill.history.map((day, i) => {
          const date = new Date(day.date).toLocaleDateString();
          return (
            <div className="day" key={`${date}_${i}`}>
              <div className="date">{date}</div>
              <hr />
              <div className="amount">
                {skill.counterWord} #{day.progress}
              </div>
            </div>
          );
        })}

      <button className="button-big" onClick={() => onShowHistory(skill)}>
        Close
      </button>
    </div>
  );
}

export default App;
