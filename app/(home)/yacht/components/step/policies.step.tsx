// step/policies.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";


import { YachtRefundType } from "@/types/bookings/yacht/enums";
import { YachtFormSchema } from "../schema/core/yacht.schema";

const refundTypeOptions = Object.values(YachtRefundType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function PoliciesStep() {
  return (
    <>
      {/* ======================================================
          BOOKING POLICY
      ====================================================== */}

      <FormSection
        title="Booking Policy"
        description="Booking confirmation and modification rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<YachtFormSchema>
            name="policies.booking.instantConfirmation"
            label="Instant Confirmation"
          />

          <FormInput<YachtFormSchema>
            name="policies.booking.advanceBookingHours"
            label="Advance Booking Hours"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="policies.booking.minimumBookingDuration"
            label="Minimum Booking Duration"
            type="number"
          />

          <FormSwitch<YachtFormSchema>
            name="policies.booking.modificationAllowed"
            label="Modification Allowed"
          />
        </div>
      </FormSection>

      {/* ======================================================
          CANCELLATION POLICY
      ====================================================== */}

      <FormSection
        title="Cancellation Policy"
        description="Refund and cancellation rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<YachtFormSchema>
            name="policies.cancellation.refundable"
            label="Refundable"
          />

          <FormSwitch<YachtFormSchema>
            name="policies.cancellation.freeCancellation"
            label="Free Cancellation"
          />

          <FormInput<YachtFormSchema>
            name="policies.cancellation.freeCancellationBeforeHours"
            label="Free Cancellation Before Hours"
            type="number"
          />

          <FormSelect<YachtFormSchema>
            name="policies.cancellation.cancellationType"
            label="Cancellation Type"
            options={refundTypeOptions}
          />

          <FormInput<YachtFormSchema>
            name="policies.cancellation.refundPercentage"
            label="Refund Percentage"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="policies.cancellation.cancellationFee"
            label="Cancellation Fee"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="policies.cancellation.noShowFee"
            label="No Show Fee"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          PASSENGER REQUIREMENT
      ====================================================== */}

      <FormSection
        title="Passenger Requirement"
        description="Passenger restrictions and requirements"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="policies.passenger.minimumAge"
            label="Minimum Age"
            type="number"
          />

          <FormSwitch<YachtFormSchema>
            name="policies.passenger.passportRequired"
            label="Passport Required"
          />

          <FormSwitch<YachtFormSchema>
            name="policies.passenger.identityRequired"
            label="Identity Required"
          />

          <FormInput<YachtFormSchema>
            name="policies.passenger.nationalityRestriction.0"
            label="Nationality Restriction"
          />

          <FormSwitch<YachtFormSchema>
            name="policies.passenger.childAllowed"
            label="Child Allowed"
          />

          <FormSwitch<YachtFormSchema>
            name="policies.passenger.infantAllowed"
            label="Infant Allowed"
          />

          <FormSwitch<YachtFormSchema>
            name="policies.passenger.pregnantPassengerAllowed"
            label="Pregnant Passenger Allowed"
          />
        </div>
      </FormSection>

      {/* ======================================================
          LUGGAGE POLICY
      ====================================================== */}

      <FormSection title="Luggage Policy" description="Passenger luggage rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<YachtFormSchema>
            name="policies.luggage.allowed"
            label="Luggage Allowed"
          />

          <FormInput<YachtFormSchema>
            name="policies.luggage.maxWeightKg"
            label="Maximum Weight Kg"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="policies.luggage.maxPieces"
            label="Maximum Pieces"
            type="number"
          />

          <FormSwitch<YachtFormSchema>
            name="policies.luggage.oversizedAllowed"
            label="Oversized Allowed"
          />

          <FormInput<YachtFormSchema>
            name="policies.luggage.note"
            label="Note"
          />
        </div>
      </FormSection>

      {/* ======================================================
          WAITING POLICY
      ====================================================== */}

      <FormSection title="Waiting Policy" description="Waiting time rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="policies.waiting.freeWaitingMinutes"
            label="Free Waiting Minutes"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="policies.waiting.extraWaitingFeePerHour"
            label="Extra Waiting Fee Per Hour"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="policies.waiting.maximumWaitingHours"
            label="Maximum Waiting Hours"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          MEET AND GREET
      ====================================================== */}

      <FormSection
        title="Meet And Greet"
        description="Passenger pickup support"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<YachtFormSchema>
            name="policies.meetAndGreet.available"
            label="Available"
          />

          <FormSwitch<YachtFormSchema>
            name="policies.meetAndGreet.pickupSign"
            label="Pickup Sign"
          />

          <FormInput<YachtFormSchema>
            name="policies.meetAndGreet.staffLanguage.0"
            label="Staff Language"
          />

          <FormInput<YachtFormSchema>
            name="policies.meetAndGreet.meetingPoint"
            label="Meeting Point"
          />
        </div>
      </FormSection>

      {/* ======================================================
          FLIGHT SUPPORT
      ====================================================== */}

      <FormSection
        title="Flight Support"
        description="Airport and flight assistance"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<YachtFormSchema>
            name="policies.flightSupport.airportPickup"
            label="Airport Pickup"
          />

          <FormSwitch<YachtFormSchema>
            name="policies.flightSupport.flightNumberRequired"
            label="Flight Number Required"
          />

          <FormSwitch<YachtFormSchema>
            name="policies.flightSupport.flightDelayMonitoring"
            label="Flight Delay Monitoring"
          />
        </div>
      </FormSection>
    </>
  );
}
