import { useState } from "react";
import AddButton from "./AddButton";

export default function NewSkill({ types, onAddNew }) {
  const [newSkill, setNewSkill] = useState({
    name: "",
    type: "book 📔",
    counterWord: "",
    currentProgress: 0,
    size: 0,
    history: [],
  });

  // const [{ typeName, counterWord }] = types.filter(
  //   (type) => type.typeName === newSkill.type
  // );

  // console.log(typeName);
  // console.log(counterWord);

  return (
    <div className="table">
      <form className="new-skill" onSubmit={(e) => onAddNew(e)}>
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
            const [{ typeName, counterWord }] = types.filter(
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
        <input type="text" className="input" />
        <AddButton>Add to the list</AddButton>
      </form>
    </div>
  );
}