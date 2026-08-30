"use client";

import { ReactNode, useEffect, useMemo } from "react";

import { FieldValues } from "react-hook-form";

import { useSearchParams } from "next/navigation";

import { AppForm } from "@/components/form/form-data";

import { useFormPage } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

import FormWizard from "./FormWizard";

import FormWizardHeader from "./FormWizardHeader";

import FormWizardContent from "./FormWizardContent";

import FormWizardFooter from "./FormWizardFooter";

import { useAppForm } from "@/hooks/useAppForm";

import { useSubmit } from "@/hooks/useSubmit";

import { useFormDraft } from "@/hooks/useFormDraft";

import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";

import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";

// ======================================================
// TYPES
// ======================================================

export interface BaseEntity {
  id: string;
}

export interface EntityFormWizardConfig<
  TFormValues extends FieldValues,
  TInitialData extends BaseEntity,
  TCreateInput = TFormValues,
  TUpdateInput = TFormValues,
> {
  schema: any;

  defaultValues: TFormValues;

  initValues: (data: TInitialData) => TFormValues;

  transformValues?: (
    values: TFormValues,
    initialData?: TInitialData,
  ) => TCreateInput | TUpdateInput;

  steps: any[];

  unlockAll?: boolean;

  draftEntity?: DraftEntity;

  messages: {
    create: string;

    update: string;
  };

  redirectDefault: string;
}

interface EntityFormWizardProps<
  TFormValues extends FieldValues,
  TInitialData extends BaseEntity,
  TCreateInput = TFormValues,
  TUpdateInput = TFormValues,
> {
  // ======================================================
  // DYNAMIC DATA
  // ======================================================

  initialData?: TInitialData;

  redirect?: boolean;

  // ======================================================
  // STATIC CONFIG
  // ======================================================

  config: EntityFormWizardConfig<
    TFormValues,
    TInitialData,
    TCreateInput,
    TUpdateInput
  >;

  // ======================================================
  // DYNAMIC MUTATIONS
  // ======================================================

  createMutation: any;

  updateMutation: any;

  // ======================================================
  // STEP CONTENT
  // ======================================================

  children: ReactNode;
}

// ======================================================
// COMPONENT
// ======================================================

export default function EntityFormWizard<
  TFormValues extends FieldValues,
  TInitialData extends BaseEntity,
  TCreateInput = TFormValues,
  TUpdateInput = TFormValues,
>({
  initialData,
  redirect = true,
  config,
  createMutation,
  updateMutation,
  children,
}: EntityFormWizardProps<
  TFormValues,
  TInitialData,
  TCreateInput,
  TUpdateInput
>) {
  const {
    schema,
    defaultValues,
    initValues,
    transformValues,
    steps,
    unlockAll,
    draftEntity,
    messages,
    redirectDefault,
  } = config;

  // ======================================================
  // CONFIRM REDIRECT
  // ======================================================

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  // ======================================================
  // HOOKS
  // ======================================================

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const searchParams = useSearchParams();

  // ======================================================
  // DRAFT ID
  // ======================================================

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  // ======================================================
  // FORM
  // ======================================================

  const { form, isUpdate } = useAppForm<TFormValues>({
    schema,

    defaultValues: initialData ? initValues(initialData) : defaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  // ======================================================
  // DRAFT
  // ======================================================

  const { clearDraft } = useFormDraft({
    form,

    entity: draftEntity ?? "",

    draftId: currentDraftId,
  });

  // ======================================================
  // DIRTY STATE
  // ======================================================

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = async (values: TFormValues) => {
    const payload = transformValues
      ? transformValues(values, initialData)
      : values;

    await submit({
      form,

      mutation: initialData
        ? updateMutation.mutateAsync({
            id: initialData.id,

            data: payload as TUpdateInput,
          })
        : createMutation.mutateAsync(payload as TCreateInput),

      success: isUpdate ? messages.update : messages.create,

      redirect: redirect ? redirectDefault : undefined,
    });

    if (draftEntity) {
      clearDraft();
    }

    // ======================================================
    // CREATE WITHOUT REDIRECT
    // ======================================================

    if (!redirect) {
      openDialog();

      form.reset(defaultValues);

      return;
    }

    // ======================================================
    // RESET
    // ======================================================

    form.reset(defaultValues);
  };

  // ======================================================
  // RENDER
  // ======================================================

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
          steps={steps}
          loading={isSubmitting}
          unlockAll={unlockAll ?? !!initialData}
        >
          <FormWizardHeader steps={steps} />

          <FormWizardContent>{children}</FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
