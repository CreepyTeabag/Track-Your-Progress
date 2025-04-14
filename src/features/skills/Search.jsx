import Input from "../../ui/Input";
import { useState, useEffect } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useSearchParams } from "react-router-dom";
import style from "./Search.module.css";

function Search() {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (value) => {
    setValue(value);

    searchParams.set("search", value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setValue(searchParams.get("search") || "");
  }, [searchParams]);

  return (
    <div className={style.searchWrapper}>
      <Input
        placeholder="Search"
        className={style.searchInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <PiMagnifyingGlassBold />
    </div>
  );
}

export default Search;
