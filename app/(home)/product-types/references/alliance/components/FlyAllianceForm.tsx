"use client";

import { useEffect, useMemo, useRef } from "react";

import { AppForm } from "@/components/form/form-data";
import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";

import { DraftEntity } from "@/components/daft/draft-config";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";
import { useFormDraft } from "@/hooks/useFormDraft";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";

import { useFormPage } from "@/components/form/form-context";

import { useSearchParams } from "next/navigation";

import BasicStep from "./step/basic.step";

import { initFlyAllianceFormValues } from "./form/init-value";
import { flyAllianceDefaultValues } from "./form/default-values";
import { flyAllianceSteps } from "./step/steps";

import {
  useCreateFlyAlliance,
  useUpdateFlyAlliance,
} from "@/hooks/product-types/references/alliance";
import { FlyAlliance } from "@/types/product-types/references/alliance/alliance.types";
import AirlinesStep from "./step/airlines.step";
import { FlyAllianceFormSchema, FlyAllianceSchema } from "./schema/alliance.schema";

interface FlyAllianceFormProps {
  initialData?: FlyAlliance;
  redirect?: boolean;
}

export default function FlyAllianceForm({
  initialData,
  redirect = true,
}: FlyAllianceFormProps) {
  const redirectDefault = "/product-types/references/alliance";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyAlliance = useCreateFlyAlliance();
  const updateFlyAlliance = useUpdateFlyAlliance();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyAllianceFormSchema>({
    schema: FlyAllianceSchema,
    defaultValues: initialData
      ? initFlyAllianceFormValues(initialData)
      : flyAllianceDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.FlyAlliance,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateFlyAlliance.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyAlliance.mutateAsync(values),

      success: isUpdate ? "Fly Alliance updated" : "Fly Alliance created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(flyAllianceDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(flyAllianceDefaultValues);
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
          steps={flyAllianceSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyAllianceSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <AirlinesStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
