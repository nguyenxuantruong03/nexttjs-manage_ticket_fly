"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { flySteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import AirlineStep from "./step/airline.step";
import RouteStep from "./step/routes.step";
import NoticeStep from "./step/notice.step";
import SeoStep from "./step/seo.step";
import TripsStep from "./step/trips.step";
import PricingStep from "./step/pricing.step";
import PoliciesStep from "./step/policies.step";
import ImagesStep from "./step/images.step";
import ScheduleStep from "./step/schedule.step";
import { useCreateTicketFly } from "@/hooks/ticket-fly";
import { TicketFlyFormValues, TicketFlySchema } from "./schema/core/fly.schema";
import { FlyDefaultValues } from "./form/default-values";

export default function TicketForm() {
  const submit = useSubmit();

  const createTicket = useCreateTicketFly();

  const { form, isUpdate } = useAppForm<TicketFlyFormValues>({
    schema: TicketFlySchema,
    defaultValues: FlyDefaultValues,
  });

  const onSubmit = (values: any) =>
    submit({
      mutation: createTicket.mutateAsync(values),
      success: isUpdate ? "Ticket updated" : "Ticket created",
      redirect: "/ticket",
    });

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormWizard steps={flySteps}>
        <FormWizardHeader steps={flySteps} />

        <FormWizardContent>
          {/* BASIC */}
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          {/* AIRLINE */}
          <FormWizardStep index={1}>
            <AirlineStep />
          </FormWizardStep>

          {/* ROUTES */}
          <FormWizardStep index={2}>
            <RouteStep />
          </FormWizardStep>

          {/* TRIPS */}
          <FormWizardStep index={3}>
            <TripsStep />
          </FormWizardStep>

          {/* PRICING */}
          <FormWizardStep index={4}>
            <PricingStep />
          </FormWizardStep>

          {/* POLICIES */}
          <FormWizardStep index={5}>
            <PoliciesStep />
          </FormWizardStep>

          {/* NOTICE */}
          <FormWizardStep index={6}>
            <NoticeStep />
          </FormWizardStep>

          {/* IMAGES */}
          <FormWizardStep index={7}>
            <ImagesStep />
          </FormWizardStep>

          {/* SCHEDULE */}
          <FormWizardStep index={8}>
            <ScheduleStep />
          </FormWizardStep>

          {/* SEO */}
          <FormWizardStep index={9}>
            <SeoStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter />
      </FormWizard>
    </AppForm>
  );
}
