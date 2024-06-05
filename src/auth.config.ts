import { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { LoginUserInputValidation } from "@/schemas/validations";
import { getUserByEmail } from "./data/user";
import Google from "next-auth/providers/google";
import Facebook from "@auth/core/providers/facebook";
import { CredentialsSignin } from "@auth/core/errors"; // import is specific to your framework

class CustomError extends CredentialsSignin {
  code = "Invalid Credentials";
}
export default {
  providers: [
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const validatedFields = LoginUserInputValidation.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) throw new CustomError();
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        throw new CustomError();
      },
    }),
  ],
} satisfies NextAuthConfig;
