// step/policies.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { HotelFormValues } from "../schema";

export default function PoliciesStep() {
  return (
    <>
      <FormSection title="Booking Policy" description="Booking rules">
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.booking.instantConfirmation"
            label="Instant Confirmation"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.booking.refundable"
            label="Refundable"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.booking.payAtHotel"
            label="Pay At Hotel"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.booking.payLater"
            label="Pay Later"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.booking.breakfastIncluded"
            label="Breakfast Included"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.booking.mobileVoucher"
            label="Mobile Voucher"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.booking.onlineCheckIn"
            label="Online Check In"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.booking.onlineCheckOut"
            label="Online Check Out"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.booking.requiresCreditCardGuarantee"
            label="Credit Card Guarantee"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.booking.requiresDeposit"
            label="Requires Deposit"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.booking.requiresGovernmentId"
            label="Government ID Required"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.booking.allowsModification"
            label="Allow Modification"
          />
        </div>
      </FormSection>

      <FormSection title="Check In Policy" description="Arrival & departure">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.checkIn.checkInTime"
            label="Check In Time"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.checkIn.checkOutTime"
            label="Check Out Time"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.checkIn.keyCollectionNote"
            label="Key Collection Note"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.checkIn.frontDesk24Hours"
            label="24 Hours Front Desk"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.checkIn.selfCheckIn"
            label="Self Check In"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.checkIn.expressCheckIn"
            label="Express Check In"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.checkIn.expressCheckOut"
            label="Express Check Out"
          />
        </div>
      </FormSection>

      <FormSection title="Guest Policy" description="Guest requirements">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.guest.minimumAge"
            label="Minimum Age"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.guest.extraBedFee"
            label="Extra Bed Fee"
            type="number"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-6">
          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.guest.childrenAllowed"
            label="Children Allowed"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.guest.petsAllowed"
            label="Pets Allowed"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.guest.smokingAllowed"
            label="Smoking Allowed"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.guest.extraBedAvailable"
            label="Extra Bed Available"
          />
        </div>
      </FormSection>

      <FormSection title="Payment Policy" description="Payment options">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.payment.paymentTypes.0"
            label="Payment Type"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.payment.acceptedCards.0"
            label="Accepted Card"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.payment.depositAmount"
            label="Deposit Amount"
            type="number"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.payment.cashAccepted"
            label="Cash Accepted"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.payment.depositRequired"
            label="Deposit Required"
          />
        </div>
      </FormSection>

      <FormSection title="Cancellation Policy" description="Cancellation rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.cancellation.freeCancellation"
            label="Free Cancellation"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.cancellation.freeCancellationBeforeHours"
            label="Free Before Hours"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.cancellation.cancellationFee"
            label="Cancellation Fee"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.cancellation.noShowFee"
            label="No Show Fee"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="House Rules" description="Hotel rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.houseRules.quietHoursStart"
            label="Quiet Hours Start"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.houseRules.quietHoursEnd"
            label="Quiet Hours End"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-6">
          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.houseRules.partiesAllowed"
            label="Parties Allowed"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.houseRules.visitorsAllowed"
            label="Visitors Allowed"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.policies.houseRules.alcoholAllowed"
            label="Alcohol Allowed"
          />
        </div>
      </FormSection>
    </>
  );
}
