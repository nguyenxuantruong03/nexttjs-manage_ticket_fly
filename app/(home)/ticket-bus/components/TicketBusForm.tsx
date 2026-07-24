"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { busDefaultValues } from "./form/default-values";
import { busSteps } from "./step/steps";

import { useCreateBus, useUpdateBus } from "@/hooks/bus";
import { BusFormSchema, BusSchema } from "./schema/core/bus.schema";
import BasicStep from "./step/basic.step";
import RoutesStep from "./step/routes.step";
import VehiclesStep from "./step/vehicles.step";
import SeatsStep from "./step/seats.step";
import PricingStep from "./step/pricing.step";
import PoliciesStep from "./step/policies.step";
import ImagesStep from "./step/images.step";
import ScheduleStep from "./step/schedule.step";
import { useEffect, useMemo } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { Bus } from "@/types/bookings/bus/core/bus.types";
import { initTicketBusFormValues } from "./form/init-value";

interface TicketBusFormProps {
  initialData?: Bus;
}

export default function TicketBusForm({ initialData }: TicketBusFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createBus = useCreateBus();
  const updateBus = useUpdateBus();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<BusFormSchema>({
    schema: BusSchema,
    defaultValues: initialData
      ? initTicketBusFormValues(initialData)
      : busDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Ticketbus,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateBus.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createBus.mutateAsync(values),
      success: isUpdate ? "Bus updated" : "Bus created",
      redirect: "/bus",
    });

    clearDraft();

    form.reset(values);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={busSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={busSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <RoutesStep />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <VehiclesStep />
          </FormWizardStep>

          <FormWizardStep index={3}>
            <SeatsStep />
          </FormWizardStep>

          <FormWizardStep index={4}>
            <PricingStep />
          </FormWizardStep>

          <FormWizardStep index={5}>
            <PoliciesStep />
          </FormWizardStep>

          <FormWizardStep index={6}>
            <ImagesStep />
          </FormWizardStep>

          <FormWizardStep index={7}>
            <ScheduleStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
