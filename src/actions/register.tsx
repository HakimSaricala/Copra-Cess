"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { CreateUserInputValidation } from "@/schemas/validations";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
export const register = async (
  values: z.infer<typeof CreateUserInputValidation>
) => {
  const ValidateField = CreateUserInputValidation.safeParse(values);
  if (!ValidateField.success) {
    return { error: "Invalid Fields" };
  }

  const { email, password } = ValidateField.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email alread in use!" };
  }
  await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return { success: "Email Confirmation Sent" };
};
