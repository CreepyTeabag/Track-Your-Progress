import style from "./PageHeader.module.css";

function PageHeader({ className, children }) {
  return <h1 className={`${style.header} ${className}`}>{children}</h1>;
}

export default PageHeader;
