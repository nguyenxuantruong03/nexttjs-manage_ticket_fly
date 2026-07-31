"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import BasicStep from "./step/basic.step";
import LocationStep from "./step/location.step";

import { useEffect, useMemo, useRef } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { Ward } from "@/types/bookings/location/ward";
import { WardFormSchema, WardSchema } from "./form/schema";
import { wardSteps } from "./step/steps";
import { useCreateWard, useUpdateWard } from "@/hooks/location/ward";
import { initwardFormValues } from "./form/init-value";
import { wardDefaultValues } from "./form/default-values";
import { District } from "@/types/bookings/location/district";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
import { City } from "@/types/bookings/location/city";
interface WardFormProps {
  initialData?: Ward;
  districtData: District[];
  cityData: City[]
  redirect?: boolean;
}

export default function WardForm({
  initialData,
  districtData,
  cityData,
  redirect = true,
}: WardFormProps) {
  const redirectDefault = "/ward";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createWard = useCreateWard();
  const updateWard = useUpdateWard();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<WardFormSchema>({
    schema: WardSchema,
    defaultValues: initialData
      ? initwardFormValues(initialData)
      : wardDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Ward,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: WardFormSchema) => {
    submit({
      mutation: initialData
        ? updateWard.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createWard.mutateAsync(values),
      success: isUpdate ? "Ward updated" : "Ward created",
      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(wardDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(wardDefaultValues);
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
          steps={wardSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={wardSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep cityData={cityData} districtData={districtData} />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <LocationStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
