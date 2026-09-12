"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { User } from "@/types/users/auth/users";

import { UserFormSchema } from "./form/schema";

import { userFormConfig } from "./config";

import { useUpdateUser } from "@/hooks/user";

import BasicSection from "./steps/BasicSection";

import SecuritySection from "./steps/SecuritySection";

import AccountSection from "./steps/AccountSection";

interface UserFormProps {
  initialData?: User;
}

export default function UserForm({ initialData }: UserFormProps) {
  const updateUser = useUpdateUser();

  const hasAccount = !!initialData?.account?.id;

  return (
    <EntityFormWizard<UserFormSchema, User, Partial<User>, Partial<User>>
      initialData={initialData}
      config={userFormConfig(initialData)}
      updateMutation={updateUser}
    >
      <FormWizardStep index={0}>
        <BasicSection />
      </FormWizardStep>

      {!hasAccount && (
        <FormWizardStep index={1}>
          <SecuritySection isUpdate={!!initialData} />
        </FormWizardStep>
      )}

      <FormWizardStep index={hasAccount ? 1 : 2}>
        <AccountSection />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
