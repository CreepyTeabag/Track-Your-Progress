import AccordionSimple from "../../ui/AccordionSimple";
import style from "./SkillNotes.module.css";

function SkillNotes() {
  const notes =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique fugit expedita inventore quae! Reiciendis soluta officia, minus, ipsum doloremque, modi nisi suscipit quasi at quos veniam? Repudiandae cum optio quam nemo laudantium quasi iure voluptates! Harum labore quia ad amet. Repellat vitae quia laborum quisquam ut modi iure, doloribus ea.";

  return (
    <AccordionSimple defaultOpen={true} heading="Notes" className={style.notes}>
      {notes ? notes : "Nothing here yet..."}
    </AccordionSimple>
  );
}

export default SkillNotes;
