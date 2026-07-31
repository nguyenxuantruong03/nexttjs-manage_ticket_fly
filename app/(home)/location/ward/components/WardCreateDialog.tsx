"use client";

import * as React from "react";

import { AppForm, FormCombobox, FormInput } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { District } from "@/types/bookings/location/district";
import { Ward } from "@/types/bookings/location/ward";

import { useCreateWard } from "@/hooks/location/ward";
import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { WardFormSchema, WardSchema } from "./form/schema";

import { wardDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

// ======================================================
// PROPS
// ======================================================

interface WardCreateDialogProps extends EntityCreateDialogProps<Ward> {
  districts: District[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function WardCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  districts,
}: WardCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createWard = useCreateWard();

  const { form } = useAppForm<WardFormSchema>({
    schema: WardSchema,
    defaultValues: wardDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...wardDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: WardFormSchema) => {
    submit({
      mutation: createWard.mutateAsync(values),

      success: "Ward created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Ward> = {
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
      title="Create Ward"
      description="Create a new ward"
    >
      <AppForm form={form} onSubmit={onSubmit} loading={createWard.isPending}>
        <div
          className="
          space-y-6
          "
        >
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
            <FormInput<WardFormSchema>
              name="name"
              label="Ward Name"
              placeholder="Ward name"
            />

            <FormInput<WardFormSchema>
              name="nativeName"
              label="Native Name"
              placeholder="Native name"
            />

            <FormInput<WardFormSchema>
              name="code"
              label="Code"
              placeholder="Ward code"
            />
          </div>
          {/* ====================================================== */}
          {/* LOCATION */}
          {/* ====================================================== */}

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
            <FormCombobox<WardFormSchema>
              portalContainer={dialogRef.current}
              name="districtId"
              label="District"
              placeholder="Select district"
              searchPlaceholder="Search district..."
              options={districts.map((district) => ({
                label: district.name,
                value: district.id,
              }))}
            />

            <FormInput<WardFormSchema>
              name="latitude"
              label="Latitude"
              type="number"
              placeholder="Latitude"
            />

            <FormInput<WardFormSchema>
              name="longitude"
              label="Longitude"
              type="number"
              placeholder="Longitude"
            />
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
              disabled={createWard.isPending}
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createWard.isPending}>
              {createWard.isPending ? "Creating..." : "Create Ward"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
