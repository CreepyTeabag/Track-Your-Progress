import { parse, parseISO } from "date-fns";

export const statsFilterOptions = [
  { value: "7", label: "Last 7 days" },
  { value: "14", label: "Last 14 days" },
  { value: "30", label: "Last month" },
  { value: "365", label: "Last year" },
  { value: "3650", label: "All" },
];

export const sortSkillsOptions = [
  { value: "last-activity", label: "Last activity" },
  { value: "name-a-z", label: "Name A - Z" },
  { value: "name-z-a", label: "Name Z - A" },
  { value: "progress-desc", label: "Progress ⬆️" },
  { value: "progress-asc", label: "Progress ⬇️" },
  { value: "created", label: "Created date" },
  { value: "type", label: "Type" },
  { value: "start-date-desc", label: "Start date ⬆️" },
  { value: "start-date-asc", label: "Start date ⬇️" },
  { value: "finish-date-desc", label: "Finish date ⬆️" },
  { value: "finish-date-asc", label: "Finish date ⬇️" },
];

export const skillSortRules = {
  "last-activity": (a, b) =>
    parseISO(b.lastActivity) - parseISO(a.lastActivity),
  "name-a-z": (a, b) => a.name.localeCompare(b.name),
  "name-z-a": (a, b) => b.name.localeCompare(a.name),
  "progress-desc": (a, b) => b.progress / b.size - a.progress / a.size,
  "progress-asc": (a, b) => a.progress / a.size - b.progress / b.size,
  created: (a, b) => parseISO(b.created_at) - parseISO(a.created_at),
  type: (a, b) => a.type.localeCompare(b.type),
  "start-date-desc": (a, b) =>
    parse(b.startDate, "d MMM y", b.history?.at(0)?.date) -
    parse(a.startDate, "d MMM y", a.history?.at(0)?.date),
  "start-date-asc": (a, b) =>
    parse(a.startDate, "d MMM y", a.history?.at(0)?.date) -
    parse(b.startDate, "d MMM y", b.history?.at(0)?.date),
  "finish-date-desc": (a, b) =>
    parse(b.finishDate, "d MMM y", new Date()) -
    parse(a.finishDate, "d MMM y", new Date()),
  "finish-date-asc": (a, b) =>
    parse(a.finishDate, "d MMM y", new Date()) -
    parse(b.finishDate, "d MMM y", new Date()),
};

export function fillEmptyProgressDays(array) {
  let lastNonZeroProgress = 0;
  return array.map((item) => {
    if (item.progress === 0 && lastNonZeroProgress > 0) {
      return { ...item, progress: lastNonZeroProgress };
    } else {
      if (item.progress > 0) {
        lastNonZeroProgress = item.progress;
      }
      return item;
    }
  });
}

export const statsColors = (isDarkMode) => {
  return isDarkMode
    ? {
        progress: { stroke: "#2253b4", fill: "#2253b4" },
        text: "#f4f5f5",
        background: "#212326",
      }
    : {
        progress: { stroke: "#e7a413", fill: "#e7a413" },
        text: "#1c1402",
        background: "#fdf8ec",
      };
};
