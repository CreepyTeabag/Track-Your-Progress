import style from "./SkillName.module.css";

function SkillName({ children }) {
  return <h1 className={style.name}>{children}</h1>;
}

export default SkillName;
