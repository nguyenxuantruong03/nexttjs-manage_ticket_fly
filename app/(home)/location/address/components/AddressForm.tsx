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
import { City } from "@/types/bookings/location/city";
import { Address } from "@/types/bookings/location/address";
import { addressSteps } from "./step/steps";
import { AddressFormSchema, AddressSchema } from "./form/schema";
import { addressDefaultValues } from "./form/default-values";
import { initAddressFormValues } from "./form/init-value";
import { useCreateAddress, useUpdateAddress } from "@/hooks/location/address";
import { District } from "@/types/bookings/location/district";
import { Ward } from "@/types/bookings/location/ward";
import { Country } from "@/types/bookings/location/country";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";
import { Timezone } from "@/types/bookings/location/timezone";
import { Currency } from "@/types/bookings/location/currency";
import { SearchTag } from "@/types/bookings/search/tag.types";
import { Language } from "@/types/bookings/location/language";
interface AddressFormProps {
  initialData?: Address;
  cityData: City[];
  districtData: District[];
  wardData: Ward[];
  countryData: Country[];
  timezoneData: Timezone[];
  currencyData: Currency[];
  searchTags: SearchTag[];
  languageData: Language[];
  redirect?: boolean;
}

export default function AddressForm({
  initialData,
  cityData,
  districtData,
  wardData,
  countryData,
  currencyData,
  timezoneData,
  searchTags,
  languageData,
  redirect = true,
}: AddressFormProps) {
  const redirectDefault = "/address";
  const resetWizardRef = useRef<(() => void) | null>(null);
  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();
  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createAddress = useCreateAddress();
  const updateAddress = useUpdateAddress();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<AddressFormSchema>({
    schema: AddressSchema,
    defaultValues: initialData
      ? initAddressFormValues(initialData)
      : addressDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Address,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: AddressFormSchema) => {
    submit({
      mutation: initialData
        ? updateAddress.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createAddress.mutateAsync(values),
      success: isUpdate ? "Address updated" : "Address created",
      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(addressDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(addressDefaultValues);
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
          steps={addressSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={addressSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep
                cityData={cityData}
                districtData={districtData}
                wardData={wardData}
              />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <LocationStep
                currencyData={currencyData}
                languageData={languageData}
                timezoneData={timezoneData}
                searchTags={searchTags}
                cityData={cityData}
                countryData={countryData}
              />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
