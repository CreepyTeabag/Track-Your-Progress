import { useSkills } from "../context/SkillsContext";

export default function Skill({ skill }) {
  const { handleShowUpdate, handleShowHistory, handleShowEdit } = useSkills();

  let percentage = (skill.currentProgress / skill.size) * 100;
  if (percentage > 0 && percentage < 1) percentage = 1;
  else percentage = Math.round(percentage);

  return (
    <ul className="line">
      <li>
        {percentage < 100 ? (
          <button
            className="button button-small round"
            onClick={() => handleShowUpdate(skill)}
          >
            📈
          </button>
        ) : (
          <button className="button button-small round" disabled>
            ✅
          </button>
        )}
      </li>
      <li>{skill.name}</li>
      <li>{skill.type}</li>
      <li>
        {skill.counterWord} #{skill.currentProgress}
      </li>
      <li>
        {skill.size} {skill.counterWord}s
      </li>
      <li>
        {percentage === 100 && "Finished 🎉"}
        {percentage === 0 && "Not started yet"}
        {percentage > 0 && percentage < 100 && (
          <>
            {percentage}%
            <div className="progress">
              <div
                className="percentage"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </>
        )}
      </li>
      <li>
        <button
          className="button button-small round"
          onClick={() => handleShowEdit(skill)}
        >
          ✏️
        </button>
      </li>
      <li>
        <button
          className="button button-small round"
          onClick={() => handleShowHistory(skill)}
        >
          📃
        </button>
      </li>
    </ul>
  );
}
