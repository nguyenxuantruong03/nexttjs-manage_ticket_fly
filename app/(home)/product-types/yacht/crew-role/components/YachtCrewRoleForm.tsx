"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import { YachtCrewRoleFormSchema } from "./form/schema";

import { yachtCrewRoleFormConfig } from "./config";

import {
  useCreateYachtCrewRole,
  useUpdateYachtCrewRole,
} from "@/hooks/product-types/yacht/crew-role";

import { YachtCrewRole } from "@/types/product-types/yacht/yacht-crew-role";

interface YachtCrewRoleFormProps {
  initialData?: YachtCrewRole;

  redirect?: boolean;
}

export default function YachtCrewRoleForm({
  initialData,
  redirect = true,
}: YachtCrewRoleFormProps) {
  const createYachtCrewRole = useCreateYachtCrewRole();

  const updateYachtCrewRole = useUpdateYachtCrewRole();

  return (
    <EntityFormWizard<YachtCrewRoleFormSchema, YachtCrewRole>
      initialData={initialData}
      redirect={redirect}
      config={yachtCrewRoleFormConfig}
      createMutation={createYachtCrewRole}
      updateMutation={updateYachtCrewRole}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
