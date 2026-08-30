import { FieldPath } from "react-hook-form";
import { UserFormSchema } from "../form/schema";

type UserFieldPath = FieldPath<UserFormSchema>;

export const userFieldGroups: Record<string, readonly UserFieldPath[]> = {
  basic: ["image", "name", "email"],

  security: ["password", "confirmPassword", "isTwoFactorEnabled"],

  account: ["role", "emailVerified", "reSendemail", "banUntil"],
};
