import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { format, isToday } from "date-fns";
import { getSkillsList } from "../../services/apiSkills";

export function useSkillsList() {
  //   const { skillId } = useParams();

  const {
    isLoading,
    data: skillData,
    error,
  } = useQuery({
    queryKey: ["skillsList"],
    queryFn: () => getSkillsList(),
    retry: false,
  });

  const skillsList = skillData?.data.map((skill) => {
    const history = skill?.history;
    const size = skill?.size;
    const lastLog = history?.at(-1);
    const firstLog = history?.at(0);
    const startDate = firstLog?.date ? format(firstLog.date, "d MMM y") : "";

    const itemsLeft = lastLog ? size - lastLog?.progress : size;

    const isFinished = itemsLeft === 0;
    const finishDate = isFinished ? format(lastLog?.date, "d MMM y") : "";

    const progress = lastLog?.progress ?? 0;
    const isStarted = progress > 0;

    const practicedToday = lastLog ? isToday(lastLog.date) : false;

    return {
      ...skill,
      lastActivity: lastLog?.date ? lastLog?.date : skill.created_at,
      isStarted,
      isFinished,
      startDate,
      finishDate,
      progress,
      practicedToday,
    };
  });

  return {
    isLoading,
    error,
    skillsList,
  };
}
