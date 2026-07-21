"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";

import { HotelSchema, HotelFormValues } from "./schema";
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
import { useCreateHotel } from "@/hooks/hotel";
import { useSubmit } from "@/hooks/useSubmit";

export default function HotelForm() {
  const submit = useSubmit();
    const createHotel = useCreateHotel();
  const { form, mode, isUpdate } = useAppForm<HotelFormValues>({
    schema: HotelSchema,
    // mode: initialData ? "update" : "create",
    defaultValues: hotelDefaultValues,
  });


   const onSubmit = (values: HotelFormValues) =>
    submit({
      mutation: createHotel.mutateAsync(values),
      success: "Hotel created",
      redirect: "/hotel",
    });

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormWizard steps={hotelSteps}>
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

        <FormWizardFooter />
      </FormWizard>
    </AppForm>
  )
}
