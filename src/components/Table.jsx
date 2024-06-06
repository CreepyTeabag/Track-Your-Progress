import { useSkills } from "../context/SkillsContext";
import AddButton from "./AddButton";
import Skill from "./Skill";

export default function Table() {
  const { skills } = useSkills();

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
        <p> </p>
      </div>
      <div className="skills-list">
        {skills.length > 0 &&
          skills.map((skill) => <Skill key={skill.id} skill={skill} />)}
        {(!skills || skills.length === 0) && (
          <div className="hint">
            Add a new skill by clicking the ➕ button below!
          </div>
        )}
      </div>
      <AddButton>➕</AddButton>
    </div>
  );
}
