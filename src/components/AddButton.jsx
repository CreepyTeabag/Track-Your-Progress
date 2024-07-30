import { useSkills } from "../context/SkillsContext";

export default function AddButton({ children }) {
  const { handleShowAdd } = useSkills();

  return (
    <div className="add-skill">
      <button className="button button-big" onClick={handleShowAdd}>
        {children}
      </button>
    </div>
  );
}
