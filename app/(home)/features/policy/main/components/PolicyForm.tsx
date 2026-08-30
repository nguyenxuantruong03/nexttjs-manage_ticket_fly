"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useCreatePolicy, useUpdatePolicy } from "@/hooks/features/policy";

import { BookingType } from "@/types/common/commerce/booking-type";

import { Policy } from "@/types/common/features/policy/policy";

import { PolicyType } from "@/types/common/features/policy/policy-type";

import { PolicyFormSchema } from "./form/schema";

import { policyFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import PolicyTypeStep from "./step/policy-type.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

interface PolicyFormProps {
  initialData?: Policy;

  bookingTypeData: BookingType[];

  policyTypeData: PolicyType[];

  redirect?: boolean;
}

export default function PolicyForm({
  initialData,
  bookingTypeData,
  policyTypeData,
  redirect = true,
}: PolicyFormProps) {
  const createPolicy = useCreatePolicy();

  const updatePolicy = useUpdatePolicy();

  return (
    <EntityFormWizard<PolicyFormSchema, Policy>
      initialData={initialData}
      redirect={redirect}
      config={policyFormConfig}
      createMutation={createPolicy}
      updateMutation={updatePolicy}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <PolicyTypeStep
          policyTypeData={policyTypeData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
