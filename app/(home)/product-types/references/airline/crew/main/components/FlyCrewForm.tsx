"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateFlyCrew,
  useUpdateFlyCrew,
} from "@/hooks/product-types/references/airline/crew";

import { FlyCrew } from "@/types/product-types/references/airline/crew/crew.types";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";

import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";

import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";

import { FlyCrewFormSchema } from "./schema/crew.schema";

import { flyCrewFormConfig } from "./config";

import AirlineStep from "./step/airline.step";

import EmployeeStep from "./step/employee.step";

import BasicStep from "./step/basic.step";

import RoleStep from "./step/role.step";

import ContactStep from "./step/contact.step";

import QualificationsStep from "./step/qualifications.step";

import AssignmentsStep from "./step/assignments.step";

import StatusStep from "./step/status.step";

import CrewScheduleStep from "./step/crewSchedule.step";

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
  const createFlyCrew = useCreateFlyCrew();

  const updateFlyCrew = useUpdateFlyCrew();

  return (
    <EntityFormWizard<FlyCrewFormSchema, FlyCrew>
      initialData={initialData}
      redirect={redirect}
      config={flyCrewFormConfig}
      createMutation={createFlyCrew}
      updateMutation={updateFlyCrew}
    >
      <FormWizardStep index={0}>
        <AirlineStep airlineData={airlineData} />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <EmployeeStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <RoleStep roleData={roleData} />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <ContactStep />
      </FormWizardStep>

      <FormWizardStep index={5}>
        <StatusStep />
      </FormWizardStep>

      <FormWizardStep index={6}>
        <QualificationsStep aircraftTypeData={aircraftTypeData} />
      </FormWizardStep>

      <FormWizardStep index={7}>
        <AssignmentsStep dutyData={dutyData} />
      </FormWizardStep>

      <FormWizardStep index={8}>
        <CrewScheduleStep dutyData={dutyData} />
      </FormWizardStep>
    </EntityFormWizard>
  );
}