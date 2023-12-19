import CloseButton from "./CloseButton";

export default function History({ skill, onShowHistory }) {
  return (
    <>
      <div className="history popup">
        <CloseButton onClose={() => onShowHistory(skill)}></CloseButton>
        <h3>📃 Progress history of {skill.name}</h3>

        {skill.history.length === 0 && <div>Nothing here yet...</div>}

        {skill.history.length > 0 &&
          skill.history
            .slice(0)
            .reverse()
            .map((day, i) => {
              const date = new Date(day.date).toLocaleDateString();

              return (
                <div className="day" key={`${date}_${i}`}>
                  <div className="date">{date}</div>
                  <hr />
                  <div className="amount">
                    {skill.counterWord} #{day.progress}
                  </div>
                </div>
              );
            })}
      </div>
      <div className="popup-blocker" onClick={() => onShowHistory(skill)}></div>
    </>
  );
}
