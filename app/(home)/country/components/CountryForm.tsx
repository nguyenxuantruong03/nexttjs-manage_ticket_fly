"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";

import { CountrySchema, CountryFormValues } from "./form/schema";

import { countryDefaultValues } from "./form/default-values";

import { countrySteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import LocationStep from "./step/location.step";
import MediaStep from "./step/media.step";
import SearchStep from "./step/search.step";
import StatusStep from "./step/status.step";

import { useCreateCountry } from "@/hooks/location/country";
import { useSubmit } from "@/hooks/useSubmit";

export default function CountryForm() {
  const submit = useSubmit();

  const createCountry = useCreateCountry();

  const { form } = useAppForm<CountryFormValues>({
    schema: CountrySchema,
    defaultValues: countryDefaultValues,
  });

  const onSubmit = (values: CountryFormValues) =>
    submit({
      mutation: createCountry.mutateAsync(values),
      success: "Country created",
      redirect: "/country",
    });

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormWizard steps={countrySteps}>
        <FormWizardHeader steps={countrySteps} />

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
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter />
      </FormWizard>
    </AppForm>
  );
}
