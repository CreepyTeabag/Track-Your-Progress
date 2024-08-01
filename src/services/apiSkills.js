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
  let query = supabase.from("skills").select("*").eq("id", id).single();

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Skill could not be loaded");
  }

  return { data };
}

export async function getSkillWithHistory({ skillId }) {
  let query = supabase
    .from("skills")
    .select("info, name, size, type, counterWord, history(date, progress)")
    .order("date", { foreignTable: "history" })
    .eq("id", skillId)
    .single();

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Skill with history could not be loaded");
  }

  return { data };
}
