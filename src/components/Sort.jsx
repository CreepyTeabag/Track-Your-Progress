import { useState } from "react";

export default function Sort({ onSort }) {
  const [sortBy, setSortBy] = useState("name");
  const sortTypes = [
    "created",
    "name",
    "type",
    "progress",
    "activity",
    "last activity",
  ];

  if (sortBy === "created") {
    onSort((skills) => skills);
  }

  if (sortBy === "name") {
    onSort((skills) => {
      skills.slice().sort((a, b) => a.name - b.name);
    });
  }

  return (
    <div className="sort">
      <button className="button button-small round button-sort">&#9662;</button>

      <select
        className="input"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        {sortTypes.map((type) => (
          <option key={type} value={type}>
            Sort by {type}
          </option>
        ))}
      </select>
    </div>
  );
}
