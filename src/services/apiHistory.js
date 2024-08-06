import { reactHistory } from "./history/reactHistory";
import { nodeJsHistory } from "./history/nodeJsHistory";
import { touchTypingHistory } from "./history/touchTypingHistory";
import { touchTypingRuHistory } from "./history/touchTypingRuHistory";
import { parentingHistory } from "./history/parentingHistory";
import { youDontKnowJsHistory } from "./history/youDontKnowJsHistory";
import { perfectProgrammerHistory } from "./history/perfectProgrammerHistory";
import { reactNextJsHistory } from "./history/reactNextJsHistory";
import { happyStudyHistory } from "./history/happyStudyHistory";
import { sqlAcademyHistory } from "./history/sqlAcademyHistory";
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

// addHistories(reactHistory);
// addHistories(nodeJsHistory);
// addHistories(touchTypingHistory);
// addHistories(touchTypingRuHistory);
// addHistories(parentingHistory);
// addHistories(youDontKnowJsHistory);
// addHistories(perfectProgrammerHistory);
// addHistories(reactNextJsHistory);
// addHistories(happyStudyHistory);
// addHistories(sqlAcademyHistory);
