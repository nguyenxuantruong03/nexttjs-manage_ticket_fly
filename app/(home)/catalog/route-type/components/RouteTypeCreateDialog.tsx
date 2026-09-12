"use client";

import {
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import { RouteTypeFormSchema, schema as RouteTypeSchema } from "./form/schema";

import { routeTypeDefaultValues } from "./form/default-values";

import { BookingType } from "@/types/common/commerce/booking-type";

import { useCreateRouteType } from "@/hooks/catalog/route-type";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

import { RouteType } from "@/types/common/catalog/route-type.type";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface RouteTypeCreateDialogProps extends EntityCreateDialogProps<RouteType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function RouteTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: RouteTypeCreateDialogProps) {
  const createRouteType = useCreateRouteType();

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<RouteTypeFormSchema, Partial<RouteType>, RouteType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createRouteType}
      config={{
        schema: RouteTypeSchema,
        defaultValues: routeTypeDefaultValues,

        title: "Create Route Type",
        description: "Create a new route type",

        success: "Route type created",

        submitText: "Create Route Type",
        submittingText: "Creating...",

        getResult: (response): EntityCreateResult<RouteType> => ({
          value: response.id,
          label: response.name ?? "Route Type",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<RouteTypeFormSchema>
          name="name"
          label="Route Type Name"
          placeholder="Enter route type name"
        />

        <FormTextarea<RouteTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Enter route type description"
        />

        <FormIcon<RouteTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Enter route type icon"
        />
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<RouteTypeFormSchema, BookingType>
          name="bookingTypeIds"
          label="Booking Types"
          placeholder="Search booking types..."
          searchPlaceholder="Search booking types..."
          emptyText="No booking types found"
          createText="Create booking type"
          options={bookingTypeOptions}
          enableCreate
          renderCreateDialog={(props) => <BookingTypeCreateDialog {...props} />}
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<RouteTypeFormSchema> name="active" label="Active" />

        <FormInput<RouteTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
