import { useState } from "react";
import AddButton from "./AddButton";
import CloseButton from "./CloseButton";
import { useSkills } from "../context/SkillsContext";

export default function NewSkill({ types }) {
  const [newSkill, setNewSkill] = useState({
    id: new Date().valueOf(),
    name: "",
    type: "book 📔",
    counterWord: "page",
    currentProgress: 0,
    size: 0,
    history: [],
  });

  const { handleAddSkill, handleCloseAllModals } = useSkills();

  return (
    <>
      <div className="block popup">
        <CloseButton />
        <form
          className="form new-skill"
          onSubmit={(e) => {
            e.preventDefault();
            if (!newSkill.name || !newSkill.size) {
              return;
            }

            handleAddSkill(newSkill);
            handleCloseAllModals();
          }}
        >
          <h3>➕ Add</h3>

          <label>Name:</label>
          <input
            type="text"
            className="input"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          />

          <label>Type:</label>
          <select
            className="input"
            value={newSkill.type}
            onChange={(e) => {
              const [{ counterWord }] = types.filter(
                (type) => type.typeName === e.target.value
              );
              setNewSkill({
                ...newSkill,
                type: e.target.value,
                counterWord: counterWord,
              });
            }}
          >
            {types.map((type) => (
              <option key={type.typeName}>{type.typeName}</option>
            ))}
          </select>

          <label>
            Size{newSkill.counterWord && <> (in {newSkill.counterWord}s)</>}:
          </label>
          <input
            type="text"
            className="input"
            value={newSkill.size}
            onChange={(e) => {
              if (!isNaN(e.target.value)) {
                setNewSkill({ ...newSkill, size: Number(e.target.value) });
              }
            }}
          />
          <AddButton>Add to the list</AddButton>
        </form>
      </div>
      <div className="popup-blocker" onClick={handleCloseAllModals}></div>
    </>
  );
}
