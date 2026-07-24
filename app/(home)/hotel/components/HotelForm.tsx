"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";

import { HotelSchema, HotelFormSchema } from "./schema";
import { hotelDefaultValues } from "./form/default-values";

import { hotelSteps } from "./step/steps";

import BasicStep from "./step/basic.step.tsx";
import LocationStep from "./step/location.step";
import ImagesStep from "./step/images.step";
import RoomsStep from "./step/rooms.step";
import FacilitiesStep from "./step/facilities.step";
import MealsStep from "./step/meals.step";
import PricingStep from "./step/pricing.step";
import PoliciesStep from "./step/policies.step";
import AvailabilityStep from "./step/availability.step";
import SeoStep from "./step/seo.step";
import { useCreateHotel, useUpdateHotel } from "@/hooks/hotel";
import { useSubmit } from "@/hooks/useSubmit";
import { useFormPage } from "@/components/form/form-context";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { Hotel } from "@/types/bookings/hotel/core/hotel.types";
import { initHotelFormValues } from "./form/init-value";

interface HotelFormProps {
  initialData?: Hotel;
}

export default function HotelForm({ initialData }: HotelFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createHotel = useCreateHotel();
  const updateHotel = useUpdateHotel();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<HotelFormSchema>({
    schema: HotelSchema,
    defaultValues: initialData
      ? initHotelFormValues(initialData)
      : hotelDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Hotel,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: HotelFormSchema) => {
    submit({
      mutation: initialData
        ? updateHotel.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createHotel.mutateAsync(values),
      success: isUpdate ? "Hotel updated" : "Hotel created",
      redirect: "/hotel",
    });

    clearDraft();

    form.reset(values);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={hotelSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={hotelSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <LocationStep />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <ImagesStep />
          </FormWizardStep>

          <FormWizardStep index={3}>
            <RoomsStep />
          </FormWizardStep>

          <FormWizardStep index={4}>
            <FacilitiesStep />
          </FormWizardStep>

          <FormWizardStep index={5}>
            <MealsStep />
          </FormWizardStep>

          <FormWizardStep index={6}>
            <PricingStep />
          </FormWizardStep>

          <FormWizardStep index={7}>
            <PoliciesStep />
          </FormWizardStep>

          <FormWizardStep index={8}>
            <AvailabilityStep />
          </FormWizardStep>

          <FormWizardStep index={9}>
            <SeoStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
