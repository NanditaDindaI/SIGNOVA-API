
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from "../models/categoryModel.js";

// GET seluruh kategori
export const getCategories = async (req, res) => {
  try {
    const data = await getAllCategories();

    res.status(200).json({
      message: "Berhasil mengambil data kategori",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data kategori",
      error: error.message
    });
  }
};

// GET detail kategori
export const getCategoryDetail = async (req, res) => {
  try {
    const data = await getCategoryById(req.params.id);

    res.status(200).json({
      message: "Berhasil mengambil detail kategori",
      data
    });
  } catch (error) {
    res.status(404).json({
      message: "Kategori tidak ditemukan",
      error: error.message
    });
  }
};

// POST tambah kategori
export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        message: "Nama kategori wajib diisi"
      });
    }

    const data = await createCategory({
      name: name.trim(),
      description: req.body.description || null
    });

    res.status(201).json({
      message: "Kategori berhasil ditambahkan",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan kategori",
      error: error.message
    });
  }
};

// PUT ubah kategori
export const editCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        message: "Nama kategori wajib diisi"
      });
    }

    const data = await updateCategory(req.params.id, {
      name: name.trim(),
      description: description || null
    });

    res.status(200).json({
      message: "Kategori berhasil diperbarui",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal memperbarui kategori",
      error: error.message
    });
  }
};

// DELETE hapus kategori
export const removeCategory = async (req, res) => {
  try {
    const data = await deleteCategory(req.params.id);

    res.status(200).json({
      message: "Kategori berhasil dihapus",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus kategori",
      error: error.message
    });
  }
};
