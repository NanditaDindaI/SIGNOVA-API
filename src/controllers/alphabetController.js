
import {
  getAllAlphabets,
  getAlphabetById
} from "../models/alphabetModel.js";

// GET semua data alfabet
export const getAlphabets = async (req, res) => {
  try {
    const data = await getAllAlphabets();

    res.status(200).json({
      message: "Berhasil mengambil data alfabet",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data alfabet",
      error: error.message
    });
  }
};

// GET detail alfabet berdasarkan ID
export const getAlphabetDetail = async (req, res) => {
  try {
    const data = await getAlphabetById(req.params.id);

    res.status(200).json({
      message: "Berhasil mengambil detail alfabet",
      data
    });
  } catch (error) {
    res.status(404).json({
      message: "Data alfabet tidak ditemukan",
      error: error.message
    });
  }
};
