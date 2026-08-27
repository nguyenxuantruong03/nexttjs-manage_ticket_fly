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
import AddonStep from "./step/addon.step";
import StatusStep from "./step/status.step";

import { useEffect, useMemo, useRef } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";

import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";

import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";

import { flyAirlineDefaultValues } from "./form/default-values";
import { initFlyAirlineFormValues } from "./form/init-value";
import { flyAirlineSteps } from "./step/steps";

import {
  useCreateFlyAirline,
  useUpdateFlyAirline,
} from "@/hooks/product-types/references/airline";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";
import {
  FlyAirlineFormSchema,
  FlyAirlineSchema,
} from "./schema/airline.schema";
import ImagesStep from "./step/image.step";
import WifiPackageStep from "./step/wifipackage.step";
import InterlineStep from "./step/interline.step";
import {
  MarketingCodeshareStep,
  OperatingCodeshareStep,
} from "./step/codeshare.step";

interface FlyAirlineFormProps {
  initialData?: FlyAirline;
  redirect?: boolean;
}

export default function FlyAirlineForm({
  initialData,
  redirect = true,
}: FlyAirlineFormProps) {
  const redirectDefault = "/product-types/references/airline/main";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyAirline = useCreateFlyAirline();
  const updateFlyAirline = useUpdateFlyAirline();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyAirlineFormSchema>({
    schema: FlyAirlineSchema,
    defaultValues: initialData
      ? initFlyAirlineFormValues(initialData)
      : flyAirlineDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.FlyAirline,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateFlyAirline.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyAirline.mutateAsync(values),

      success: isUpdate ? "Fly airline updated" : "Fly airline created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flyAirlineDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flyAirlineDefaultValues);
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
          steps={flyAirlineSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyAirlineSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <ImagesStep />
            </FormWizardStep>

            <FormWizardStep index={2}>
              <AddonStep />
            </FormWizardStep>

            <FormWizardStep index={3}>
              <WifiPackageStep />
            </FormWizardStep>

            <FormWizardStep index={4}>
              <InterlineStep />
            </FormWizardStep>

            <FormWizardStep index={5}>
              <MarketingCodeshareStep />
            </FormWizardStep>

            <FormWizardStep index={5}>
              <OperatingCodeshareStep />
            </FormWizardStep>

            <FormWizardStep index={6}>
              <StatusStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
