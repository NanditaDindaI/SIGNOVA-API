
import { supabase } from "../config/SupabaseClient.js";

// Mengambil seluruh data alfabet
export const getAllAlphabets = async () => {
  const { data, error } = await supabase
    .from("alphabets")
    .select("*")
    .order("letter", { ascending: true });

  if (error) throw error;
  return data;
};

// Mengambil detail alfabet berdasarkan ID
export const getAlphabetById = async (id) => {
  const { data, error } = await supabase
    .from("alphabets")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};
