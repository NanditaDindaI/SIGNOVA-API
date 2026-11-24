
import express from "express";

import {
  getCategories,
  getCategoryDetail,
  addCategory,
  editCategory,
  removeCategory
} from "../controllers/categoryController.js";

import { verifyAdminToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET: dapat diakses semua pengguna
router.get("/", getCategories);
router.get("/:id", getCategoryDetail);

// POST, PUT, DELETE: khusus admin
router.post("/", verifyAdminToken, addCategory);
router.put("/:id", verifyAdminToken, editCategory);
router.delete("/:id", verifyAdminToken, removeCategory);

export default router;
