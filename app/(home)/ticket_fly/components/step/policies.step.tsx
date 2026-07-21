// step/policies.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { FlyRefundType } from "@/types/bookings/ticket-fly/enums";
import { TicketFlyFormValues } from "../schema/core/fly.schema";

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
          <FormSwitch<TicketFlyFormValues>
            name="policies.cancellation.refundable"
            label="Refundable"
          />

          <FormSelect<TicketFlyFormValues>
            name="policies.cancellation.refundType"
            label="Refund Type"
            options={refundTypeOptions}
          />

          <FormInput<TicketFlyFormValues>
            name="policies.cancellation.cancellationFee"
            label="Cancellation Fee"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="policies.cancellation.noShowFee"
            label="No Show Fee"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="policies.cancellation.freeCancellationBeforeHours"
            label="Free Cancellation Before Hours"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Change Policy" description="Flight change rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<TicketFlyFormValues>
            name="policies.change.allowed"
            label="Change Allowed"
          />

          <FormInput<TicketFlyFormValues>
            name="policies.change.changeFee"
            label="Change Fee"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="policies.change.maxChanges"
            label="Maximum Changes"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
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
          <FormInput<TicketFlyFormValues>
            name="policies.baggage.cabinIncludedKg"
            label="Cabin Included KG"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="policies.baggage.checkedIncludedKg"
            label="Checked Included KG"
            type="number"
          />

          <FormSwitch<TicketFlyFormValues>
            name="policies.baggage.extraAllowed"
            label="Extra Baggage Allowed"
          />

          <FormInput<TicketFlyFormValues>
            name="policies.baggage.extraPricePerKg"
            label="Extra Price Per KG"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Boarding Policy" description="Boarding configuration">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="policies.boarding.boardingBeforeMinutes"
            label="Boarding Before Minutes"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="policies.boarding.gateCloseMinutes"
            label="Gate Close Minutes"
            type="number"
          />

          <FormSwitch<TicketFlyFormValues>
            name="policies.boarding.onlineBoardingPass"
            label="Online Boarding Pass"
          />

          <FormSwitch<TicketFlyFormValues>
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
          <FormSwitch<TicketFlyFormValues>
            name="policies.passenger.infantAllowed"
            label="Infant Allowed"
          />

          <FormSwitch<TicketFlyFormValues>
            name="policies.passenger.childAllowed"
            label="Child Allowed"
          />

          <FormSwitch<TicketFlyFormValues>
            name="policies.passenger.petsAllowed"
            label="Pets Allowed"
          />

          <FormSwitch<TicketFlyFormValues>
            name="policies.passenger.unaccompaniedMinor"
            label="Unaccompanied Minor"
          />

          <FormSwitch<TicketFlyFormValues>
            name="policies.passenger.wheelchairSupport"
            label="Wheelchair Support"
          />

          <FormSwitch<TicketFlyFormValues>
            name="policies.passenger.pregnantPassengerAllowed"
            label="Pregnant Passenger Allowed"
          />
        </div>
      </FormSection>

      <FormSection title="Check In Policy" description="Check in rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<TicketFlyFormValues>
            name="policies.checkIn.onlineCheckIn"
            label="Online Check In"
          />

          <FormInput<TicketFlyFormValues>
            name="policies.checkIn.opensBeforeHours"
            label="Opens Before Hours"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="policies.checkIn.closesBeforeMinutes"
            label="Closes Before Minutes"
            type="number"
          />

          <FormSwitch<TicketFlyFormValues>
            name="policies.checkIn.airportCheckIn"
            label="Airport Check In"
          />

          <FormSwitch<TicketFlyFormValues>
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
          <FormSwitch<TicketFlyFormValues>
            name="policies.transit.selfTransfer"
            label="Self Transfer"
          />

          <FormSwitch<TicketFlyFormValues>
            name="policies.transit.baggageTransfer"
            label="Baggage Transfer"
          />

          <FormSwitch<TicketFlyFormValues>
            name="policies.transit.visaRequiredDuringTransit"
            label="Visa Required During Transit"
          />

          <FormInput<TicketFlyFormValues>
            name="policies.transit.minimumConnectionMinutes"
            label="Minimum Connection Minutes"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Visa Policy" description="Visa requirements">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<TicketFlyFormValues>
            name="policies.visa.visaRequired"
            label="Visa Required"
          />

          <FormSwitch<TicketFlyFormValues>
            name="policies.visa.passportRequired"
            label="Passport Required"
          />

          <FormInput<TicketFlyFormValues>
            name="policies.visa.passportMinimumValidityMonths"
            label="Passport Minimum Validity Months"
            type="number"
          />

          <FormSwitch<TicketFlyFormValues>
            name="policies.visa.healthDocumentsRequired"
            label="Health Documents Required"
          />

          <FormInput<TicketFlyFormValues>
            name="policies.visa.note"
            label="Visa Note"
          />
        </div>
      </FormSection>
    </>
  );
}
