
import jwt from "jsonwebtoken";

export const verifyAdminToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Akses ditolak. Silakan login sebagai admin."
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "Akses hanya diperbolehkan untuk admin."
      });
    }

    req.admin = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Token tidak valid atau sudah kedaluwarsa."
    });
  }
};
