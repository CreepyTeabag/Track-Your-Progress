import { useState } from "react";
import AddButton from "./AddButton";
import Sort from "./Sort";
import Skill from "./Skill";

export default function Table({
  skills,
  handleShowUpdate,
  handleShowHistory,
  handleShowAdd,
  handleShowEdit,
}) {
  const [sortedSkills, setSortedSkills] = useState(skills);

  function handleSortedSkills(newSortedSkills) {
    setSortedSkills((sortedSkills) => newSortedSkills);
  }

  return (
    <div className="block">
      <div className="header">
        <p> </p>
        <p>Name</p>
        <p>Type</p>
        <p>Currently on</p>
        <p>Size</p>
        <p>Progress Bar</p>
        <p> </p>
        <Sort onSort={handleSortedSkills} />
      </div>
      <div className="skills-list">
        {sortedSkills.length > 0 &&
          sortedSkills.map((skill) => (
            <Skill
              key={skill.name}
              skill={skill}
              onShowUpdate={handleShowUpdate}
              onShowHistory={handleShowHistory}
              onShowEdit={handleShowEdit}
            />
          ))}
        {(!sortedSkills || sortedSkills.length === 0) && (
          <div className="hint">
            Add a new skill by clicking the ➕ button below!
          </div>
        )}
      </div>
      <AddButton onShowAdd={handleShowAdd}>➕</AddButton>
    </div>
  );
}
