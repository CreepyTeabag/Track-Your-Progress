import CloseButton from "./CloseButton";
import { useSkills } from "../context/SkillsContext";

export default function History({ onShowHistory }) {
  const { curSkill } = useSkills();

  return (
    <>
      <div className="history popup">
        <CloseButton onClose={() => onShowHistory(curSkill)}></CloseButton>
        <h3>📃 Progress history of {curSkill.name}</h3>

        {curSkill.history.length === 0 && <div>Nothing here yet...</div>}

        {curSkill.history.length > 0 &&
          curSkill.history
            .slice(0)
            .reverse()
            .map((day, i) => {
              const date = new Date(day.date).toLocaleDateString();

              return (
                <div className="day" key={`${date}_${i}`}>
                  <div className="date">{date}</div>
                  <hr />
                  <div className="amount">
                    {curSkill.counterWord} #{day.progress}
                  </div>
                </div>
              );
            })}
      </div>
      <div
        className="popup-blocker"
        onClick={() => onShowHistory(curSkill)}
      ></div>
    </>
  );
}
