import style from "./Tag.module.css";

function Tag({ name, color = "" }) {
  return <span className={`${style.tag} ${color}`}>{name}</span>;
}

export default Tag;
