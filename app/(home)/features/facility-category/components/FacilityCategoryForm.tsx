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

import { facilityCategorySteps } from "./step/steps";
import BasicStep from "./step/basic.step";
import StatusStep from "./step/status.step";

import { initFacilityCategoryFormValues } from "./form/init-value";
import { facilityCategoryDefaultValues } from "./form/default-values";
import { FacilityCategoryFormSchema, schema } from "./form/schema";

import {
  useCreateFacilityCategory,
  useUpdateFacilityCategory,
} from "@/hooks/features/facility-category";

import { FacilityCategory } from "@/types/common/features/facility/facility-category";
import BookingTypeStep from "./step/booking-type.step";
import { BookingType } from "@/types/common/commerce/booking-type";

interface FacilityCategoryFormProps {
  initialData?: FacilityCategory;
  bookingTypeData: BookingType[];
}

export default function FacilityCategoryForm({
  initialData,
  bookingTypeData,
}: FacilityCategoryFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createFacilityCategory = useCreateFacilityCategory();
  const updateFacilityCategory = useUpdateFacilityCategory();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FacilityCategoryFormSchema>({
    schema,
    defaultValues: initialData
      ? initFacilityCategoryFormValues(initialData)
      : facilityCategoryDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.FacilityCategory,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: FacilityCategoryFormSchema) => {
    await submit({
      mutation: initialData
        ? updateFacilityCategory.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFacilityCategory.mutateAsync(values),

      success: isUpdate
        ? "Facility category updated"
        : "Facility category created",

      redirect: "/features/facility-category",
    });

    clearDraft();

    form.reset(facilityCategoryDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={facilityCategorySteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={facilityCategorySteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>
          <FormWizardStep index={1}>
            <BookingTypeStep bookingTypeData={bookingTypeData} />
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
