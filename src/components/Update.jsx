import { useCallback, useState } from "react";
import CloseButton from "./CloseButton";
import { useSkills } from "../context/SkillsContext";

export default function Update({
  onShowUpdate,
  setShowUpdate,
  setShowHistory,
}) {
  const [currentProgress, setCurrentProgress] = useState("");

  const { curSkill, handleUpdate } = useSkills();

  const handleSubmit = useCallback(() => {
    const updatedProgress = Number(currentProgress);

    if (updatedProgress <= curSkill.currentProgress) {
      alert(
        `You can't set progress below its current value (${curSkill.counterWord} ${curSkill.currentProgress})`
      );
      return;
    }

    if (updatedProgress > curSkill.size) {
      alert(
        `You can't set progress above its size (${curSkill.size} ${curSkill.counterWord}s)`
      );
      return;
    }

    handleUpdate(updatedProgress);
    setShowUpdate(false);
    setShowHistory(false);
  }, [
    currentProgress,
    curSkill.currentProgress,
    curSkill.size,
    curSkill.counterWord,
    handleUpdate,
    setShowUpdate,
    setShowHistory,
  ]);

  return (
    <>
      <div className="popup">
        <CloseButton onClose={() => onShowUpdate(curSkill)}></CloseButton>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
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
