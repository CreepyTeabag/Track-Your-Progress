import { useState } from "react";
import ClosePopup from "./ClosePopup";

export default function Update({ skill, onUpdate }) {
  const [currentProgress, setCurrentProgress] = useState("");

  return (
    <>
      <div className="popup">
        <ClosePopup></ClosePopup>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            onUpdate(Number(currentProgress));
          }}
        >
          <h3>📈 Update progress on {skill.name}</h3>

          <label>What {skill.counterWord} are you on?</label>
          <input
            type="text"
            className="input"
            value={currentProgress}
            onChange={(e) => setCurrentProgress(e.target.value)}
          />

          <button className="button button-big">Update</button>
        </form>
      </div>
      <div className="popup-blocker"></div>
    </>
  );
}
