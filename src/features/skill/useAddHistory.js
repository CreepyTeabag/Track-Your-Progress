import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHistory as addHistoryApi } from "../../services/apiHistory";

export function useAddHistory() {
  const queryClient = useQueryClient();

  const { isLoading: isAdding, mutate: addHistory } = useMutation({
    mutationFn: addHistoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["skillWithHistory"] });
    },
    onError: (err) => console.error(err),
  });

  return { isAdding, addHistory };
}
