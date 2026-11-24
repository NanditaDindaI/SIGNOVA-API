
import express from "express";

import {
  getAlphabets,
  getAlphabetDetail
} from "../controllers/alphabetController.js";

const router = express.Router();

// GET semua data alfabet
router.get("/", getAlphabets);

// GET detail alfabet berdasarkan ID
router.get("/:id", getAlphabetDetail);

export default router;
