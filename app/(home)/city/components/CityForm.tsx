"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { CitySchema, CityFormValues } from "./form/schema";

import { cityDefaultValues } from "./form/default-values";

import { citySteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import LocationStep from "./step/location.step";
import MediaStep from "./step/media.step";
import SearchStep from "./step/search.step";
import TravelStep from "./step/travel.step";
import SeoStep from "./step/seo.step";
import StatusStep from "./step/status.step";

import { useCreateCity } from "@/hooks/location/city";

export default function CityForm() {
  const submit = useSubmit();

  const createCity = useCreateCity();

  const { form, mode, isUpdate } = useAppForm<CityFormValues>({
    schema: CitySchema,

    defaultValues: cityDefaultValues,
  });

  const onSubmit = (values: CityFormValues) =>
    submit({
      mutation: createCity.mutateAsync(values),

      success: "City created",

      redirect: "/city",
    });

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormWizard steps={citySteps}>
        <FormWizardHeader steps={citySteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <LocationStep />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <MediaStep />
          </FormWizardStep>

          <FormWizardStep index={3}>
            <SearchStep />
          </FormWizardStep>

          <FormWizardStep index={4}>
            <TravelStep />
          </FormWizardStep>

          <FormWizardStep index={5}>
            <SeoStep />
          </FormWizardStep>

          <FormWizardStep index={6}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter />
      </FormWizard>
    </AppForm>
  );
}
