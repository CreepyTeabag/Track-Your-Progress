import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";

import { useSkillWithHistory } from "./useSkillWithHistory";
import { useDarkMode } from "../../context/DarkModeContext";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  fillEmptyProgressDays,
  statsColors,
  statsFilterOptions,
} from "../../utils/constants";
import Select from "../../ui/Select";
import { CustomAxisTick } from "../../ui/CustomAxisTick";
import style from "./SkillStats.module.css";

function SkillStats() {
  const { skillWithHistory, isFinished, finishDate, isStarted } =
    useSkillWithHistory();
  const { isDarkMode } = useDarkMode();
  const [searchParams] = useSearchParams();

  if (!isStarted)
    return <p>Start working on this skill to see the stats here!</p>;

  const colors = statsColors(isDarkMode);
  const numDays = !searchParams.get("dateRange")
    ? 7
    : Number(searchParams.get("dateRange"));

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: isFinished ? new Date(finishDate) : new Date(),
  });

  const data = fillEmptyProgressDays(
    allDates.map((date) => {
      const dayProgresses = skillWithHistory.history
        .filter((item) => isSameDay(new Date(date), new Date(item.date)))
        .map((item) => item.progress);

      const maxProgress =
        dayProgresses.length !== 0
          ? dayProgresses.length > 1
            ? Math.max(...dayProgresses)
            : dayProgresses[0]
          : 0;

      return {
        label: format(date, "dd MMM yyy"),
        progress: maxProgress,
      };
    })
  ).filter((item) => item.progress > 0);

  return (
    <div className={style.stats}>
      <div className={style.header}>
        <h3 className={style.heading}>
          Progress {format(allDates.at(0), "dd MMM yyy")} &mdash;{" "}
          {format(allDates.at(-1), "dd MMM yyy")}
        </h3>
        <Select options={statsFilterOptions} filterField="dateRange" />
      </div>
      {data.length === 0 ? (
        <p>No data available for this period</p>
      ) : (
        <ResponsiveContainer height={360} width="100%">
          <AreaChart data={data}>
            <XAxis
              dataKey="label"
              height={60}
              tick={<CustomAxisTick fill={colors.text} />}
              tickLine={{ stroke: colors.text }}
            />
            <YAxis
              unit={""}
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
              domain={["auto", "auto"]}
            />
            <CartesianGrid strokeDasharray="4" />
            <Tooltip contentStyle={{ backgroundColor: colors.background }} />
            <Area
              dataKey="progress"
              type="monotone"
              stroke={colors.progress.stroke}
              fill={colors.progress.fill}
              strokeWidth={2}
              name="Progress"
              unit={` ${skillWithHistory.counterWord}s`}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default SkillStats;
