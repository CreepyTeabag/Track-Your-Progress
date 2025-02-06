import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSkill as addSkillApi } from "../../services/apiSkills";

export function useAddSkill() {
  const queryClient = useQueryClient();

  const { isLoading: isAddingSkill, mutate: addSkill } = useMutation({
    mutationFn: addSkillApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["skillsList"] });
    },
    onError: (err) => console.error(err),
  });

  return { isAddingSkill, addSkill };
}
