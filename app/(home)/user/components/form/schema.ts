import { z } from "zod";
import { Role } from "@/types/users/auth/users";

export const UserSchema = z
  .object({
    image: z
      .object({
        key: z.string().nullable(),
        previewUrl: z.string().nullable(),
      }).nullable(),
    name: z.string().min(1, "Vui lòng nhập họ tên"),
    email: z.string().email("Email không hợp lệ"),

    password: z.string(),
    confirmPassword: z.string(),
    isTwoFactorEnabled: z.boolean(),

    role: z.nativeEnum(Role),
    emailVerified: z.coerce.date().nullable().optional(),
    reSendemail: z.coerce.number().int().min(0),
    banUntil: z.coerce.date().nullable().optional(),
  })
  .refine((data) => !data.password || data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

export type UserFormSchema = z.infer<typeof UserSchema>;
