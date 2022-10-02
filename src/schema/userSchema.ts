import { object, TypeOf, string } from "zod";

export const userSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
    username: string({
      required_error: "Username is required",
    }),
    password: string({
      required_error: "Password is required",
    })
      .min(6, "Password shuld be at least 6 characters")
      .max(11, "Password shuld be no longer than 11 characters"),
  }),
});

export type CreateUserInput = TypeOf<typeof userSchema>["body"];
