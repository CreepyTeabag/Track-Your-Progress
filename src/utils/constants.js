export const statsFilterOptions = [
  { value: "7", label: "Last 7 days" },
  { value: "14", label: "Last 14 days" },
  { value: "30", label: "Last month" },
  { value: "365", label: "Last year" },
  { value: "3650", label: "All" },
];

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
