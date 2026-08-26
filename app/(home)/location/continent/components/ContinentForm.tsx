"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { ContinentSchema, ContinentFormSchema } from "./form/schema";
import { continentDefaultValues } from "./form/default-values";
import { continentSteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import MediaStep from "./step/media.step";
import DisplayStep from "./step/display.step";
import StatusStep from "./step/status.step";

import {
  useCreateContinent,
  useUpdateContinent,
} from "@/hooks/location/country/continent";

import { useEffect, useMemo, useRef } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";

import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";

import { initContinentFormValues } from "./form/init-value";

import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
import { Continent } from "@/types/location/country/continent.type";

interface ContinentFormProps {
  initialData?: Continent;
  redirect?: boolean;
}

export default function ContinentForm({
  initialData,
  redirect = true,
}: ContinentFormProps) {
  const redirectDefault = "/location/continent";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createContinent = useCreateContinent();
  const updateContinent = useUpdateContinent();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<ContinentFormSchema>({
    schema: ContinentSchema,
    defaultValues: initialData
      ? initContinentFormValues(initialData)
      : continentDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Continent,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: ContinentFormSchema) => {
    submit({
      mutation: initialData
        ? updateContinent.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createContinent.mutateAsync(values),

      success: isUpdate ? "Continent updated" : "Continent created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(continentDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(continentDefaultValues);
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
          steps={continentSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={continentSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <MediaStep />
            </FormWizardStep>

            <FormWizardStep index={2}>
              <DisplayStep />
            </FormWizardStep>

            <FormWizardStep index={3}>
              <StatusStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
