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

import {
  ServiceTypeFormSchema,
  schema as ServiceTypeSchema,
} from "./form/schema";

import { serviceTypeDefaultValues } from "./form/default-values";

import { BookingType } from "@/types/common/commerce/booking-type";

import { useCreateServiceType } from "@/hooks/catalog/service-type";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

import { ServiceType } from "@/types/common/catalog/service-type.type";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface ServiceTypeCreateDialogProps extends EntityCreateDialogProps<ServiceType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function ServiceTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: ServiceTypeCreateDialogProps) {
  const createServiceType = useCreateServiceType();

  // ======================================================
  // BOOKING TYPE OPTIONS
  // ======================================================

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<
      ServiceTypeFormSchema,
      Partial<ServiceType>,
      ServiceType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createServiceType}
      config={{
        schema: ServiceTypeSchema,
        defaultValues: serviceTypeDefaultValues,

        title: "Create Service Type",
        description: "Create a new service type",

        success: "Service type created",

        submitText: "Create Service Type",
        submittingText: "Creating...",

        getResult: (response): EntityCreateResult<ServiceType> => ({
          value: response.id,
          label: response.name ?? "Service Type",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<ServiceTypeFormSchema>
          name="name"
          label="Service Type Name"
          placeholder="Enter service type name"
        />

        <FormIcon<ServiceTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Enter service type icon"
        />

        <div className="md:col-span-2">
          <FormTextarea<ServiceTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the service type..."
          />
        </div>
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<ServiceTypeFormSchema, BookingType>
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
        <FormSwitch<ServiceTypeFormSchema> name="active" label="Active" />

        <FormInput<ServiceTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
