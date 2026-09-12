import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { User } from "@/types/users/auth/users";

import { UserFormSchema, UserSchema } from "./form/schema";
import { userDefaultValues } from "./form/default-values";
import { initUserFormValues } from "./form/init-value";
import { userSteps } from "./steps/step";

type UserPayload = Partial<User>;

export const userFormConfig = (
  userData?: User,
): EntityFormWizardConfig<UserFormSchema, User, UserPayload, UserPayload> => ({
  schema: UserSchema,

  defaultValues: userDefaultValues,

  initValues: initUserFormValues,

  steps: userSteps(userData),

  messages: {
    create: "Tạo người dùng thành công",
    update: "Cập nhật người dùng thành công",
  },
  draft: false,
  redirectDefault: "/user",
});
