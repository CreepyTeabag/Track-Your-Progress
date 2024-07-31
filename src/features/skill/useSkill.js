import { useParams } from "react-router-dom";

export function useSkill() {
  const { skillId } = useParams();

  return skillId;
}
