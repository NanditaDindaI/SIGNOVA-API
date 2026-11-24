
import express from "express";

import {
  getMaterials,
  getMaterialDetail,
  addMaterial,
  editMaterial,
  removeMaterial
} from "../controllers/materialController.js";

import { verifyAdminToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET: dapat diakses semua pengguna
router.get("/", getMaterials);
router.get("/:id", getMaterialDetail);

// POST, PUT, DELETE: khusus admin
router.post("/", verifyAdminToken, addMaterial);
router.put("/:id", verifyAdminToken, editMaterial);
router.delete("/:id", verifyAdminToken, removeMaterial);

export default router;
