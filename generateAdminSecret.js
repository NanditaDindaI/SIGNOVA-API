
import bcrypt from "bcryptjs";
import { randomBytes } from "node:crypto";
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

try {
  const password = await rl.question("Masukkan password admin: ");

  if (password.length < 12) {
    throw new Error("Password minimal 12 karakter.");
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const jwtSecret = randomBytes(64).toString("hex");

  console.log("\nADMIN_PASSWORD_HASH=");
  console.log(passwordHash);

  console.log("\nJWT_SECRET=");
  console.log(jwtSecret);

  console.log("\nSimpan kedua nilai tersebut ke file .env.");
} catch (error) {
  console.error(error.message);
} finally {
  rl.close();
}
