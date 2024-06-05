"use server";
import * as z from "zod";

import { LoginUserInputValidation } from "@/schemas/validations";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";
export const login = async (
  values: z.infer<typeof LoginUserInputValidation>
) => {
  const ValidateField = LoginUserInputValidation.safeParse(values); //Get credentials from form
  if (!ValidateField.success) {
    return { error: "Invalid Fields" };
  }
  const { email, password } = ValidateField.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Invalid Credentials" };
  }
  //If user email is not verfied
  if (!existingUser.emailVerified) {
    //generate token
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    //send email
    // await sendVerificationEmail(
    //   verificationToken.email,
    //   verificationToken.token
    // );

    return { success: "Confirmation email sent!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CallbackRouteError":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
