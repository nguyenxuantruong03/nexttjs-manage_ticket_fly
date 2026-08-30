"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import { FlyCrewRoleFormSchema } from "./form/schema";

import {
  useCreateFlyCrewRole,
  useUpdateFlyCrewRole,
} from "@/hooks/product-types/references/airline/crew/crew-role";

import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";

import { flyCrewRoleFormConfig } from "./config";

interface FlyCrewRoleFormProps {
  initialData?: FlyCrewRole;

  redirect?: boolean;
}

export default function FlyCrewRoleForm({
  initialData,

  redirect = true,
}: FlyCrewRoleFormProps) {
  const createFlyCrewRole = useCreateFlyCrewRole();

  const updateFlyCrewRole = useUpdateFlyCrewRole();

  return (
    <EntityFormWizard<FlyCrewRoleFormSchema, FlyCrewRole>
      initialData={initialData}
      redirect={redirect}
      config={flyCrewRoleFormConfig}
      createMutation={createFlyCrewRole}
      updateMutation={updateFlyCrewRole}
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
