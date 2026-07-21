// step/packages.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormSwitch,
  FormSelect,
} from "@/components/form/form-data";

import { YachtDurationType } from "@/types/bookings/yacht/enums";
import { YachtFormValues } from "../schema/core/yacht.schema";


const durationTypeOptions = Object.values(YachtDurationType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);



export default function PackagesStep() {
  return (
    <>
      {/* ======================================================
          PACKAGE INFORMATION
      ====================================================== */}

      <FormSection
        title="Package Information"
        description="Yacht service packages"
      >
        <div className="grid gap-6 md:grid-cols-2">


          <FormInput<YachtFormValues>
            name="packages.0.name"
            label="Package Name"
          />


          <FormInput<YachtFormValues>
            name="packages.0.description"
            label="Description"
          />


          <FormInput<YachtFormValues>
            name="packages.0.duration"
            label="Duration"
            type="number"
          />


          <FormSelect<YachtFormValues>
            name="packages.0.durationType"
            label="Duration Type"
            options={durationTypeOptions}
          />


          <FormInput<YachtFormValues>
            name="packages.0.maxGuests"
            label="Maximum Guests"
            type="number"
          />


          <FormInput<YachtFormValues>
            name="packages.0.price"
            label="Package Price"
            type="number"
          />


          <FormSwitch<YachtFormValues>
            name="packages.0.active"
            label="Active"
          />


        </div>
      </FormSection>




      {/* ======================================================
          INCLUDED ITEMS
      ====================================================== */}

      <FormSection
        title="Included Items"
        description="Package included services"
      >

        <div className="grid gap-6 md:grid-cols-2">


          <FormInput<YachtFormValues>
            name="packages.0.includedItems.0"
            label="Included Item"
          />


        </div>

      </FormSection>




      {/* ======================================================
          PACKAGE EXTRAS
      ====================================================== */}

      <FormSection
        title="Package Extras"
        description="Extras attached to package"
      >

        <div className="grid gap-6 md:grid-cols-2">


          <FormInput<YachtFormValues>
            name="packages.0.extras.0.packageId"
            label="Package ID"
          />


          <FormInput<YachtFormValues>
            name="packages.0.extras.0.extraId"
            label="Extra ID"
          />


        </div>

      </FormSection>




      {/* ======================================================
          PACKAGE IMAGES
      ====================================================== */}

      <FormSection
        title="Package Images"
        description="Package gallery"
      >

        <div className="grid gap-6 md:grid-cols-2">


          <FormInput<YachtFormValues>
            name="packages.0.images.0.url"
            label="Image URL"
          />


          <FormInput<YachtFormValues>
            name="packages.0.images.0.sortOrder"
            label="Sort Order"
            type="number"
          />


        </div>

      </FormSection>

    </>
  );
}