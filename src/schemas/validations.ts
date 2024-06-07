import * as z from "zod";

const CreateUserInputValidation = z.object({
  email: z
    .string()
    .email({
      message: "Enter a valid email",
    })
    .min(2, {
      message: "email must be at least 2 characters.",
    }),

  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .max(25, {
      message: "Password must be at most 25 characters.",
    }),
});

const LoginUserInputValidation = z.object({
  email: z
    .string()
    .email({
      message: "Enter a valid email",
    })
    .min(2, {
      message: "email must be at least 2 characters.",
    }),
  password: z
    .string()

    .max(64, {
      message: "Your password can not be longer then 64 characters long",
    }),
  code: z.optional(z.string()),
});

export { CreateUserInputValidation, LoginUserInputValidation };
