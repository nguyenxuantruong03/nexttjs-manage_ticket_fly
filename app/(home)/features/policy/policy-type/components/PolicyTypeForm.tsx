"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreatePolicyType,
  useUpdatePolicyType,
} from "@/hooks/features/policy-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { PolicyType } from "@/types/common/features/policy/policy-type";

import { PolicyTypeFormSchema } from "./form/schema";

import { policyTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

interface PolicyTypeFormProps {
  initialData?: PolicyType;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function PolicyTypeForm({
  initialData,
  bookingTypeData,
  redirect = true,
}: PolicyTypeFormProps) {
  const createPolicyType = useCreatePolicyType();

  const updatePolicyType = useUpdatePolicyType();

  return (
    <EntityFormWizard<PolicyTypeFormSchema, PolicyType>
      initialData={initialData}
      redirect={redirect}
      config={policyTypeFormConfig}
      createMutation={createPolicyType}
      updateMutation={updatePolicyType}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
