"use client";

import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { AppForm } from "@/components/form/form-data";
import { useFormPage } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";
import { useFormDraft } from "@/hooks/useFormDraft";

import { facilitySteps } from "./step/steps";
import BasicStep from "./step/basic.step";
import CategoryStep from "./step/category.step";
import StatusStep from "./step/status.step";

import { initFacilityFormValues } from "./form/init-value";
import { facilityDefaultValues } from "./form/default-values";
import { FacilityFormSchema, schema } from "./form/schema";
import {
  useCreateFacility,
  useUpdateFacility,
} from "@/hooks/features/facility";
import { Facility } from "@/types/common/features/facility/facility";
import { BookingType } from "@/types/common/commerce/booking-type";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";

interface FacilityFormProps {
  initialData?: Facility;
  bookingTypeData: BookingType[];
  facilityCategoryData: FacilityCategory[]
}

export default function FacilityForm({
  initialData,
  bookingTypeData,
  facilityCategoryData
}: FacilityFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createFacility = useCreateFacility();
  const updateFacility = useUpdateFacility();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FacilityFormSchema>({
    schema,
    defaultValues: initialData
      ? initFacilityFormValues(initialData)
      : facilityDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Facility,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: FacilityFormSchema) => {
    await submit({
      mutation: initialData
        ? updateFacility.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFacility.mutateAsync(values),

      success: isUpdate ? "Facility updated" : "Facility created",

      redirect: "/facility",
    });

    clearDraft();

    form.reset(facilityDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={facilitySteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={facilitySteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <CategoryStep facilityCategoryData={facilityCategoryData} bookingTypeData={bookingTypeData}/>
          </FormWizardStep>

          <FormWizardStep index={2}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
