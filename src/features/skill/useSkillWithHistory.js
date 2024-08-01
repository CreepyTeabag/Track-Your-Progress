import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { format, isToday } from "date-fns";
import { getSkillWithHistory } from "../../services/apiSkills";

export function useSkillWithHistory() {
  const { skillId } = useParams();

  const {
    isLoading,
    data: skillWithHistoryData,
    error,
  } = useQuery({
    queryKey: ["skillWithHistory", skillId],
    queryFn: () => getSkillWithHistory({ skillId }),
    retry: false,
  });

  const skillWithHistory = skillWithHistoryData?.data;
  const history = skillWithHistory?.history;
  const size = skillWithHistory?.size;
  const lastLog = history?.at(-1);
  const firstLog = history?.at(0);

  const startDate = firstLog?.date ? format(firstLog.date, "d MMM  y") : "";

  const itemsLeft = lastLog ? size - lastLog?.progress : size;

  const isFinished = itemsLeft === 0;
  const finishDate = isFinished ? format(lastLog?.date, "d MMM  y") : "";

  const progress = lastLog?.progress ?? 0;
  const isStarted = progress > 0;

  const practicedToday = lastLog ? isToday(lastLog.date) : false;

  console.log("skillWithHistory", skillWithHistory);

  return {
    isLoading,
    error,
    skillWithHistory,
    startDate,
    finishDate,
    itemsLeft,
    isFinished,
    isStarted,
    progress,
    practicedToday,
  };
}
