import supabase from "../lib/supabase";
import List from "../types/list.interface";

const getAllLists = async () => {
  return supabase.from<List>("lists").select("*");
};

export default getAllLists;
