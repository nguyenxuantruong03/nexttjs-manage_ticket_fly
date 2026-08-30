"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { useCreateTimezone } from "@/hooks/location/timezone";

import { TimezoneFormSchema, TimezoneSchema } from "./form/schema";

import { timezoneDefaultValues } from "./form/default-values";

import { Timezone } from "@/types/location/timezone";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface TimezoneCreateDialogProps extends EntityCreateDialogProps<Timezone> {}

// ======================================================
// COMPONENT
// ======================================================

export default function TimezoneCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: TimezoneCreateDialogProps) {
  const createTimezone = useCreateTimezone();

  return (
    <EntityCreateFormDialog<TimezoneFormSchema, Timezone>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createTimezone}
      config={{
        schema: TimezoneSchema,
        defaultValues: timezoneDefaultValues,
        title: "Create Timezone",
        description: "Create a new timezone",
        success: "Timezone created",
        submitText: "Create Timezone",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Timezone> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      {/* ====================================================== */}
      {/* BASIC */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<TimezoneFormSchema>
          name="name"
          label="Timezone Name"
          placeholder="Asia/Ho_Chi_Minh"
        />

        <FormInput<TimezoneFormSchema>
          name="displayName"
          label="Display Name"
          placeholder="(UTC+07:00) Ho Chi Minh"
        />

        <FormInput<TimezoneFormSchema>
          name="abbreviation"
          label="Abbreviation"
          placeholder="ICT"
        />

        <FormInput<TimezoneFormSchema>
          name="utcOffset"
          label="UTC Offset"
          placeholder="+07:00"
        />

        <FormInput<TimezoneFormSchema>
          name="utcOffsetMinutes"
          label="UTC Offset Minutes"
          type="number"
          placeholder="420"
        />
      </div>

      {/* ====================================================== */}
      {/* STATUS */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<TimezoneFormSchema>
          name="daylightSaving"
          label="Daylight Saving"
        />

        <FormSwitch<TimezoneFormSchema> name="active" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
