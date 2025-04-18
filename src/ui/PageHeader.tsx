import style from "./PageHeader.module.css";

interface Props {
  className: string;
  children: React.ReactNode;
}

function PageHeader({ className, children }: Props) {
  return <h1 className={`${style.header} ${className}`}>{children}</h1>;
}

export default PageHeader;
