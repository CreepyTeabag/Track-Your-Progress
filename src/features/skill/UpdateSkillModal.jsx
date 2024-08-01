import ModalHeading from "../../ui/ModalHeading";
import { useSkillWithHistory } from "./useSkillWithHistory";

import style from "./UpdateSkillModal.module.css";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useCallback, useState } from "react";
import { useAddHistory } from "./useAddHistory";

function UpdateSkillModal({ onCloseModal }) {
  const [newProgress, setNewProgress] = useState(null);
  const [error, setError] = useState("");
  const { skillWithHistory, progress } = useSkillWithHistory();
  const { addHistory, isAdding } = useAddHistory();

  const handleSubmit = useCallback(() => {
    if (newProgress <= progress) {
      setError(
        `You can't set progress below its current value (${skillWithHistory.counterWord} ${progress})`
      );
      return;
    }

    if (newProgress > skillWithHistory.size) {
      setError(
        `You can't set progress above its size (${skillWithHistory.size} ${skillWithHistory.counterWord}s)`
      );
      return;
    }

    if (newProgress > progress && newProgress <= skillWithHistory.size) {
      addHistory(
        {
          skillId: skillWithHistory.id,
          date: new Date(),
          progress: newProgress,
        },
        {
          onSettled: () => {
            setNewProgress(null);
            setError("");
            onCloseModal();
          },
        }
      );
    }
  }, [
    newProgress,
    progress,
    skillWithHistory.counterWord,
    skillWithHistory.size,
    skillWithHistory.id,
    onCloseModal,
    addHistory,
  ]);

  return (
    <div className={style.wrapper}>
      <ModalHeading>{skillWithHistory.name}</ModalHeading>
      <p>What {skillWithHistory.counterWord} are you on?</p>

      <form
        className={style.bottom}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Input
          type="number"
          step="0.01"
          placeholder={`${skillWithHistory.counterWord} #`}
          className={style.input}
          value={newProgress}
          disabled={isAdding}
          onChange={(e) => {
            if (
              !isNaN(e.target.value) ||
              e.target.value === "," ||
              e.target.value === "."
            ) {
              setNewProgress(e.target.value);
              setError("");
            }
          }}
        />
        <Button className={style.button} disabled={isAdding}>
          Update
        </Button>
      </form>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
}

export default UpdateSkillModal;
