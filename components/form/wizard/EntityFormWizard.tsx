"use client";

import {
  ReactNode,
  useEffect,
  useMemo,
} from "react";

import {
  FieldValues,
} from "react-hook-form";

import {
  useSearchParams,
} from "next/navigation";

import {
  AppForm,
} from "@/components/form/form-data";

import {
  useFormPage,
} from "@/components/form/form-context";

import {
  DraftEntity,
} from "@/components/daft/draft-config";

import FormWizard from "./FormWizard";
import FormWizardHeader from "./FormWizardHeader";
import FormWizardContent from "./FormWizardContent";
import FormWizardFooter from "./FormWizardFooter";

import {
  useAppForm,
} from "@/hooks/useAppForm";

import {
  useSubmit,
} from "@/hooks/useSubmit";

import {
  useFormDraft,
} from "@/hooks/useFormDraft";

import {
  useConfirmDialogStorage,
} from "@/hooks/localStorage/useConfirmDialogStorage";

import ConfirmRedirectDialog from "@/components/common/confirm/confirm-redirect-dialog";

// ======================================================
// BASE ENTITY
// ======================================================

export interface BaseEntity {
  id: string;
}

// ======================================================
// MUTATION TYPES
// ======================================================

export interface CreateMutation<TCreateInput> {
  mutateAsync: (
    data: TCreateInput,
  ) => Promise<unknown>;
}

export interface UpdateMutation<TUpdateInput> {
  mutateAsync: (
    params: {
      id: string;
      data: TUpdateInput;
    },
  ) => Promise<unknown>;
}

// ======================================================
// FORM CONFIG
// ======================================================

export interface EntityFormWizardConfig<
  TFormValues extends FieldValues,
  TInitialData extends BaseEntity,
  TCreateInput = TFormValues,
  TUpdateInput = TFormValues,
> {
  // ====================================================
  // FORM
  // ====================================================

  schema: any;

  defaultValues: TFormValues;

  initValues: (
    data: TInitialData,
  ) => TFormValues;

  /**
   * Form values -> API input
   */
  transformValues?: (
    values: TFormValues,
    initialData?: TInitialData,
  ) => TCreateInput | TUpdateInput;

  // ====================================================
  // WIZARD
  // ====================================================

  steps: any[];

  unlockAll?: boolean;

  // ====================================================
  // DRAFT
  // ====================================================

  /**
   * Enable / disable form draft.
   *
   * Default: true
   *
   * Set false if this form should not use draft.
   */
  draft?: boolean;

  /**
   * Entity name used for draft storage.
   */
  draftEntity?: DraftEntity;

  // ====================================================
  // MESSAGES
  // ====================================================

  messages: {
    create: string;
    update: string;
  };

  // ====================================================
  // REDIRECT
  // ====================================================

  redirectDefault: string;
}

// ======================================================
// PROPS
// ======================================================

export interface EntityFormWizardProps<
  TFormValues extends FieldValues,
  TInitialData extends BaseEntity,
  TCreateInput = TFormValues,
  TUpdateInput = TFormValues,
