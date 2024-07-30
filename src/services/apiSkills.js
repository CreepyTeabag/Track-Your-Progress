import supabase from "./supabase";

export async function getSkills() {
  let query = supabase.from("skills").select("*");

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Skills could not be loaded");
  }

  return { data };
}

export async function getSkill({ id }) {
  let query = supabase.from("skills").select("*").eq("id", id);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Skills could not be loaded");
  }

  return { data };
}
