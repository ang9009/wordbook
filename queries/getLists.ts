import supabase from "../lib/supabase";
import List from "../types/list.interface";

const getLists = async () => {
  return supabase.from<List>("lists").select("*");
};

export default getLists;
