
import express from "express";

import {
  getVocabulary,
  getVocabularyDetail,
  addVocabulary,
  editVocabulary,
  removeVocabulary
} from "../controllers/vocabularyController.js";

import { verifyAdminToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET: dapat diakses semua pengguna
router.get("/", getVocabulary);
router.get("/:id", getVocabularyDetail);

// POST, PUT, DELETE: khusus admin
router.post("/", verifyAdminToken, addVocabulary);
router.put("/:id", verifyAdminToken, editVocabulary);
router.delete("/:id", verifyAdminToken, removeVocabulary);

export default router;
