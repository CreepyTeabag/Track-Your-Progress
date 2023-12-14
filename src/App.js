import { useState } from "react";
import logo from "./logo.svg";

const initialSkills = [
  {
    name: "JS course",
    type: "course",
    currentProgress: 15,
    size: 20,
    history: [{ date: "2023-12-14T16:31:09.477Z", progress: 10 }],
  },
  {
    name: "HTML + CSS course",
    type: "course",
    currentProgress: 30,
    size: 30,
    history: [
      { date: "2022-11-10T21:00:00.000Z", progress: 10 },
      { date: "2022-10-14T21:00:00.000Z", progress: 30 },
    ],
  },
  {
    name: "Typescript",
    type: "book",
    currentProgress: 0,
    size: 276,
    history: [],
  },
  {
    name: "Touch typing. English",
    type: "skill",
    currentProgress: 204,
    size: 685,
    history: [{ date: "2023-12-14T16:31:09.477Z", progress: 204 }],
  },
];

function App() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [curSkill, setCurSkill] = useState(null);

  function handleShowUpdate(skill) {
    setCurSkill(skill);
    setShowUpdate(true);
  }

  function handleShowHistory(skill) {
    setCurSkill(skill);
    setShowHistory(true);
  }

  return (
    <div className="App">
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
        {initialSkills.map((skill) => (
          <Skill
            skill={skill}
            onShowUpdate={handleShowUpdate}
            onShowHistory={handleShowHistory}
          />
        ))}
      </div>
      {showUpdate && <Update name={curSkill.name} />}
      {showHistory && <History skill={curSkill} />}
    </div>
  );
}

function Skill({ skill, onShowUpdate, onShowHistory }) {
  const percentage = Math.round((skill.currentProgress / skill.size) * 100);
  return (
    <ul className="line">
      <li>
        <button className="button-small" onClick={() => onShowUpdate(skill)}>
          ➕
        </button>
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

function Update({ name }) {
  return (
    <form className="update">
      <h3>Update progress on {name}</h3>

      <label>What page are you on?</label>
      <input type="text" className="input" />

      <button className="button-big">Update</button>
    </form>
  );
}

function History({ skill }) {
  return (
    <div className="history">
      <h3>Progress history of {skill.name}</h3>

      {skill.history.map((day) => (
        <div className="day">
          <div className="date">
            {day.date}
            {day.date}
          </div>
          <hr />
          <div className="amount">{day.progress}</div>
        </div>
      ))}

      <button className="button-big">Close</button>
    </div>
  );
}

export default App;
