import { Role } from "@/types/users/auth/users";
import { UserFormSchema } from "./schema";

export const userDefaultValues: UserFormSchema = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: Role.USER,
  image: null,
  isTwoFactorEnabled: false,
  emailVerified: false,
  reSendemail: 0,
  banUntil: null,
};
