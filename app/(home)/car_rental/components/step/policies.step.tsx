// step/policies.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import {
  FuelPolicy,
  RentalDocument,
  UnitOption,
} from "@/types/bookings/car_rental/enums";
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

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
          <FormInput<CarRentalFormSchema>
            name="policies.minimumDriverAge"
            label="Minimum Driver Age"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="policies.minimumLicenseYears"
            label="Minimum License Years"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="policies.depositAmount"
            label="Deposit Amount"
            type="number"
          />

          <FormSelect<CarRentalFormSchema>
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
          <FormSwitch<CarRentalFormSchema>
            name="policies.mileage.unlimited"
            label="Unlimited Mileage"
          />

          <FormSelect<CarRentalFormSchema>
            name="policies.mileage.unit"
            label="Mileage Unit"
            options={unitOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="policies.mileage.dailyLimitKm"
            label="Daily Limit KM"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
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
          <FormSwitch<CarRentalFormSchema>
            name="policies.cancellation.refundable"
            label="Refundable"
          />

          <FormSwitch<CarRentalFormSchema>
            name="policies.cancellation.freeCancellation"
            label="Free Cancellation"
          />

          <FormInput<CarRentalFormSchema>
            name="policies.cancellation.freeCancellationBeforeHours"
            label="Free Cancellation Before Hours"
            type="number"
          />

          <FormSwitch<CarRentalFormSchema>
            name="policies.cancellation.partialRefund"
            label="Partial Refund"
          />

          <FormInput<CarRentalFormSchema>
            name="policies.cancellation.cancellationFee"
            label="Cancellation Fee"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
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
          <FormSwitch<CarRentalFormSchema>
            name="policies.damagePolicy.insuranceIncluded"
            label="Insurance Included"
          />

          <FormInput<CarRentalFormSchema>
            name="policies.damagePolicy.excessAmount"
            label="Excess Amount"
            type="number"
          />

          <FormSwitch<CarRentalFormSchema>
            name="policies.damagePolicy.depositRequired"
            label="Deposit Required"
          />
        </div>
      </FormSection>

      <FormSection title="Rental Rules" description="Usage restrictions">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormSchema>
            name="policies.rules.minimumAge"
            label="Minimum Age"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="policies.rules.maximumAge"
            label="Maximum Age"
            type="number"
          />

          <FormSwitch<CarRentalFormSchema>
            name="policies.rules.requiresDriverLicense"
            label="Requires Driver License"
          />

          <FormSwitch<CarRentalFormSchema>
            name="policies.rules.requiresInternationalLicense"
            label="Requires International License"
          />

          <FormInput<CarRentalFormSchema>
            name="policies.rules.minimumDrivingExperienceYears"
            label="Minimum Driving Experience Years"
            type="number"
          />

          <FormSwitch<CarRentalFormSchema>
            name="policies.rules.smokingAllowed"
            label="Smoking Allowed"
          />

          <FormSwitch<CarRentalFormSchema>
            name="policies.rules.petsAllowed"
            label="Pets Allowed"
          />

          <FormSwitch<CarRentalFormSchema>
            name="policies.rules.offRoadAllowed"
            label="Off Road Allowed"
          />

          <FormSwitch<CarRentalFormSchema>
            name="policies.rules.crossBorderAllowed"
            label="Cross Border Allowed"
          />

          <FormSwitch<CarRentalFormSchema>
            name="policies.rules.additionalDriverAllowed"
            label="Additional Driver Allowed"
          />

          <FormInput<CarRentalFormSchema>
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
          <FormSelect<CarRentalFormSchema>
            name="policies.requiredDocuments.documents.0"
            label="Document Type"
            options={documentOptions}
          />
        </div>
      </FormSection>
    </>
  );
}