> {
  // ====================================================
  // DATA
  // ====================================================

  initialData?: TInitialData;

  redirect?: boolean;

  // ====================================================
  // CONFIG
  // ====================================================

  config: EntityFormWizardConfig<
    TFormValues,
    TInitialData,
    TCreateInput,
    TUpdateInput
  >;

  // ====================================================
  // MUTATIONS
  // ====================================================

  createMutation?: CreateMutation<TCreateInput>;

  updateMutation: UpdateMutation<TUpdateInput>;

  // ====================================================
  // CHILDREN
  // ====================================================

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
  // ====================================================
  // CONFIG
  // ====================================================

  const {
    schema,
    defaultValues,
    initValues,
    transformValues,
    steps,
    unlockAll,

    // Draft mặc định = true
    draft = true,

    draftEntity,

    messages,
    redirectDefault,
  } = config;

  // ====================================================
  // CONFIRM REDIRECT
  // ====================================================

  const {
    confirmDialog,
    openDialog,
    shouldShow,
    cancelDialog,
  } = useConfirmDialogStorage(
    "confirm-redirect",
  );

  // ====================================================
  // HOOKS
  // ====================================================

  const submit = useSubmit();

  const {
    setDirty,
  } = useFormPage();

  const searchParams = useSearchParams();

  // ====================================================
  // MODE
  // ====================================================

  const isEdit = Boolean(
    initialData?.id,
  );

  // ====================================================
  // DRAFT ID
  // ====================================================

  const currentDraftId = useMemo(() => {
    // Không sử dụng draft
    if (!draft) {
      return "";
    }

    // Edit
    if (
      isEdit &&
      initialData?.id
    ) {
      return `edit-${initialData.id}`;
    }

    // Create
    return (
      searchParams.get("draft") ??
      crypto.randomUUID()
    );
  }, [
    draft,
    isEdit,
    initialData?.id,
    searchParams,
  ]);

  // ====================================================
  // FORM
  // ====================================================

  const initialFormValues = useMemo(() => {
    return initialData
      ? initValues(initialData)
      : defaultValues;
  }, [
    initialData,
    initValues,
    defaultValues,
  ]);

  const {
    form,
  } = useAppForm<TFormValues>({
    schema,
    defaultValues: initialFormValues,
  });


  // ====================================================
  // SUBMITTING
  // ====================================================

  const isSubmitting =
    form.formState.isSubmitting;

  // ====================================================
  // DRAFT
  // ====================================================

  /**
   * Hook luôn được gọi.
   *
   * enabled = false sẽ disable toàn bộ
   * draft logic bên trong useFormDraft.
   */
  const {
    clearDraft,
  } = useFormDraft({
    form,
    entity: draftEntity ?? "",
    draftId: currentDraftId,
    enabled: draft,
  });

  // ====================================================
  // DIRTY
  // ====================================================

  useEffect(() => {
    setDirty(
      form.formState.isDirty,
    );
  }, [
    form.formState.isDirty,
    setDirty,
  ]);

  // ====================================================
  // SUBMIT
  // ====================================================

  const onSubmit = async (
    values: TFormValues,
  ) => {
    // --------------------------------------------------
    // UPDATE SAFETY
    // --------------------------------------------------

    if (
      isEdit &&
      !initialData?.id
    ) {
      throw new Error(
        "Cannot update entity: missing entity id",
      );
    }

    // --------------------------------------------------
    // TRANSFORM
    // --------------------------------------------------

    const payload =
      transformValues
        ? transformValues(
            values,
            initialData,
          )
        : values;

    // --------------------------------------------------
    // MUTATION
    // --------------------------------------------------

    await submit({
      form,

      mutation: isEdit
        ? () =>
            updateMutation.mutateAsync({
              id: initialData!.id,
              data: payload as TUpdateInput,
            })
        : () => {
            if (!createMutation) {
              throw new Error(
                "Create mutation is required when creating an entity",
              );
            }

            return createMutation.mutateAsync(
              payload as TCreateInput,
            );
          },

      success: isEdit
        ? messages.update
        : messages.create,

      redirect: redirect
        ? redirectDefault
        : undefined,
    });

    // --------------------------------------------------
    // CLEAR DRAFT
    // --------------------------------------------------

    if (
      draft &&
      draftEntity
    ) {
      clearDraft();
    }

    // --------------------------------------------------
    // CREATE WITHOUT REDIRECT
    // --------------------------------------------------

    if (!redirect) {
      openDialog();

      form.reset(
        defaultValues,
      );

      return;
    }

    // --------------------------------------------------
    // RESET
    // --------------------------------------------------

    form.reset(
      defaultValues,
    );
  };

  // ====================================================
  // RENDER
  // ====================================================

  return (
    <>
      {/* ==================================================
          CONFIRM REDIRECT
      ================================================== */}

      <ConfirmRedirectDialog
        redirectDefault={
          redirectDefault
        }
        confirmDialog={
          confirmDialog
        }
        shouldShow={
          shouldShow
        }
        cancelDialog={
          cancelDialog
        }
      />

      {/* ==================================================
          FORM
      ================================================== */}

      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={isSubmitting}
      >
        {/* ==================================================
            WIZARD
        ================================================== */}

        <FormWizard
          form={form}
          steps={steps}
          loading={isSubmitting}
          unlockAll={
            unlockAll ?? isEdit
          }
        >
          {/* ==================================================
              HEADER
          ================================================== */}

          <FormWizardHeader
            steps={steps}
          />

          {/* ==================================================
              CONTENT
          ================================================== */}

          <FormWizardContent>
            {children}
          </FormWizardContent>

          {/* ==================================================
              FOOTER
          ================================================== */}

          <FormWizardFooter
            form={form}
            onSubmit={onSubmit}
          />
        </FormWizard>
      </AppForm>
    </>
  );
}