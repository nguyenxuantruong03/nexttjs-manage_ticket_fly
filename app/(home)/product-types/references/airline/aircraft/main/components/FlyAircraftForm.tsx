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
import SpecificationStep from "./step/specification.step";
import FacilitiesStep from "./step/facilities.step";
import CabinsStep from "./step/cabins.step";
import ImagesStep from "./step/images.step";
import StatusStep from "./step/status.step";

import { useEffect, useMemo, useRef } from "react";

import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";

import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";

import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";

import { flyAircraftDefaultValues } from "./form/default-values";
import { initFlyAircraftFormValues } from "./form/init-value";
import { flyAircraftSteps } from "./step/steps";

import {
  useCreateFlyAircraft,
  useUpdateFlyAircraft,
} from "@/hooks/product-types/references/airline/aircraft";
import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";
import {
  FlyAircraftFormSchema,
  FlyAircraftSchema,
} from "./schema/aircraft.schema";
import SeatMapStep from "./step/seat map.step";
import ScheduleStep from "./step/schedule.step";
import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

interface FlyAircraftFormProps {
  initialData?: FlyAircraft;
  airlineData: FlyAirline[]
  redirect?: boolean;
}

export default function FlyAircraftForm({
  initialData,
  airlineData,
  redirect = true,
}: FlyAircraftFormProps) {
  const redirectDefault = "/product-types/references/airline/aircraft";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyAircraft = useCreateFlyAircraft();
  const updateFlyAircraft = useUpdateFlyAircraft();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyAircraftFormSchema>({
    schema: FlyAircraftSchema,

    defaultValues: initialData
      ? initFlyAircraftFormValues(initialData)
      : flyAircraftDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.FlyAircraft,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateFlyAircraft.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyAircraft.mutateAsync(values),

      success: isUpdate ? "Fly aircraft updated" : "Fly aircraft created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flyAircraftDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flyAircraftDefaultValues);
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
          steps={flyAircraftSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyAircraftSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep airlineData={airlineData}/>
            </FormWizardStep>

            <FormWizardStep index={1}>
              <SpecificationStep />
            </FormWizardStep>

            <FormWizardStep index={2}>
              <FacilitiesStep />
            </FormWizardStep>

            <FormWizardStep index={3}>
              <CabinsStep />
            </FormWizardStep>

            <FormWizardStep index={4}>
              <ImagesStep />
            </FormWizardStep>

            <FormWizardStep index={5}>
              <SeatMapStep />
            </FormWizardStep>

            <FormWizardStep index={6}>
              <StatusStep />
            </FormWizardStep>

            <FormWizardStep index={7}>
              <ScheduleStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
