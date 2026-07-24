// step/trip.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import {
  RentalLocationType,
  RentalDurationType,
} from "@/types/bookings/car_rental/enums";
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

const locationTypeOptions = Object.values(RentalLocationType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const durationTypeOptions = Object.values(RentalDurationType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function TripStep() {
  return (
    <>
      <FormSection
        title="Trip Locations"
        description="Pickup and dropoff locations"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormSchema>
            name="trip.locations.0.type"
            label="Location Type"
            options={locationTypeOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="trip.locations.0.name"
            label="Location Name"
          />

          <FormInput<CarRentalFormSchema>
            name="trip.locations.0.addressId"
            label="Address ID"
          />

          <FormInput<CarRentalFormSchema>
            name="trip.locations.0.bookingId"
            label="Booking ID"
          />

          <FormSwitch<CarRentalFormSchema>
            name="trip.locations.0.available"
            label="Available"
          />
        </div>
      </FormSection>

      <FormSection title="Trip Schedule" description="Rental duration settings">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormSchema>
            name="trip.schedule.durationType"
            label="Duration Type"
            options={durationTypeOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="trip.schedule.minimumHours"
            label="Minimum Hours"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="trip.schedule.minimumDays"
            label="Minimum Days"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="trip.schedule.maximumDays"
            label="Maximum Days"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="trip.schedule.pickupTime"
            label="Pickup Time"
            type="time"
          />

          <FormInput<CarRentalFormSchema>
            name="trip.schedule.returnTime"
            label="Return Time"
            type="time"
          />
        </div>
      </FormSection>

      <FormSection title="Trip Fees" description="Additional trip charges">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormSchema>
            name="trip.tripFee.airportFee"
            label="Airport Fee"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="trip.tripFee.oneWayFee"
            label="One Way Fee"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="trip.tripFee.deliveryFee"
            label="Delivery Fee"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="trip.tripFee.pickupFee"
            label="Pickup Fee"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="trip.tripFee.dropoffFee"
            label="Dropoff Fee"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
