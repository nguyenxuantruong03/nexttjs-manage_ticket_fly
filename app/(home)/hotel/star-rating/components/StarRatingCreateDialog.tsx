"use client";

import * as React from "react";

import { AppForm, FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";


import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  StarRatingFormSchema,
  StarRatingSchema,
} from "./form/schema";
import { starRatingDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { HotelStarRating } from "@/types/bookings/hotel/hotel-detail.type";
import { useCreateHotelStarRating } from "@/hooks/hotel/hotel-star-rating";

// ======================================================
// PROPS
// ======================================================

interface StarRatingCreateDialogProps
  extends EntityCreateDialogProps<HotelStarRating> {}

// ======================================================
// COMPONENT
// ======================================================

export default function StarRatingCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: StarRatingCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createStarRating = useCreateHotelStarRating();

  const { form } = useAppForm<StarRatingFormSchema>({
    schema: StarRatingSchema,
    defaultValues: starRatingDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...starRatingDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: StarRatingFormSchema) => {
    submit({
      mutation: createStarRating.mutateAsync(values),

      success: "Star rating created",

      onSuccess: (response) => {
        const result: EntityCreateResult<HotelStarRating> = {
          value: response.id,
          label: response.name ?? "Star Rating",
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
      title="Create Star Rating"
      description="Create a new star rating"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createStarRating.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<StarRatingFormSchema>
              name="name"
              label="Name"
              placeholder="Star rating name"
            />

            <FormInput<StarRatingFormSchema>
              name="star"
              label="Star"
              type="number"
              placeholder="1"
            />

            <FormInput<StarRatingFormSchema>
              name="description"
              label="Description"
              placeholder="Description"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createStarRating.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={createStarRating.isPending}
            >
              {createStarRating.isPending
                ? "Creating..."
                : "Create Star Rating"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}