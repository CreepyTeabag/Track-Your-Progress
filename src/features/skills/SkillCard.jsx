import Tag from "../../ui/Tag";
import SkillProgress from "./SkillProgress";
import style from "./SkillCard.module.css";
import { useNavigate } from "react-router-dom";
import { format, formatDistanceToNow, parseISO } from "date-fns";

function SkillCard({ skill }) {
  const {
    created_at: created,
    lastActivity,
    isStarted,
    isFinished,
    startDate,
    finishDate,
    progress,
    practicedToday,
    size,
    name,
    id,
    type,
  } = skill;
  const navigate = useNavigate();

  const period = "last 7 days";
  const activity = 3;

  const lastActivityFormatted = lastActivity
    ? formatDistanceToNow(parseISO(lastActivity), {
        addSuffix: true,
        includeSeconds: false,
      })
    : "";

  return (
    <div className={style.card}>
      <h2 className={style.name} onClick={() => navigate(`/skill/${id}`)}>
        {name}
      </h2>
      <div className={style.tags}>
        <Tag name={type} color="blue" />
      </div>

      <SkillProgress
        isStarted={isStarted}
        isFinished={isFinished}
        progress={progress}
        size={size}
      />

      <p>Last activity: {lastActivityFormatted}</p>
      {!isFinished && (
        <p>
          Activity in {period}: {activity} days
        </p>
      )}
      <p>Created: {format(created, "d MMM y")}</p>
      {isStarted && <p>Start: {startDate}</p>}
      {isFinished && <p>Finished: {finishDate}</p>}
    </div>
  );
}

export default SkillCard;
