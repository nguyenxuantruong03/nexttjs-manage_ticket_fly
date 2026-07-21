"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { yachtSteps } from "./step/steps";

import { YachtFormValues, YachtSchema } from "./schema/core/yacht.schema";
import { defaultYachtValues } from "./form/default-values";
import { useCreateYacht } from "@/hooks/yacht";

// STEPS
import BasicStep from "./step/basic.step";
import VehicleStep from "./step/vehicle.step";
import MarinaStep from "./step/marina.step";
import RoutesStep from "./step/routes.step";
import TripsStep from "./step/trips.step";
import PricingStep from "./step/pricing.step";
import PackagesStep from "./step/packages.step";
import ExtrasStep from "./step/extras.step";
import PoliciesStep from "./step/policies.step";
import CrewStep from "./step/crew.step";
import ImagesStep from "./step/images.step";
import SettingsStep from "./step/settings.step";

export default function YachtForm() {
  const submit = useSubmit();

  const createYacht = useCreateYacht();

  const { form, mode, isUpdate } = useAppForm<YachtFormValues>({
    schema: YachtSchema,
    defaultValues: defaultYachtValues,
  });

  const onSubmit = (values: any) =>
    submit({
      mutation: createYacht.mutateAsync(values),

      success: isUpdate ? "Yacht updated" : "Yacht created",

      redirect: "/yacht",
    });

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormWizard steps={yachtSteps}>
        <FormWizardHeader steps={yachtSteps} />

        <FormWizardContent>
          {/* BASIC */}
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          {/* VEHICLE */}
          <FormWizardStep index={1}>
            <VehicleStep />
          </FormWizardStep>

          {/* MARINA */}
          <FormWizardStep index={2}>
            <MarinaStep />
          </FormWizardStep>

          {/* ROUTES */}
          <FormWizardStep index={3}>
            <RoutesStep />
          </FormWizardStep>

          {/* TRIPS */}
          <FormWizardStep index={4}>
            <TripsStep />
          </FormWizardStep>

          {/* PRICING */}
          <FormWizardStep index={5}>
            <PricingStep />
          </FormWizardStep>

          {/* PACKAGES */}
          <FormWizardStep index={6}>
            <PackagesStep />
          </FormWizardStep>

          {/* EXTRAS */}
          <FormWizardStep index={7}>
            <ExtrasStep />
          </FormWizardStep>

          {/* POLICIES */}
          <FormWizardStep index={8}>
            <PoliciesStep />
          </FormWizardStep>

          {/* CREW */}
          <FormWizardStep index={9}>
            <CrewStep />
          </FormWizardStep>

          {/* IMAGES */}
          <FormWizardStep index={10}>
            <ImagesStep />
          </FormWizardStep>

          {/* SETTINGS */}
          <FormWizardStep index={11}>
            <SettingsStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter />
      </FormWizard>
    </AppForm>
  );
}
