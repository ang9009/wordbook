import supabase from "../lib/supabase";
import Word from "../types/word.interface";
import List from "../types/list.interface";

const getList = async (listId: string) => {
  return supabase
    .from<List & { words: Word[] }>("lists")
    .select("*,words(*)")
    .eq("id", listId)
    .maybeSingle();
};

export default getList;
