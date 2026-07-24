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
import { useCreateTicketFly, useUpdateTicketFly } from "@/hooks/ticket-fly";
import { FlyFormSchema, TicketFlySchema } from "./schema/core/fly.schema";
import { FlyDefaultValues } from "./form/default-values";
import { useFormPage } from "@/components/form/form-context";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { TicketFly } from "@/types/bookings/ticket-fly/core/fly.types";
import { initTicketFlyFormValues } from "./form/init-value";

interface TicketFlyFormProps {
  initialData?: TicketFly;
}

export default function TicketFlyForm({ initialData }: TicketFlyFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createTicket = useCreateTicketFly();
  const updateTicket = useUpdateTicketFly();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyFormSchema>({
    schema: TicketFlySchema,
    defaultValues: initialData
      ? initTicketFlyFormValues(initialData)
      : FlyDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Ticketflight,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateTicket.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createTicket.mutateAsync(values),
      success: isUpdate ? "Ticket updated" : "Ticket created",
      redirect: "/ticket",
    });

    clearDraft();

    form.reset(values);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={flySteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
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

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
