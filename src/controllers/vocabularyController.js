
import {
  getAllVocabulary,
  getVocabularyById,
  createVocabulary,
  updateVocabulary,
  deleteVocabulary
} from "../models/vocabularyModel.js";

// GET semua kosakata
export const getVocabulary = async (req, res) => {
  try {
    const data = await getAllVocabulary();

    res.status(200).json({
      message: "Berhasil mengambil data kosakata",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data kosakata",
      error: error.message
    });
  }
};

// GET detail kosakata
export const getVocabularyDetail = async (req, res) => {
  try {
    const data = await getVocabularyById(req.params.id);

    res.status(200).json({
      message: "Berhasil mengambil detail kosakata",
      data
    });
  } catch (error) {
    res.status(404).json({
      message: "Kosakata tidak ditemukan",
      error: error.message
    });
  }
};

// POST tambah kosakata
export const addVocabulary = async (req, res) => {
  try {
    const { word } = req.body;

    if (!word || !word.trim()) {
      return res.status(400).json({
        message: "Nama kosakata wajib diisi"
      });
    }

    const data = await createVocabulary(req.body);

    res.status(201).json({
      message: "Kosakata berhasil ditambahkan",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan kosakata",
      error: error.message
    });
  }
};

// PUT ubah kosakata
export const editVocabulary = async (req, res) => {
  try {
    const data = await updateVocabulary(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message: "Kosakata berhasil diperbarui",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal memperbarui kosakata",
      error: error.message
    });
  }
};

// DELETE hapus kosakata
export const removeVocabulary = async (req, res) => {
  try {
    const data = await deleteVocabulary(req.params.id);

    res.status(200).json({
      message: "Kosakata berhasil dihapus",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus kosakata",
      error: error.message
    });
  }
};
