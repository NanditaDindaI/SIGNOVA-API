
import {
  getAllMaterials,
  getMaterialById,
  createMaterial,
  updateMaterial,
  deleteMaterial
} from "../models/materialModel.js";

// GET semua materi
export const getMaterials = async (req, res) => {
  try {
    const data = await getAllMaterials();

    res.status(200).json({
      message: "Berhasil mengambil data materi",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data materi",
      error: error.message
    });
  }
};

// GET detail materi
export const getMaterialDetail = async (req, res) => {
  try {
    const data = await getMaterialById(req.params.id);

    res.status(200).json({
      message: "Berhasil mengambil detail materi",
      data
    });
  } catch (error) {
    res.status(404).json({
      message: "Materi tidak ditemukan",
      error: error.message
    });
  }
};

// POST menambahkan materi
export const addMaterial = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        message: "Judul materi wajib diisi"
      });
    }

    const data = await createMaterial({
      title: title.trim(),
      description: req.body.description || null,
      content: req.body.content || null,
      image_url: req.body.image_url || null,
      video_url: req.body.video_url || null
    });

    res.status(201).json({
      message: "Materi berhasil ditambahkan",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan materi",
      error: error.message
    });
  }
};

// PUT memperbarui materi
export const editMaterial = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        message: "Judul materi wajib diisi"
      });
    }

    const data = await updateMaterial(req.params.id, {
      title: title.trim(),
      description: req.body.description || null,
      content: req.body.content || null,
      image_url: req.body.image_url || null,
      video_url: req.body.video_url || null
    });

    res.status(200).json({
      message: "Materi berhasil diperbarui",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal memperbarui materi",
      error: error.message
    });
  }
};

// DELETE menghapus materi
export const removeMaterial = async (req, res) => {
  try {
    const data = await deleteMaterial(req.params.id);

    res.status(200).json({
      message: "Materi berhasil dihapus",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus materi",
      error: error.message
    });
  }
};
