import supabase from "./supabase";

export async function getHistory({ skillId }) {
  let query = supabase.from("history").select("*").eq("skillId", skillId);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("History could not be loaded");
  }

  return { data };
}
