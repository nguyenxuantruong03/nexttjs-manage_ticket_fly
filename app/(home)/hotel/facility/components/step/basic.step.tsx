"use client";

import FormSection from "@/components/form/FormSection";
import { FormCombobox, FormInput } from "@/components/form/form-data";

import { FacilityFormSchema } from "../form/schema";
import { FacilityCategory } from "@/types/bookings/hotel/facilities.types";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import FacilityCategoryCreateDialog from "../../../facility-category/components/FacilityCategoryCreateDialog";

interface BasicStepProps {
  hotelFacilityCategoryData: FacilityCategory[];
}

export default function BasicStep({
  hotelFacilityCategoryData,
}: BasicStepProps) {
  const facilityCategoryOptions: EntityOption<FacilityCategory>[] =
    hotelFacilityCategoryData?.map((category) => ({
      value: category.id,
      label: category.name,
      description: category.description ?? undefined,
      data: category,
    })) ?? [];
  return (
    <FormSection title="Facility" description="Basic facility information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FacilityFormSchema>
          name="name"
          label="Name"
          placeholder="Swimming Pool"
        />

        <FormInput<FacilityFormSchema>
          name="description"
          label="Description"
          placeholder="Hotel facility description"
        />

        <FormInput<FacilityFormSchema>
          name="icon"
          label="Icon"
          placeholder="pool"
        />

        <FormEntitySelector<FacilityFormSchema, FacilityCategory>
          name="categoryId"
          label="Category"
          placeholder="Search facility category..."
          searchPlaceholder="Search category..."
          emptyText="No category found"
          createText="Create facility category"
          options={facilityCategoryOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <FacilityCategoryCreateDialog {...props} />
          )}
        />
      </div>
    </FormSection>
  );
}
