// step/policies.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import {
  FuelPolicy,
  RentalDocument,
  UnitOption,
} from "@/types/bookings/car_rental/enums";
import { CarRentalFormValues } from "../schema/core/car-rental.schema";

const fuelPolicyOptions = Object.values(FuelPolicy).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const unitOptions = Object.values(UnitOption).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const documentOptions = Object.values(RentalDocument).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function PoliciesStep() {
  return (
    <>
      <FormSection
        title="General Policies"
        description="Driver and rental requirements"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormValues>
            name="policies.minimumDriverAge"
            label="Minimum Driver Age"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="policies.minimumLicenseYears"
            label="Minimum License Years"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="policies.depositAmount"
            label="Deposit Amount"
            type="number"
          />

          <FormSelect<CarRentalFormValues>
            name="policies.fuelPolicy"
            label="Fuel Policy"
            options={fuelPolicyOptions}
          />
        </div>
      </FormSection>

      <FormSection
        title="Mileage Policy"
        description="Mileage limitation rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<CarRentalFormValues>
            name="policies.mileage.unlimited"
            label="Unlimited Mileage"
          />

          <FormSelect<CarRentalFormValues>
            name="policies.mileage.unit"
            label="Mileage Unit"
            options={unitOptions}
          />

          <FormInput<CarRentalFormValues>
            name="policies.mileage.dailyLimitKm"
            label="Daily Limit KM"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="policies.mileage.extraKmFee"
            label="Extra KM Fee"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Cancellation Policy"
        description="Cancellation and refund rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<CarRentalFormValues>
            name="policies.cancellation.refundable"
            label="Refundable"
          />

          <FormSwitch<CarRentalFormValues>
            name="policies.cancellation.freeCancellation"
            label="Free Cancellation"
          />

          <FormInput<CarRentalFormValues>
            name="policies.cancellation.freeCancellationBeforeHours"
            label="Free Cancellation Before Hours"
            type="number"
          />

          <FormSwitch<CarRentalFormValues>
            name="policies.cancellation.partialRefund"
            label="Partial Refund"
          />

          <FormInput<CarRentalFormValues>
            name="policies.cancellation.cancellationFee"
            label="Cancellation Fee"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="policies.cancellation.noShowFee"
            label="No Show Fee"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Damage Policy"
        description="Vehicle damage and deposit rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<CarRentalFormValues>
            name="policies.damagePolicy.insuranceIncluded"
            label="Insurance Included"
          />

          <FormInput<CarRentalFormValues>
            name="policies.damagePolicy.excessAmount"
            label="Excess Amount"
            type="number"
          />

          <FormSwitch<CarRentalFormValues>
            name="policies.damagePolicy.depositRequired"
            label="Deposit Required"
          />
        </div>
      </FormSection>

      <FormSection title="Rental Rules" description="Usage restrictions">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormValues>
            name="policies.rules.minimumAge"
            label="Minimum Age"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="policies.rules.maximumAge"
            label="Maximum Age"
            type="number"
          />

          <FormSwitch<CarRentalFormValues>
            name="policies.rules.requiresDriverLicense"
            label="Requires Driver License"
          />

          <FormSwitch<CarRentalFormValues>
            name="policies.rules.requiresInternationalLicense"
            label="Requires International License"
          />

          <FormInput<CarRentalFormValues>
            name="policies.rules.minimumDrivingExperienceYears"
            label="Minimum Driving Experience Years"
            type="number"
          />

          <FormSwitch<CarRentalFormValues>
            name="policies.rules.smokingAllowed"
            label="Smoking Allowed"
          />

          <FormSwitch<CarRentalFormValues>
            name="policies.rules.petsAllowed"
            label="Pets Allowed"
          />

          <FormSwitch<CarRentalFormValues>
            name="policies.rules.offRoadAllowed"
            label="Off Road Allowed"
          />

          <FormSwitch<CarRentalFormValues>
            name="policies.rules.crossBorderAllowed"
            label="Cross Border Allowed"
          />

          <FormSwitch<CarRentalFormValues>
            name="policies.rules.additionalDriverAllowed"
            label="Additional Driver Allowed"
          />

          <FormInput<CarRentalFormValues>
            name="policies.rules.lateReturnFeePerHour"
            label="Late Return Fee Per Hour"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Required Documents"
        description="Customer documents required"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormValues>
            name="policies.requiredDocuments.documents.0"
            label="Document Type"
            options={documentOptions}
          />
        </div>
      </FormSection>
    </>
  );
}
