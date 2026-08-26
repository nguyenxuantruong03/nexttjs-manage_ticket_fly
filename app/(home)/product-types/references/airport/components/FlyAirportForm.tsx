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

import { useEffect, useMemo, useRef } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { FlyAirportFormSchema, FlyAirportSchema } from "./form/schema";
import { initFlyAirportFormValues } from "./form/init-value";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";
import { flyAirportDefaultValues } from "./form/default-values";
import {
  useCreateFlyAirport,
  useUpdateFlyAirport,
} from "@/hooks/product-types/references/airport";
import AirportStep from "./step/airport.step";
import RelationStep from "./step/relation.step";
import { flyAirportSteps } from "./step/steps";
import { FlyAirport } from "@/types/product-types/references/airport/airport.types";
import { Address } from "@/types/location/address";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";

interface FlyAirportFormProps {
  initialData?: FlyAirport;
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
  redirect?: boolean;
}

export default function FlyAirportForm({
  initialData,
  addresses,
  countries,
  cities,
  districts,
  wards,
  redirect = true,
}: FlyAirportFormProps) {
  const redirectDefault = "/ticket-fly/fly-aiport";
  const resetWizardRef = useRef<(() => void) | null>(null);
  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();
  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createFlyAirport = useCreateFlyAirport();
  const updateFlyAirport = useUpdateFlyAirport();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<FlyAirportFormSchema>({
    schema: FlyAirportSchema,
    defaultValues: initialData
      ? initFlyAirportFormValues(initialData)
      : flyAirportDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.FlyAirport,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: FlyAirportFormSchema) => {
    submit({
      mutation: initialData
        ? updateFlyAirport.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyAirport.mutateAsync(values),
      success: isUpdate ? "FlyAirport updated" : "FlyAirport created",
      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(flyAirportDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(flyAirportDefaultValues);
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
          steps={flyAirportSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyAirportSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <AirportStep />
            </FormWizardStep>

            <FormWizardStep index={2}>
              <RelationStep
                addresses={addresses}
                countries={countries}
                cities={cities}
                districts={districts}
                wards={wards}
              />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
