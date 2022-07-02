import supabase from "../lib/supabase";
import List from "../types/list.interface";

const getListAndWords = async (listId: string) => {
  return supabase.from<List>("lists").select("*").eq("id", listId);
};

export default getListAndWords;
