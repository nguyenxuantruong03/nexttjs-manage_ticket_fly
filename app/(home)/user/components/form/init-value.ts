import { User } from "@/types/users/auth/users";

import { userDefaultValues } from "./default-values";
import { UserFormSchema } from "./schema";

export function initUserFormValues(user?: User): UserFormSchema {
  if (!user) {
    return structuredClone(userDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    image: user.image
      ? {
          key: user.image,
          previewUrl: null,
        }
      : {
          key: null,
          previewUrl: null,
        },

    name: user.name ?? "",
    email: user.email ?? "",

    // ======================================================
    // PASSWORD
    // ======================================================

    password: "",
    confirmPassword: "",

    // ======================================================
    // SETTINGS
    // ======================================================

    isTwoFactorEnabled: user.isTwoFactorEnabled ?? false,

    role: user.role ?? userDefaultValues.role,

    emailVerified: user.emailVerified ?? null,

    reSendemail: user.reSendemail ?? 0,

    banUntil: user.banUntil ?? null,
  };
}
