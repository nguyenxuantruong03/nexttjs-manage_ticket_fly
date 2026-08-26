"use client";

import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { AppForm } from "@/components/form/form-data";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";
import { useFormDraft } from "@/hooks/useFormDraft";
import { useFormPage } from "@/components/form/form-context";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";

import BasicStep from "./step/basic.step";

import { SustainabilitySchema, SustainabilityFormSchema } from "./form/schema";
import { sustainabilityDefaultValues } from "./form/default-values";
import { initSustainabilityFormValues } from "./form/init-value";
import { sustainabilitySteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import { Sustainability } from "@/types/product-types/hotel/hotel-detail";

import {
  useCreateHotelSustainability,
  useUpdateHotelSustainability,
} from "@/hooks/product-types/hotel/hotel-sustainability";

interface SustainabilityFormProps {
  initialData?: Sustainability;
  redirect?: boolean;
}

export default function SustainabilityForm({
  initialData,
  redirect = true,
}: SustainabilityFormProps) {
  const redirectDefault = "hotel/sustainability";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createSustainability = useCreateHotelSustainability();
  const updateSustainability = useUpdateHotelSustainability();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<SustainabilityFormSchema>({
    schema: SustainabilitySchema,
    defaultValues: initialData
      ? initSustainabilityFormValues(initialData)
      : sustainabilityDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelSustainability,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: SustainabilityFormSchema) => {
    submit({
      mutation: initialData
        ? updateSustainability.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createSustainability.mutateAsync(values),

      success: isUpdate ? "Sustainability updated" : "Sustainability created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(sustainabilityDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(sustainabilityDefaultValues);
  };

  return (
    <>
      <ConfirmRedirectDialog
        redirectDefault={redirectDefault}
        confirmDialog={confirmDialog}
        shouldShow={shouldShow}
        cancelDialog={cancelDialog}
      />

      <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
        <FormWizard
          form={form}
          steps={sustainabilitySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={sustainabilitySteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
