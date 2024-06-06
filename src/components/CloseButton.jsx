import { useSkills } from "../context/SkillsContext";

export default function CloseButton() {
  const { handleCloseAllModals } = useSkills();

  return (
    <span className="button button-close" onClick={handleCloseAllModals}>
      ×
    </span>
  );
}
