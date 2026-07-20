"use client";

import FormSection from "@/components/form/FormSection";
import {
  FormInput,
  FormSelect,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import { AirportTransferServiceType } from "@/types/bookings/airport-transfer/enums";
// airport-transfer/schema.ts

export interface AirportTransferFormValues {
  name: string;
  slug: string;

  serviceType: AirportTransferServiceType;

  searchPriority: number;
  searchText?: string;

  active: boolean;
  featured: boolean;
  searchable: boolean;
}
const serviceTypeOptions = Object.values(AirportTransferServiceType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function BasicSection() {
  return (
    <FormSection
      title="Basic Information"
      description="General transfer information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<AirportTransferFormValues>
          name="name"
          label="Transfer Name"
        />

        <FormInput<AirportTransferFormValues> name="slug" label="Slug" />

        <FormSelect<AirportTransferFormValues>
          name="serviceType"
          label="Service Type"
          options={serviceTypeOptions}
        />

        <FormInput<AirportTransferFormValues>
          name="searchPriority"
          label="Search Priority"
          type="number"
        />
      </div>

      <FormTextarea<AirportTransferFormValues>
        name="searchText"
        label="Search Text"
      />

      <div className="grid grid-cols-3 gap-6">
        <FormSwitch<AirportTransferFormValues> name="active" label="Active" />

        <FormSwitch<AirportTransferFormValues>
          name="featured"
          label="Featured"
        />

        <FormSwitch<AirportTransferFormValues>
          name="searchable"
          label="Searchable"
        />
      </div>
    </FormSection>
  );
}
