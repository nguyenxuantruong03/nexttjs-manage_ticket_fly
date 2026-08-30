import { KeyRound, ShieldCheck, User as UserIcon } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { userFieldGroups } from "./field-groups";
import { UserFormSchema } from "../form/schema";

export const userSteps: FormWizardStep<UserFormSchema>[] = [
  {
    id: "basic",

    title: "Basic Information",

    description: "Basic user details",

    icon: UserIcon,

    fields: userFieldGroups.basic,
  },

  {
    id: "security",

    title: "Security",

    description: "Password and two-factor settings",

    icon: KeyRound,

    fields: userFieldGroups.security,
  },

  {
    id: "account",

    title: "Account",

    description: "Role and account status",

    icon: ShieldCheck,

    fields: userFieldGroups.account,
  },
];
