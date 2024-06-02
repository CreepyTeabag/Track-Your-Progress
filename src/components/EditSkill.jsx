import EditButton from "./EditButton";
import CloseButton from "./CloseButton";

export default function EditSkill({
  types,
  skill,
  editedSkill,
  setEditedSkill,
  onEditSkill,
  onArchiveSkill,
  onDeleteSkill,
  onShowEdit,
}) {
  return (
    <>
      <div className="block popup">
        <CloseButton onClose={() => onShowEdit(skill)}></CloseButton>
        <form
          className="form new-skill"
          onSubmit={(e) => {
            e.preventDefault();
            onEditSkill(editedSkill);
          }}
        >
          <h3>✏️ Edit</h3>

          <label>
            Name <span>({skill.name})</span>:
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
            Type <span>({skill.type})</span>:
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

          <label>Size{<span> (in {skill.counterWord}s)</span>}:</label>
          <input
            type="text"
            className="input"
            value={editedSkill.size}
            onChange={(e) => {
              console.log(e);
              if (!isNaN(e.target.value)) {
                setEditedSkill({
                  ...editedSkill,
                  size: Number(e.target.value),
                });
              }
            }}
          />
          <EditButton
            skill={skill}
            onDeleteSkill={onDeleteSkill}
            onArchiveSkill={onArchiveSkill}
          >
            Apply changes
          </EditButton>
        </form>
      </div>
      <div className="popup-blocker" onClick={() => onShowEdit(skill)}></div>
    </>
  );
}
