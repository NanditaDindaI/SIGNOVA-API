import { supabase } from "../config/SupabaseClient.js";

// Mengambil seluruh kosakata
export const getAllVocabulary = async () => {
  const { data, error } = await supabase
    .from("vocabulary")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

// Mengambil kosakata berdasarkan ID
export const getVocabularyById = async (id) => {
  const { data, error } = await supabase
    .from("vocabulary")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

// Menambahkan kosakata
export const createVocabulary = async (vocabulary) => {
  const { data, error } = await supabase
    .from("vocabulary")
    .insert([vocabulary])
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Mengubah kosakata
export const updateVocabulary = async (id, vocabulary) => {
  const { data, error } = await supabase
    .from("vocabulary")
    .update(vocabulary)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Menghapus kosakata
export const deleteVocabulary = async (id) => {
  const { data, error } = await supabase
    .from("vocabulary")
    .delete()
    .eq("id", id)
    .select();

  if (error) throw error;

  if (!data || data.length === 0) {
    throw new Error("Kosakata tidak ditemukan");
  }

  return data[0];
};