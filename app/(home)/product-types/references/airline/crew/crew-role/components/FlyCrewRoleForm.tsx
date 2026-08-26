"use client";

import { useEffect, useMemo, useRef } from "react";

import { useSearchParams } from "next/navigation";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import BasicStep from "./step/basic.step";
import StatusStep from "./step/status.step";

import { useFormPage } from "@/components/form/form-context";

import { useFormDraft } from "@/hooks/useFormDraft";

import { DraftEntity } from "@/components/daft/draft-config";

import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";

import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";

import { FlyCrewRoleFormSchema, FlyCrewRoleSchema } from "./form/schema";

import { flyCrewRoleDefaultValues } from "./form/default-values";

import { initFlyCrewRoleFormValues } from "./form/init-value";

import { flyCrewRoleSteps } from "./step/steps";

import {
  useCreateFlyCrewRole,
  useUpdateFlyCrewRole,
} from "@/hooks/product-types/references/airline/crew/crew-role";
import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";


interface FlyCrewRoleFormProps {
  initialData?: FlyCrewRole;

  redirect?: boolean;
}

export default function FlyCrewRoleForm({
  initialData,
  redirect = true,
}: FlyCrewRoleFormProps) {
  const redirectDefault = "/product-types/references/airline/crew/crew-role";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyCrewRole = useCreateFlyCrewRole();

  const updateFlyCrewRole = useUpdateFlyCrewRole();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyCrewRoleFormSchema>({
    schema: FlyCrewRoleSchema,

    defaultValues: initialData
      ? initFlyCrewRoleFormValues(initialData)
      : flyCrewRoleDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.FlyCrewRole,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FlyCrewRoleFormSchema) => {
    submit({
      mutation: initialData
        ? updateFlyCrewRole.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyCrewRole.mutateAsync(values),

      success: isUpdate ? "Fly crew role updated" : "Fly crew role created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flyCrewRoleDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flyCrewRoleDefaultValues);
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
          steps={flyCrewRoleSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyCrewRoleSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <StatusStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
