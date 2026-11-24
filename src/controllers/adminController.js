
import {
  verifyAdmin,
  generateAdminToken
} from "../config/adminConfig.js";

export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username dan password wajib diisi"
      });
    }

    const isValid = await verifyAdmin(username, password);

    if (!isValid) {
      return res.status(401).json({
        message: "Username atau password salah"
      });
    }

    const token = generateAdminToken(username);

    res.status(200).json({
      message: "Login admin berhasil",
      token
    });

  } catch (error) {
    res.status(500).json({
      message: "Login gagal",
      error: error.message
    });
  }
};
