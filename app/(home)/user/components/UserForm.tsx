"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { User } from "@/types/users/auth/users";

import { UserFormSchema } from "./form/schema";

import { userFormConfig } from "./config";

import { useCreateUser, useUpdateUser } from "@/hooks/user";

import BasicSection from "./steps/BasicSection";

import SecuritySection from "./steps/SecuritySection";

import AccountSection from "./steps/AccountSection";

interface UserFormProps {
  initialData?: User;
}

export default function UserForm({ initialData }: UserFormProps) {
  const createUser = useCreateUser();

  const updateUser = useUpdateUser();

  return (
    <EntityFormWizard<UserFormSchema, User, Partial<User>, Partial<User>>
      initialData={initialData}
      config={userFormConfig}
      createMutation={createUser}
      updateMutation={updateUser}
    >
      <FormWizardStep index={0}>
        <BasicSection />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <SecuritySection isUpdate={!!initialData} />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <AccountSection />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
