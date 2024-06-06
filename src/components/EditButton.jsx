import { useCallback } from "react";
import { useSkills } from "../context/SkillsContext";

export default function EditButton({ children, onShowAdd, setShowEdit }) {
  const { curSkill, handleDeleteSkill } = useSkills();

  const onDeleteSkill = useCallback(() => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${curSkill.name}"? This action is irreversible!`
    );
    if (!confirmed) return;

    handleDeleteSkill(curSkill);
    setShowEdit(false);
  }, [handleDeleteSkill, curSkill, setShowEdit]);

  return (
    <div className="edit-skill">
      <button className="button button-big" onClick={onShowAdd}>
        {children}
      </button>
      <button
        className="button button-big danger"
        onClick={(e) => {
          e.preventDefault();
          onDeleteSkill();
        }}
      >
        Delete
      </button>
    </div>
  );
}
