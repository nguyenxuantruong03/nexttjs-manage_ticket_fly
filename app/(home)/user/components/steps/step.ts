import { KeyRound, ShieldCheck, User as UserIcon } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { User } from "@/types/users/auth/users";

import { UserFormSchema } from "../form/schema";

import { userFieldGroups } from "./field-groups";

export const userSteps = (
  initialData?: User,
): FormWizardStep<UserFormSchema>[] => {
  const hasAccount = !!initialData?.account?.id;

  return [
    {
      id: "basic",
      title: "Basic Information",
      description: "Basic user details",
      icon: UserIcon,
      fields: userFieldGroups.basic,
    },

    ...(!hasAccount
      ? [
          {
            id: "security",
            title: "Security",
            description: "Password and two-factor settings",
            icon: KeyRound,
            fields: userFieldGroups.security,
          },
        ]
      : []),

    {
      id: "account",
      title: "Account",
      description: "Role and account status",
      icon: ShieldCheck,
      fields: userFieldGroups.account,
    },
  ];
};
