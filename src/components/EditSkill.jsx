import EditButton from "./EditButton";
import CloseButton from "./CloseButton";
import { useSkills } from "../context/SkillsContext";

export default function EditSkill({ types, onShowEdit, setShowEdit }) {
  const { curSkill, editedSkill, setEditedSkill, handleEditSkill } =
    useSkills();

  return (
    <>
      <div className="block popup">
        <CloseButton onClose={() => onShowEdit(curSkill)}></CloseButton>
        <form
          className="form new-skill"
          onSubmit={(e) => {
            e.preventDefault();
            handleEditSkill(editedSkill);
            setShowEdit(false);
          }}
        >
          <h3>✏️ Edit</h3>

          <label>
            Name <span>({curSkill.name})</span>:
          </label>
          <input
            type="text"
            className="input"
            value={editedSkill.name}
            onChange={(e) => {
              setEditedSkill({ ...editedSkill, name: e.target.value });
            }}
          />

          <label>
            Type <span>({curSkill.type})</span>:
          </label>
          <select
            className="input"
            value={editedSkill.type}
            onChange={(e) => {
              const [{ counterWord }] = types.filter(
                (type) => type.typeName === e.target.value
              );
              setEditedSkill({
                ...editedSkill,
                type: e.target.value,
                counterWord: counterWord,
              });
            }}
          >
            {types.map((type) => (
              <option key={type.typeName}>{type.typeName}</option>
            ))}
          </select>

          <label>Size{<span> (in {curSkill.counterWord}s)</span>}:</label>
          <input
            type="text"
            className="input"
            value={editedSkill.size}
            onChange={(e) => {
              if (!isNaN(e.target.value)) {
                setEditedSkill({
                  ...editedSkill,
                  size: Number(e.target.value),
                });
              }
            }}
          />
          <EditButton setShowEdit={setShowEdit}>Apply changes</EditButton>
        </form>
      </div>
      <div className="popup-blocker" onClick={() => onShowEdit(curSkill)}></div>
    </>
  );
}
