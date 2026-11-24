
import { supabase } from "../config/SupabaseClient.js";

// Mengambil seluruh kategori
export const getAllCategories = async () => {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name", { ascending: true });

  if (error) throw error;
  return data;
};

// Mengambil kategori berdasarkan ID
export const getCategoryById = async (id) => {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

// Menambahkan kategori
export const createCategory = async (category) => {
  const { data, error } = await supabase
    .from("categories")
    .insert([category])
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Memperbarui kategori
export const updateCategory = async (id, category) => {
  const { data, error } = await supabase
    .from("categories")
    .update(category)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Menghapus kategori
export const deleteCategory = async (id) => {
  const { data, error } = await supabase
    .from("categories")
    .delete()
    .eq("id", id)
    .select();

  if (error) throw error;

  if (!data || data.length === 0) {
    throw new Error("Kategori tidak ditemukan");
  }

  return data[0];
};
