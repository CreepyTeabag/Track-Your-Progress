import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSkill } from "../../services/apiSkills";

export function useSkill() {
  const { skillId } = useParams();

  const {
    isLoading,
    data: skill,
    error,
  } = useQuery({
    queryKey: ["skill", skillId],
    queryFn: () => getSkill({ id: skillId }),
    retry: false,
  });

  return { isLoading, error, skill: skill?.data };
}
