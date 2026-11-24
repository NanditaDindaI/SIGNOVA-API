
import {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz
} from "../models/quizModel.js";

// GET semua kuis
export const getQuizzes = async (req, res) => {
  try {
    const data = await getAllQuizzes();

    res.status(200).json({
      message: "Berhasil mengambil data kuis",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data kuis",
      error: error.message
    });
  }
};

// GET detail kuis
export const getQuizDetail = async (req, res) => {
  try {
    const data = await getQuizById(req.params.id);

    res.status(200).json({
      message: "Berhasil mengambil detail kuis",
      data
    });
  } catch (error) {
    res.status(404).json({
      message: "Kuis tidak ditemukan",
      error: error.message
    });
  }
};

// POST menambahkan kuis
export const addQuiz = async (req, res) => {
  try {
    const {
      question,
      option_a,
      option_b,
      option_c,
      option_d,
      correct_answer
    } = req.body;

    if (
      !question?.trim() ||
      !option_a?.trim() ||
      !option_b?.trim() ||
      !option_c?.trim() ||
      !option_d?.trim() ||
      !correct_answer?.trim()
    ) {
      return res.status(400).json({
        message: "Pertanyaan, semua pilihan, dan jawaban benar wajib diisi"
      });
    }

    if (!["A", "B", "C", "D"].includes(correct_answer.trim().toUpperCase())) {
      return res.status(400).json({
        message: "Jawaban benar harus berupa A, B, C, atau D"
      });
    }

    const data = await createQuiz({
      question: question.trim(),
      option_a: option_a.trim(),
      option_b: option_b.trim(),
      option_c: option_c.trim(),
      option_d: option_d.trim(),
      correct_answer: correct_answer.trim().toUpperCase()
    });

    res.status(201).json({
      message: "Kuis berhasil ditambahkan",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan kuis",
      error: error.message
    });
  }
};

// PUT memperbarui kuis
export const editQuiz = async (req, res) => {
  try {
    const {
      question,
      option_a,
      option_b,
      option_c,
      option_d,
      correct_answer
    } = req.body;

    if (
      !question?.trim() ||
      !option_a?.trim() ||
      !option_b?.trim() ||
      !option_c?.trim() ||
      !option_d?.trim() ||
      !correct_answer?.trim()
    ) {
      return res.status(400).json({
        message: "Pertanyaan, semua pilihan, dan jawaban benar wajib diisi"
      });
    }

    if (!["A", "B", "C", "D"].includes(correct_answer.trim().toUpperCase())) {
      return res.status(400).json({
        message: "Jawaban benar harus berupa A, B, C, atau D"
      });
    }

    const data = await updateQuiz(req.params.id, {
      question: question.trim(),
      option_a: option_a.trim(),
      option_b: option_b.trim(),
      option_c: option_c.trim(),
      option_d: option_d.trim(),
      correct_answer: correct_answer.trim().toUpperCase()
    });

    res.status(200).json({
      message: "Kuis berhasil diperbarui",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal memperbarui kuis",
      error: error.message
    });
  }
};

// DELETE menghapus kuis
export const removeQuiz = async (req, res) => {
  try {
    const data = await deleteQuiz(req.params.id);

    res.status(200).json({
      message: "Kuis berhasil dihapus",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus kuis",
      error: error.message
    });
  }
};
