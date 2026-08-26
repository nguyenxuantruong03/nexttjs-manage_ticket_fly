"use client";

import * as React from "react";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useCreateTimezone } from "@/hooks/location/timezone";
import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { TimezoneFormSchema, TimezoneSchema } from "./form/schema";

import { timezoneDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { Timezone } from "@/types/location/timezone";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createTimezone = useCreateTimezone();

  const { form } = useAppForm<TimezoneFormSchema>({
    schema: TimezoneSchema,
    defaultValues: timezoneDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...timezoneDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: TimezoneFormSchema) => {
    submit({
      mutation: createTimezone.mutateAsync(values),

      success: "Timezone created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Timezone> = {
          value: response.id,
          label: response.name,
          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Timezone"
      description="Create a new timezone"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createTimezone.isPending}
      >
        <div className="space-y-6">
          {/* ====================================================== */}
          {/* BASIC */}
          {/* ====================================================== */}

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
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

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
            <FormSwitch<TimezoneFormSchema>
              name="daylightSaving"
              label="Daylight Saving"
            />

            <FormSwitch<TimezoneFormSchema> name="active" label="Active" />
          </div>

          {/* ====================================================== */}
          {/* ACTION */}
          {/* ====================================================== */}

          <div
            className="
            flex
            justify-end
            gap-3
            "
          >
            <Button
              type="button"
              variant="outline"
              disabled={createTimezone.isPending}
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createTimezone.isPending}>
              {createTimezone.isPending ? "Creating..." : "Create Timezone"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
