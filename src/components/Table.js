import AddButton from "./AddButton";
import Skill from "./Skill";

export default function Table({
  skills,
  handleShowUpdate,
  handleShowHistory,
  handleShowAdd,
}) {
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
      <AddButton onShowAdd={handleShowAdd}>➕</AddButton>
    </div>
  );
}
