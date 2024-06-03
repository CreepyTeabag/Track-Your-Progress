import { useState } from "react";
import CloseButton from "./CloseButton";
import { useSkills } from "../context/SkillsContext";

export default function Update({
  onShowUpdate,
  setShowUpdate,
  setShowHistory,
}) {
  const [currentProgress, setCurrentProgress] = useState("");

  const { curSkill, handleUpdate } = useSkills();

  return (
    <>
      <div className="popup">
        <CloseButton onClose={() => onShowUpdate(curSkill)}></CloseButton>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(Number(currentProgress));
            setShowUpdate(false);
            setShowHistory(false);
          }}
        >
          <h3>📈 Update progress on {curSkill.name}</h3>

          <label>What {curSkill.counterWord} are you on?</label>
          <input
            type="text"
            className="input"
            value={currentProgress}
            onChange={(e) => {
              if (!isNaN(e.target.value)) {
                setCurrentProgress(e.target.value);
              }
            }}
          />

          <button className="button button-big">Update</button>
        </form>
      </div>
      <div
        className="popup-blocker"
        onClick={() => onShowUpdate(curSkill)}
      ></div>
    </>
  );
}
