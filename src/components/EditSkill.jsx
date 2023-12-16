import { useState } from "react";
import AddButton from "./AddButton";

export default function EditSkill({ types, onAddNew }) {
  const [newSkill, setNewSkill] = useState({
    name: "",
    type: "book 📔",
    counterWord: "page",
    currentProgress: 0,
    size: 0,
    history: [],
  });

  return (
    <div className="table">
      <form
        className="form new-skill"
        onSubmit={(e) => {
          e.preventDefault();
          if (!newSkill.name || !newSkill.size) {
            return;
          }

          onAddNew(newSkill);
        }}
      >
        <h3>✏️ Edit</h3>

        <label>Name ({newSkill.name}):</label>
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
          onChange={(e) =>
            setNewSkill({ ...newSkill, size: Number(e.target.value) })
          }
        />
        <AddButton>Apply changes</AddButton>
      </form>
    </div>
  );
}
