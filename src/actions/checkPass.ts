import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";

export const checkPass = async (email: string, password: string) => {
  const user = await getUserByEmail(email);
  if (!user || !user.password) return null;

  const passwordsMatch = await bcrypt.compare(password, user.password);

  if (passwordsMatch) return user;
  return null;
};
