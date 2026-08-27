"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import { useAppForm } from "@/hooks/useAppForm";

import { useSubmit } from "@/hooks/useSubmit";

import { flyCrewDefaultValues } from "./form/default-values";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";

import { useFieldArray } from "react-hook-form";

import { FlyCrew } from "@/types/product-types/references/airline/crew/crew.types";

import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";

import { useCreateFlyCrew } from "@/hooks/product-types/references/airline/crew";

import FlyCrewDutyCreateDialog from "../../crew-duty/components/FlyCrewDutyCreateDialog";

import FlyCrewRoleCreateDialog from "../../crew-role/components/FlyCrewRoleCreateDialog";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";

import FlyAircraftTypeCreateDialog from "../../../aircraft/aircraft-type/components/FlyAircraftTypeCreateDialog";
import { FlyCrewFormSchema, FlyCrewSchema } from "./schema/crew.schema";

// ======================================================
// PROPS
// ======================================================

interface FlyCrewCreateDialogProps extends EntityCreateDialogProps<FlyCrew> {
  airlineData: FlyAirline[];

  roleData: FlyCrewRole[];

  dutyData: FlyCrewDuty[];

  aircraftTypeData: FlyAircraftType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyCrewCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  airlineData,
  roleData,
  dutyData,
  aircraftTypeData,
}: FlyCrewCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlyCrew = useCreateFlyCrew();

  const { form } = useAppForm<FlyCrewFormSchema>({
    schema: FlyCrewSchema,
    defaultValues: flyCrewDefaultValues,
  });

  // ======================================================
  // FIELD ARRAY
  // ======================================================

  const qualifications = useFieldArray({
    control: form.control,
    name: "qualifications",
  });

  const assignments = useFieldArray({
    control: form.control,
    name: "assignments",
  });

  const crewSchedule = useFieldArray({
    control: form.control,
    name: "crewSchedule",
  });

  // ======================================================
  // OPTIONS
  // ======================================================

  const airlineEntityOptions: EntityOption<FlyAirline>[] = airlineData.map(
    (airline) => ({
      value: airline.id,
      label: airline.name,
      description: airline.description ?? undefined,
      data: airline,
    }),
  );

  const roleEntityOptions: EntityOption<FlyCrewRole>[] = roleData.map(
    (role) => ({
      value: role.id,
      label: role.name,
      description: role.description ?? undefined,
      data: role,
    }),
  );

  const dutyEntityOptions: EntityOption<FlyCrewDuty>[] = dutyData.map(
    (duty) => ({
      value: duty.id,
      label: duty.name,
      description: duty.description ?? undefined,
      data: duty,
    }),
  );

  // ======================================================
  // AIRCRAFT TYPE MASTER OPTIONS
  // ======================================================

  const aircraftTypeEntityOptions: EntityOption<FlyAircraftType>[] =
    aircraftTypeData.map((aircraftType) => ({
      value: aircraftType.id,
      label: aircraftType.name,
      description: aircraftType.code,
      data: aircraftType,
    }));

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyCrewDefaultValues,
      firstName: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: FlyCrewFormSchema) => {
    submit({
      mutation: createFlyCrew.mutateAsync(values),

      success: "Fly crew created",

      onSuccess(response) {
        const result: EntityCreateResult<FlyCrew> = {
          value: response.id,

          label: `${response.firstName} ${response.lastName}`,

          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Fly Crew"
      description="Create a new fly crew member"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlyCrew.isPending}
      >
        <div className="space-y-8">
          {/* ======================================================
              AIRLINE
          ====================================================== */}

          <div>
            <h3 className="mb-4 text-sm font-semibold">Airline</h3>

            <FormEntitySelector<FlyCrewFormSchema, FlyAirline>
              name="airlineId"
              label="Airline"
              placeholder="Search airline..."
              searchPlaceholder="Search airline..."
              emptyText="No airline found"
              options={airlineEntityOptions}
            />
          </div>

          {/* ======================================================
              EMPLOYEE
          ====================================================== */}

          <div>
            <h3 className="mb-4 text-sm font-semibold">Employee</h3>

            <FormInput<FlyCrewFormSchema>
              name="employeeNumber"
              label="Employee Number"
              placeholder="EMP001"
            />
          </div>

          {/* ======================================================
              BASIC INFO
          ====================================================== */}

          <div>
            <h3 className="mb-4 text-sm font-semibold">Basic Information</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <FormInput<FlyCrewFormSchema>
                name="firstName"
                label="First Name"
                placeholder="John"
              />

              <FormInput<FlyCrewFormSchema>
                name="lastName"
                label="Last Name"
                placeholder="Smith"
              />

              <FormInput<FlyCrewFormSchema>
                name="gender"
                label="Gender"
                placeholder="Male / Female"
              />

              <FormInput<FlyCrewFormSchema>
                name="birthDate"
                label="Birth Date"
                type="date"
              />

              <FormInput<FlyCrewFormSchema>
                name="nationality"
                label="Nationality"
                placeholder="Vietnamese"
              />
            </div>
          </div>

          {/* ======================================================
              ROLE
          ====================================================== */}

          <div>
            <h3 className="mb-4 text-sm font-semibold">Crew Role</h3>

            <FormEntitySelector<FlyCrewFormSchema, FlyCrewRole>
              name="roleId"
              label="Role"
              placeholder="Search crew role..."
              searchPlaceholder="Search crew role..."
              emptyText="No crew role found"
              options={roleEntityOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <FlyCrewRoleCreateDialog {...props} />
              )}
            />
          </div>

          {/* ======================================================
              CONTACT
          ====================================================== */}

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <FormInput<FlyCrewFormSchema>
                name="email"
                label="Email"
                placeholder="crew@example.com"
              />

              <FormInput<FlyCrewFormSchema>
                name="phone"
                label="Phone"
                placeholder="+84..."
              />
            </div>
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div>
            <h3 className="mb-4 text-sm font-semibold">Status</h3>

            <FormSwitch<FlyCrewFormSchema> name="active" label="Active" />
          </div>

          {/* ======================================================
              QUALIFICATIONS
          ====================================================== */}

          <div>
            <h3 className="mb-4 text-sm font-semibold">Qualifications</h3>

            <div className="space-y-4">
              {qualifications.fields.map((field, index) => (
                <div key={field.id} className="grid gap-4 md:grid-cols-3">
                  {/* ==================================================
                      AIRCRAFT TYPE MASTER
                  ================================================== */}

                  <FormEntitySelector<FlyCrewFormSchema, FlyAircraftType>
                    name={`qualifications.${index}.aircraftTypeId`}
                    label="Aircraft Type"
                    placeholder="Search aircraft type..."
                    searchPlaceholder="Search aircraft type..."
                    emptyText="No aircraft type found"
                    options={aircraftTypeEntityOptions}
                    enableCreate
                    renderCreateDialog={(props) => (
                      <FlyAircraftTypeCreateDialog {...props} />
                    )}
                  />

                  {/* ==================================================
                      ISSUED AT
                  ================================================== */}

                  <FormInput<FlyCrewFormSchema>
                    name={`qualifications.${index}.issuedAt`}
                    label="Issued At"
                    type="date"
                  />

                  {/* ==================================================
                      VALID UNTIL
                  ================================================== */}

                  <FormInput<FlyCrewFormSchema>
                    name={`qualifications.${index}.validUntil`}
                    label="Valid Until"
                    type="date"
                  />

                  {/* ==================================================
                      REMOVE
                  ================================================== */}

                  <div className="md:col-span-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => qualifications.remove(index)}
                    >
                      Remove Qualification
                    </Button>
                  </div>
                </div>
              ))}

              {/* ======================================================
                  ADD QUALIFICATION
              ====================================================== */}

              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  qualifications.append({
                    aircraftTypeId: "",
                    issuedAt: undefined,
                    validUntil: undefined,
                  })
                }
              >
                Add Qualification
              </Button>
            </div>
          </div>

          {/* ======================================================
              ASSIGNMENTS
          ====================================================== */}

          <div>
            <h3 className="mb-4 text-sm font-semibold">Assignments</h3>

            <div className="space-y-4">
              {assignments.fields.map((field, index) => (
                <div key={field.id} className="grid gap-4 md:grid-cols-3">
                  {/* ==================================================
                      TRIP ID
                  ================================================== */}

                  <FormInput<FlyCrewFormSchema>
                    name={`assignments.${index}.tripId`}
                    label="Trip ID"
                    placeholder="Enter trip ID"
                  />

                  {/* ==================================================
                      INVENTORY ID
                  ================================================== */}

                  <FormInput<FlyCrewFormSchema>
                    name={`assignments.${index}.inventoryId`}
                    label="Inventory ID"
                    placeholder="Enter inventory ID"
                  />

                  {/* ==================================================
                      DUTY
                  ================================================== */}

                  <FormEntitySelector<FlyCrewFormSchema, FlyCrewDuty>
                    name={`assignments.${index}.dutyId`}
                    label="Duty"
                    placeholder="Search duty..."
                    searchPlaceholder="Search duty..."
                    emptyText="No duty found"
                    options={dutyEntityOptions}
                    enableCreate
                    renderCreateDialog={(props) => (
                      <FlyCrewDutyCreateDialog {...props} />
                    )}
                  />
                </div>
              ))}

              {/* ======================================================
                  ADD ASSIGNMENT
              ====================================================== */}

              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  assignments.append({
                    tripId: "",
                    inventoryId: "",
                    dutyId: "",
                  })
                }
              >
                Add Assignment
              </Button>
            </div>
          </div>

          {/* ======================================================
              CREW SCHEDULE
          ====================================================== */}

          <div>
            <h3 className="mb-4 text-sm font-semibold">Crew Schedule</h3>

            <div className="space-y-4">
              {crewSchedule.fields.map((field, index) => (
                <div key={field.id} className="grid gap-4 md:grid-cols-2">
                  <FormInput<FlyCrewFormSchema>
                    name={`crewSchedule.${index}.startTime`}
                    label="Start Time"
                    type="datetime-local"
                  />

                  <FormInput<FlyCrewFormSchema>
                    name={`crewSchedule.${index}.endTime`}
                    label="End Time"
                    type="datetime-local"
                  />

                  <FormEntitySelector<FlyCrewFormSchema, FlyCrewDuty>
                    name={`crewSchedule.${index}.dutyId`}
                    label="Duty"
                    placeholder="Search duty..."
                    searchPlaceholder="Search duty..."
                    emptyText="No duty found"
                    options={dutyEntityOptions}
                  />

                  <FormInput<FlyCrewFormSchema>
                    name={`crewSchedule.${index}.tripId`}
                    label="Trip ID"
                    placeholder="Enter trip ID"
                  />
                </div>
              ))}

              {/* ======================================================
                  ADD SCHEDULE
              ====================================================== */}

              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  crewSchedule.append({
                    startTime: undefined as never,
                    endTime: undefined as never,
                    dutyId: "",
                    tripId: "",
                  })
                }
              >
                Add Schedule
              </Button>
            </div>
          </div>

          {/* ======================================================
              ACTION
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createFlyCrew.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFlyCrew.isPending}>
              {createFlyCrew.isPending ? "Creating..." : "Create Crew"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
