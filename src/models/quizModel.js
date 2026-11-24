
import { supabase } from "../config/SupabaseClient.js";

// GET semua kuis
export const getAllQuizzes = async () => {
  const { data, error } = await supabase
    .from("quizzes")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

// GET kuis berdasarkan ID
export const getQuizById = async (id) => {
  const { data, error } = await supabase
    .from("quizzes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

// POST menambahkan kuis
export const createQuiz = async (quiz) => {
  const { data, error } = await supabase
    .from("quizzes")
    .insert([quiz])
    .select()
    .single();

  if (error) throw error;
  return data;
};

// PUT memperbarui kuis
export const updateQuiz = async (id, quiz) => {
  const { data, error } = await supabase
    .from("quizzes")
    .update(quiz)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// DELETE menghapus kuis
export const deleteQuiz = async (id) => {
  const { data, error } = await supabase
    .from("quizzes")
    .delete()
    .eq("id", id)
    .select();

  if (error) throw error;

  if (!data || data.length === 0) {
    throw new Error("Kuis tidak ditemukan");
  }

  return data[0];
};
