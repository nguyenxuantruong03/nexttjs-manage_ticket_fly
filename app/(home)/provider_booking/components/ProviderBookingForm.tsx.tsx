"use client";

import { AppForm } from "@/components/form/form-data";
import BasicSection from "./steps/BasicSection";
import CompanySection from "./steps/CompanySection";
import ContactSection from "./steps/ContactSection";
import SocialSection from "./steps/SocialSection";
import ServiceSection from "./steps/booking-type.step";
import { ProviderBookingFormSchema, schema } from "./form/schema";
import { providerBookingDefaultValues } from "./form/default-values";
import { useAppForm } from "@/hooks/useAppForm";
import {
  useCreateProviderBooking,
  useUpdateProviderBooking,
} from "@/hooks/provider-booking";
import { useSubmit } from "@/hooks/useSubmit";
import { providerBookingSteps } from "./steps/steps";
import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import { useEffect, useMemo } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { initProviderBookingFormValues } from "./form/init-value";
import { ProviderBooking } from "@/types/users/provider-bookings";
import { User } from "@/types/users/auth/users";
import { Address } from "@/types/location/address";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import BookingTypeStep from "./steps/booking-type.step";
import { BookingType } from "@/types/common/commerce/booking-type";

interface ProviderBookingFormProps {
  initialData?: ProviderBooking;
  userDatas: User[];
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
  bookingTypeData: BookingType[];
}

export default function ProviderBookingForm({
  initialData,
  userDatas,
  addresses,
  countries,
  cities,
  districts,
  wards,
  bookingTypeData,
}: ProviderBookingFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createProviderBooking = useCreateProviderBooking();
  const updateProviderBooking = useUpdateProviderBooking();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<ProviderBookingFormSchema>({
    schema,
    defaultValues: initialData
      ? initProviderBookingFormValues(initialData)
      : providerBookingDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.ProviderBooking,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: ProviderBookingFormSchema) => {
    submit({
      mutation: initialData
        ? updateProviderBooking.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createProviderBooking.mutateAsync(values),
      success: isUpdate ? "Provider updated" : "Provider created",
      redirect: "/provider_booking",
    });

    clearDraft();

    form.reset(providerBookingDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={providerBookingSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={providerBookingSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicSection
              userDatas={userDatas}
              addresses={addresses}
              countries={countries}
              cities={cities}
              districts={districts}
              wards={wards}
            />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <CompanySection />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <ContactSection />
          </FormWizardStep>

          <FormWizardStep index={3}>
            <SocialSection />
          </FormWizardStep>

          <FormWizardStep index={4}>
            <BookingTypeStep bookingTypeData={bookingTypeData} />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
