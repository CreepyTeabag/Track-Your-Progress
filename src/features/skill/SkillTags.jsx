import Tag from "../../ui/Tag";
import style from "./SkillTags.module.css";

function SkillTags({ tags }) {
  return (
    <div className={style.tags}>
      {tags.map((tag) => (
        <Tag
          name={tag.name}
          color={tag.color}
          key={`${tag.name}_${tag.color}`}
        />
      ))}
    </div>
  );
}

export default SkillTags;
