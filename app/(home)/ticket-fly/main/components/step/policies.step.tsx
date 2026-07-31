// step/policies.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { FlyRefundType } from "@/types/bookings/ticket-fly/enums";
import { FlyFormSchema } from "../schema/core/fly.schema";

const refundTypeOptions = Object.values(FlyRefundType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function PoliciesStep() {
  return (
    <>
      <FormSection
        title="Cancellation Policy"
        description="Flight cancellation rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<FlyFormSchema>
            name="policies.cancellation.refundable"
            label="Refundable"
          />

          <FormSelect<FlyFormSchema>
            name="policies.cancellation.refundType"
            label="Refund Type"
            options={refundTypeOptions}
          />

          <FormInput<FlyFormSchema>
            name="policies.cancellation.cancellationFee"
            label="Cancellation Fee"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="policies.cancellation.noShowFee"
            label="No Show Fee"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="policies.cancellation.freeCancellationBeforeHours"
            label="Free Cancellation Before Hours"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Change Policy" description="Flight change rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<FlyFormSchema>
            name="policies.change.allowed"
            label="Change Allowed"
          />

          <FormInput<FlyFormSchema>
            name="policies.change.changeFee"
            label="Change Fee"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="policies.change.maxChanges"
            label="Maximum Changes"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="policies.change.beforeDepartureHours"
            label="Before Departure Hours"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Baggage Policy"
        description="Passenger baggage allowance"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema>
            name="policies.baggage.cabinIncludedKg"
            label="Cabin Included KG"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="policies.baggage.checkedIncludedKg"
            label="Checked Included KG"
            type="number"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.baggage.extraAllowed"
            label="Extra Baggage Allowed"
          />

          <FormInput<FlyFormSchema>
            name="policies.baggage.extraPricePerKg"
            label="Extra Price Per KG"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Boarding Policy" description="Boarding configuration">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema>
            name="policies.boarding.boardingBeforeMinutes"
            label="Boarding Before Minutes"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="policies.boarding.gateCloseMinutes"
            label="Gate Close Minutes"
            type="number"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.boarding.onlineBoardingPass"
            label="Online Boarding Pass"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.boarding.printedBoardingPass"
            label="Printed Boarding Pass"
          />
        </div>
      </FormSection>

      <FormSection
        title="Passenger Policy"
        description="Passenger restrictions"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<FlyFormSchema>
            name="policies.passenger.infantAllowed"
            label="Infant Allowed"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.passenger.childAllowed"
            label="Child Allowed"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.passenger.petsAllowed"
            label="Pets Allowed"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.passenger.unaccompaniedMinor"
            label="Unaccompanied Minor"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.passenger.wheelchairSupport"
            label="Wheelchair Support"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.passenger.pregnantPassengerAllowed"
            label="Pregnant Passenger Allowed"
          />
        </div>
      </FormSection>

      <FormSection title="Check In Policy" description="Check in rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<FlyFormSchema>
            name="policies.checkIn.onlineCheckIn"
            label="Online Check In"
          />

          <FormInput<FlyFormSchema>
            name="policies.checkIn.opensBeforeHours"
            label="Opens Before Hours"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="policies.checkIn.closesBeforeMinutes"
            label="Closes Before Minutes"
            type="number"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.checkIn.airportCheckIn"
            label="Airport Check In"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.checkIn.mobileBoardingPass"
            label="Mobile Boarding Pass"
          />
        </div>
      </FormSection>

      <FormSection
        title="Transit Policy"
        description="Transit and connection rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<FlyFormSchema>
            name="policies.transit.selfTransfer"
            label="Self Transfer"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.transit.baggageTransfer"
            label="Baggage Transfer"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.transit.visaRequiredDuringTransit"
            label="Visa Required During Transit"
          />

          <FormInput<FlyFormSchema>
            name="policies.transit.minimumConnectionMinutes"
            label="Minimum Connection Minutes"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Visa Policy" description="Visa requirements">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<FlyFormSchema>
            name="policies.visa.visaRequired"
            label="Visa Required"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.visa.passportRequired"
            label="Passport Required"
          />

          <FormInput<FlyFormSchema>
            name="policies.visa.passportMinimumValidityMonths"
            label="Passport Minimum Validity Months"
            type="number"
          />

          <FormSwitch<FlyFormSchema>
            name="policies.visa.healthDocumentsRequired"
            label="Health Documents Required"
          />

          <FormInput<FlyFormSchema>
            name="policies.visa.note"
            label="Visa Note"
          />
        </div>
      </FormSection>
    </>
  );
}
