"use client";

import { FormInput } from "@/components/form/form-data";
import FormSection from "@/components/form/FormSection";
import { ProviderBookingFormSchema } from "../form/schema";

export default function CompanySection() {
  return (
    <FormSection title="Company Information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ProviderBookingFormSchema>
          name="companyType"
          label="Company Type"
          placeholder="e.g. Travel Agency"
        />

        <FormInput<ProviderBookingFormSchema>
          name="registrationNumber"
          label="Registration Number"
          placeholder="Enter registration number"
        />

        <FormInput<ProviderBookingFormSchema>
          name="taxCode"
          label="Tax Code"
          placeholder="Enter tax code"
        />

        <FormInput<ProviderBookingFormSchema>
          name="licenseNumber"
          label="License Number"
          placeholder="Enter license number"
        />

        <FormInput<ProviderBookingFormSchema>
          name="foundedYear"
          type="number"
          label="Founded Year"
          placeholder="e.g. 2018"
        />

        <FormInput<ProviderBookingFormSchema>
          name="employeeCount"
          type="number"
          label="Employee Count"
          placeholder="e.g. 150"
        />
      </div>
    </FormSection>
  );
}
