"use client";

import { AppForm } from "@/components/form/form-data";
import BasicSection from "./steps/BasicSection";
import CompanySection from "./steps/CompanySection";
import ContactSection from "./steps/ContactSection";
import AddressSection from "./steps/AddressSection";
import SocialSection from "./steps/SocialSection";
import ServiceSection from "./steps/ServiceSection";
import { FormValues, schema } from "./form/schema";
import { providerBookingDefaultValues } from "./form/default-values";
import { useAppForm } from "@/hooks/useAppForm";
import { useCreateProviderBooking } from "@/hooks/provider-booking";
import { useSubmit } from "@/hooks/useSubmit";
import { providerBookingSteps } from "./steps/steps";
import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";

export default function ProviderBookingForm() {
  const submit = useSubmit();
  const createProviderBooking = useCreateProviderBooking();
  const { form, mode, isUpdate } = useAppForm<FormValues>({
    schema,
    // mode: initialData ? "update" : "create",
    defaultValues: providerBookingDefaultValues,
  });

  const onSubmit = (values: FormValues) =>
    submit({
      mutation: createProviderBooking.mutateAsync(values),
      success: "Provider created",
      redirect: "/provider-booking",
    });

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormWizard steps={providerBookingSteps}>
        <FormWizardHeader steps={providerBookingSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicSection />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <CompanySection />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <ContactSection />
          </FormWizardStep>

          <FormWizardStep index={3}>
            <AddressSection />
          </FormWizardStep>

          <FormWizardStep index={4}>
            <SocialSection />
          </FormWizardStep>

          <FormWizardStep index={5}>
            <ServiceSection />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter />
      </FormWizard>
    </AppForm>
  );
}
