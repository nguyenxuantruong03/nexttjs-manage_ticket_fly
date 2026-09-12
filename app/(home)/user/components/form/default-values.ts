import { Role } from "@/types/users/auth/users";
import { UserFormSchema } from "./schema";

export const userDefaultValues: UserFormSchema = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: Role.USER,

  // ======================================================
  // IMAGE
  // ======================================================

  image: {
    key: null,
    previewUrl: null,
  },

  // ======================================================
  // SETTINGS
  // ======================================================

  isTwoFactorEnabled: false,

  emailVerified: new Date(),

  reSendemail: 0,

  banUntil: null,
};