import { object, TypeOf, string } from "zod";

export const createUser = object({
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
      .min(6, "Password should be at least 6 characters")
      .max(11, "Password should be no longer than 11 characters"),
  }),
});

export const updateUser = object({
  body: object({
    id: string({
      required_error: "Id is required",
    }),
    username: string().nullable().optional(),
    pokemon: string().nullable().optional(),
  }),
});

export const getUserById = object({
  body: object({
    id: string({
      required_error: "Id is required",
    }),
  }),
});

export const getUserByEmail = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email(),
  }),
});

export type CreateUserInput = TypeOf<typeof createUser>["body"];
export type UpdateUserInput = TypeOf<typeof updateUser>["body"];
export type GetUserByIdInput = TypeOf<typeof getUserById>["body"];
export type GetUserByEmailInput = TypeOf<typeof getUserByEmail>["body"];
