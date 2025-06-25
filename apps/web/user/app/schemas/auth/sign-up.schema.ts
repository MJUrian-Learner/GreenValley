import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string({
      required_error: "Please confirm your password",
    }),
    isTermsAccepted: z
      .boolean({
        required_error: "You must accept the terms and conditions",
      })
      .refine((val) => val === true, {
        message: "You must agree to the terms and conditions.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
