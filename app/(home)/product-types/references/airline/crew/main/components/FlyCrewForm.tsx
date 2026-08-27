"use client";

import { useEffect, useMemo, useRef } from "react";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { useFormPage } from "@/components/form/form-context";

import { useSearchParams } from "next/navigation";

import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";

import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";

import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";

import { flyCrewDefaultValues } from "./form/default-values";
import { initFlyCrewFormValues } from "./form/init-value";
import { flyCrewSteps } from "./step/steps";

import AirlineStep from "./step/airline.step";
import EmployeeStep from "./step/employee.step";
import BasicStep from "./step/basic.step";
import RoleStep from "./step/role.step";
import ContactStep from "./step/contact.step";
import QualificationsStep from "./step/qualifications.step";
import AssignmentsStep from "./step/assignments.step";
import { FlyCrew } from "@/types/product-types/references/airline/crew/crew.types";
import {
  useCreateFlyCrew,
  useUpdateFlyCrew,
} from "@/hooks/product-types/references/airline/crew";
import { FlyAirline } from "@/types/product-types/references/airline/airline.types";
import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";
import StatusStep from "./step/status.step";
import CrewScheduleStep from "./step/crewSchedule.step";
import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";
import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";
import { FlyCrewFormSchema, FlyCrewSchema } from "./schema/crew.schema";

interface FlyCrewFormProps {
  initialData?: FlyCrew;
  airlineData: FlyAirline[];
  roleData: FlyCrewRole[];
  dutyData: FlyCrewDuty[];
  aircraftTypeData: FlyAircraftType[];
  redirect?: boolean;
}

export default function FlyCrewForm({
  initialData,
  airlineData,
  roleData,
  dutyData,
  aircraftTypeData,
  redirect = true,
}: FlyCrewFormProps) {
  const redirectDefault = "/product-types/references/airline/crew/main";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyCrew = useCreateFlyCrew();

  const updateFlyCrew = useUpdateFlyCrew();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyCrewFormSchema>({
    schema: FlyCrewSchema,

    defaultValues: initialData
      ? initFlyCrewFormValues(initialData)
      : flyCrewDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.FlyCrew,

    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FlyCrewFormSchema) => {
    submit({
      mutation: initialData
        ? updateFlyCrew.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyCrew.mutateAsync(values),

      success: isUpdate ? "Fly crew updated" : "Fly crew created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flyCrewDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flyCrewDefaultValues);
  };

  return (
    <>
      <ConfirmRedirectDialog
        redirectDefault={redirectDefault}
        confirmDialog={confirmDialog}
        shouldShow={shouldShow}
        cancelDialog={cancelDialog}
      />

      <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
        <FormWizard
          form={form}
          steps={flyCrewSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyCrewSteps} />

          <FormWizardContent>
            {/* 0 - AIRLINE */}
            <FormWizardStep index={0}>
              <AirlineStep airlineData={airlineData} />
            </FormWizardStep>

            {/* 1 - EMPLOYEE */}
            <FormWizardStep index={1}>
              <EmployeeStep />
            </FormWizardStep>

            {/* 2 - BASIC */}
            <FormWizardStep index={2}>
              <BasicStep />
            </FormWizardStep>

            {/* 3 - ROLE */}
            <FormWizardStep index={3}>
              <RoleStep roleData={roleData} />
            </FormWizardStep>

            {/* 4 - CONTACT */}
            <FormWizardStep index={4}>
              <ContactStep />
            </FormWizardStep>

            {/* 5 - STATUS */}
            <FormWizardStep index={5}>
              <StatusStep />
            </FormWizardStep>

            {/* 6 - QUALIFICATIONS */}
            <FormWizardStep index={6}>
              <QualificationsStep aircraftTypeData={aircraftTypeData} />
            </FormWizardStep>

            {/* 7 - ASSIGNMENTS */}
            <FormWizardStep index={7}>
              <AssignmentsStep dutyData={dutyData} />
            </FormWizardStep>

            {/* 8 - CREW SCHEDULE */}
            <FormWizardStep index={8}>
              <CrewScheduleStep dutyData={dutyData} />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
