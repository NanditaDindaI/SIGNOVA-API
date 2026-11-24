
import { supabase } from "../config/SupabaseClient.js";

// GET semua materi
export const getAllMaterials = async () => {
  const { data, error } = await supabase
    .from("materials")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

// GET materi berdasarkan ID
export const getMaterialById = async (id) => {
  const { data, error } = await supabase
    .from("materials")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

// POST menambahkan materi
export const createMaterial = async (material) => {
  const { data, error } = await supabase
    .from("materials")
    .insert([material])
    .select()
    .single();

  if (error) throw error;
  return data;
};

// PUT memperbarui materi
export const updateMaterial = async (id, material) => {
  const { data, error } = await supabase
    .from("materials")
    .update(material)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// DELETE menghapus materi
export const deleteMaterial = async (id) => {
  const { data, error } = await supabase
    .from("materials")
    .delete()
    .eq("id", id)
    .select();

  if (error) throw error;

  if (!data || data.length === 0) {
    throw new Error("Materi tidak ditemukan");
  }

  return data[0];
};
