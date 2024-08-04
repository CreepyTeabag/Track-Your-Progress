import AccordionSimple from "../../ui/AccordionSimple";
import style from "./SkillNotes.module.css";
import { useSkillWithHistory } from "./useSkillWithHistory";

function SkillNotes() {
  const { isLoading, skillWithHistory } = useSkillWithHistory();

  if (isLoading) return;

  return (
    <AccordionSimple defaultOpen={true} heading="Notes" className={style.notes}>
      {skillWithHistory.info ? skillWithHistory.info : "Nothing here yet..."}
    </AccordionSimple>
  );
}

export default SkillNotes;
