
import express from "express";
import { supabase } from "./config/SupabaseClient.js";

// Import Routes
import alphabetRoutes from "./routes/alphabetRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import vocabularyRoutes from "./routes/vocabularyRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import materialRoutes from "./routes/materialRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// API Routes
app.use("/api/vocabulary", vocabularyRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/alphabets", alphabetRoutes);

// Halaman utama API
app.get("/", (req, res) => {
  res.json({
    message: "SIGNOVA API is running!",
    status: "success"
  });
});

// Menguji koneksi database
app.get("/api/health-db", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .limit(1);

    if (error) {
      throw error;
    }

    res.json({
      message: "Koneksi Supabase berhasil!",
      status: "success",
      data: data
    });

  } catch (error) {
    res.status(500).json({
      message: "Koneksi Supabase gagal!",
      error: error.message
    });
  }
});

// Menjalankan server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SIGNOVA API running on port ${PORT}`);
});

