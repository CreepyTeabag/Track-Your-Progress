import { list } from "./reactHistory";
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

export async function addHistory({ skillId, date, progress }) {
  let query = supabase
    .from("history")
    .insert([{ skillId, date, progress }])
    .select();

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("History could not added");
  }

  return { data };
}

export async function addHistories(list) {
  let query = supabase.from("history").insert(list).select();

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("History could not added");
  }

  return { data };
}

// addHistories(list);
