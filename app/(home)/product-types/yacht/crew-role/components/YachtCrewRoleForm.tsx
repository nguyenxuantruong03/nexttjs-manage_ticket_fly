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
import StatusStep from "./step/status.step";

import {
  YachtCrewRoleSchema,
  YachtCrewRoleFormSchema,
} from "./form/schema";
import { yachtCrewRoleDefaultValues } from "./form/default-values";
import { initYachtCrewRoleFormValues } from "./form/init-value";
import { yachtCrewRoleSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateYachtCrewRole,
  useUpdateYachtCrewRole,
} from "@/hooks/product-types/yacht/crew-role";
import { YachtCrewRole } from "@/types/product-types/yacht/yacht-crew-role";

interface YachtCrewRoleFormProps {
  initialData?: YachtCrewRole;
  redirect?: boolean;
}

export default function YachtCrewRoleForm({
  initialData,
  redirect = true,
}: YachtCrewRoleFormProps) {
  const redirectDefault = "yacht/crew-role";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createYachtCrewRole = useCreateYachtCrewRole();
  const updateYachtCrewRole = useUpdateYachtCrewRole();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<YachtCrewRoleFormSchema>({
    schema: YachtCrewRoleSchema,
    defaultValues: initialData
      ? initYachtCrewRoleFormValues(initialData)
      : yachtCrewRoleDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.YachtCrewRole,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: YachtCrewRoleFormSchema) => {
    submit({
      mutation: initialData
        ? updateYachtCrewRole.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createYachtCrewRole.mutateAsync(values),

      success: isUpdate
        ? "Yacht crew role updated"
        : "Yacht crew role created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(yachtCrewRoleDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(yachtCrewRoleDefaultValues);
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
          steps={yachtCrewRoleSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={yachtCrewRoleSteps} />

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