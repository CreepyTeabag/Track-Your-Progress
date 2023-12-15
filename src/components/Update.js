import { useState } from "react";

export default function Update({ skill, onUpdate }) {
  const [curProgress, setCurProgress] = useState("");

  return (
    <form
      className="update"
      onSubmit={(e) => {
        e.preventDefault();
        onUpdate(Number(curProgress));
      }}
    >
      <h3>📈 Update progress on {skill.name}</h3>

      <label>What page are you on?</label>
      <input
        type="text"
        className="input"
        value={curProgress}
        onChange={(e) => setCurProgress(e.target.value)}
      />

      <button className="button-big">Update</button>
    </form>
  );
}
