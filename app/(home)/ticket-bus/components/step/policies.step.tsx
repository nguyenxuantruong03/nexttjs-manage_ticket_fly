// step/policies.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import {
  BusLuggageUnit,
  BusRefundType,
  BusTicketChangeType,
} from "@/types/bookings/bus/enums";

import { BusFormValues } from "../schema/core/bus.schema";

const refundTypeOptions = Object.values(BusRefundType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const luggageUnitOptions = Object.values(BusLuggageUnit).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const ticketChangeTypeOptions = Object.values(BusTicketChangeType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function PoliciesStep() {
  return (
    <>
      <FormSection title="Boarding Policy" description="Boarding requirements">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="policies.boarding.checkInBeforeMinutes"
            label="Check-in Before (Minutes)"
            type="number"
          />

          <FormInput<BusFormValues>
            name="policies.boarding.boardingGateCloseMinutes"
            label="Gate Close Before (Minutes)"
            type="number"
          />

          <FormSwitch<BusFormValues>
            name="policies.boarding.digitalTicketAccepted"
            label="Digital Ticket Accepted"
          />

          <FormSwitch<BusFormValues>
            name="policies.boarding.printedTicketRequired"
            label="Printed Ticket Required"
          />
        </div>
      </FormSection>

      <FormSection
        title="Cancellation Policy"
        description="Refund & cancellation"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<BusFormValues>
            name="policies.cancellation.refundable"
            label="Refundable"
          />

          <FormSelect<BusFormValues>
            name="policies.cancellation.refundType"
            label="Refund Type"
            options={refundTypeOptions}
          />

          <FormSwitch<BusFormValues>
            name="policies.cancellation.freeCancellation"
            label="Free Cancellation"
          />

          <FormInput<BusFormValues>
            name="policies.cancellation.freeCancellationBeforeHours"
            label="Free Cancellation Before (Hours)"
            type="number"
          />

          <FormInput<BusFormValues>
            name="policies.cancellation.cancellationFee"
            label="Cancellation Fee"
            type="number"
          />

          <FormInput<BusFormValues>
            name="policies.cancellation.noShowFee"
            label="No Show Fee"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Ticket Change Policy"
        description="Ticket modification rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<BusFormValues>
            name="policies.change.type"
            label="Change Type"
            options={ticketChangeTypeOptions}
          />

          <FormInput<BusFormValues>
            name="policies.change.changeFee"
            label="Change Fee"
            type="number"
          />

          <FormInput<BusFormValues>
            name="policies.change.maxChanges"
            label="Maximum Changes"
            type="number"
          />

          <FormInput<BusFormValues>
            name="policies.change.changeBeforeDepartureHours"
            label="Change Before Departure (Hours)"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Luggage Policy" description="Luggage allowance">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="policies.luggage.includedLuggage"
            label="Included Luggage"
            type="number"
          />

          <FormSelect<BusFormValues>
            name="policies.luggage.unit"
            label="Unit"
            options={luggageUnitOptions}
          />

          <FormSwitch<BusFormValues>
            name="policies.luggage.extraLuggageAllowed"
            label="Extra Luggage Allowed"
          />

          <FormInput<BusFormValues>
            name="policies.luggage.extraLuggageFee"
            label="Extra Luggage Fee"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Child Policy" description="Child ticket policy">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="policies.child.freeAgeUnder"
            label="Free Age Under"
            type="number"
          />

          <FormInput<BusFormValues>
            name="policies.child.childTicketAgeFrom"
            label="Child Ticket Age From"
            type="number"
          />

          <FormInput<BusFormValues>
            name="policies.child.childTicketAgeTo"
            label="Child Ticket Age To"
            type="number"
          />

          <FormInput<BusFormValues>
            name="policies.child.childDiscountPercent"
            label="Child Discount (%)"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Passenger Policy"
        description="Passenger restrictions"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<BusFormValues>
            name="policies.passenger.petsAllowed"
            label="Pets Allowed"
          />

          <FormSwitch<BusFormValues>
            name="policies.passenger.smokingAllowed"
            label="Smoking Allowed"
          />

          <FormSwitch<BusFormValues>
            name="policies.passenger.foodAllowed"
            label="Food Allowed"
          />

          <FormSwitch<BusFormValues>
            name="policies.passenger.alcoholAllowed"
            label="Alcohol Allowed"
          />

          <FormSwitch<BusFormValues>
            name="policies.passenger.wheelchairAccessible"
            label="Wheelchair Accessible"
          />

          <FormSwitch<BusFormValues>
            name="policies.passenger.specialAssistanceAvailable"
            label="Special Assistance Available"
          />
        </div>
      </FormSection>
    </>
  );
}
