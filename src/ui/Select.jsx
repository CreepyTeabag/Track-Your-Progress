import { useSearchParams } from "react-router-dom";
import style from "./Select.module.css";

function Select({ options, filterField, ...props }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const onChange = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <select
      className={style.select}
      value={currentFilter}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
