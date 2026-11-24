
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const adminUsername = process.env.ADMIN_USERNAME;
const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
const jwtSecret = process.env.JWT_SECRET;

export const verifyAdmin = async (username, password) => {
  if (!adminUsername || !adminPasswordHash) {
    throw new Error("Konfigurasi admin belum lengkap");
  }

  const isUsernameValid = username === adminUsername;
  const isPasswordValid = await bcrypt.compare(
    password,
    adminPasswordHash
  );

  return isUsernameValid && isPasswordValid;
};

export const generateAdminToken = (username) => {
  if (!jwtSecret) {
    throw new Error("JWT_SECRET belum dikonfigurasi");
  }

  return jwt.sign(
    { username, role: "admin" },
    jwtSecret,
    { expiresIn: "2h" }
  );
};
