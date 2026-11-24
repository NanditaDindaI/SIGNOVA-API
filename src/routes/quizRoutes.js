
import express from "express";

import {
  getQuizzes,
  getQuizDetail,
  addQuiz,
  editQuiz,
  removeQuiz
} from "../controllers/quizController.js";

import { verifyAdminToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET: dapat diakses semua pengguna
router.get("/", getQuizzes);
router.get("/:id", getQuizDetail);

// POST, PUT, DELETE: khusus admin
router.post("/", verifyAdminToken, addQuiz);
router.put("/:id", verifyAdminToken, editQuiz);
router.delete("/:id", verifyAdminToken, removeQuiz);

export default router;
