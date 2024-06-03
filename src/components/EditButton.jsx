import { useSkills } from "../context/SkillsContext";

export default function EditButton({ children, onShowAdd, setShowEdit }) {
  const { curSkill, handleDeleteSkill } = useSkills();

  return (
    <div className="edit-skill">
      <button className="button button-big" onClick={onShowAdd}>
        {children}
      </button>
      <button
        className="button button-big danger"
        onClick={(e) => {
          e.preventDefault();
          handleDeleteSkill(curSkill);
          setShowEdit(false);
        }}
      >
        Delete
      </button>
    </div>
  );
}
