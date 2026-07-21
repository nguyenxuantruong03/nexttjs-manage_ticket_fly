// step/facilities.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { HotelFormValues } from "../schema";

import { RetaurentCategory } from "@/types/bookings/hotel/enum/enums";

const restaurantCategoryOptions = Object.values(RetaurentCategory).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function FacilitiesStep() {
  return (
    <>
      <FormSection title="Wifi" description="Wifi facilities">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.wifi.available"
            label="Available"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.wifi.free"
            label="Free Wifi"
          />

          <FormInput<HotelFormValues>
            name="facilitiesHotel.wifi.speedMbps"
            label="Speed (Mbps)"
            type="number"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.wifi.availableInRooms"
            label="Available In Rooms"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.wifi.availableInPublicAreas"
            label="Available In Public Areas"
          />
        </div>
      </FormSection>

      <FormSection
        title="Swimming Pool"
        description="Swimming pool information"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.swimmingPool.available"
            label="Available"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.swimmingPool.indoor"
            label="Indoor"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.swimmingPool.outdoor"
            label="Outdoor"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.swimmingPool.infinity"
            label="Infinity Pool"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.swimmingPool.heated"
            label="Heated"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.swimmingPool.kidsPool"
            label="Kids Pool"
          />
        </div>
      </FormSection>

      <FormSection title="Gym" description="Fitness facilities">
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.gym.available"
            label="Available"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.gym.open24Hours"
            label="Open 24 Hours"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.gym.personalTrainer"
            label="Personal Trainer"
          />
        </div>
      </FormSection>

      <FormSection title="Restaurant" description="Restaurant information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="facilitiesHotel.restaurants.0.name"
            label="Restaurant Name"
          />

          <FormInput<HotelFormValues>
            name="facilitiesHotel.restaurants.0.price"
            label="Average Price"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="facilitiesHotel.restaurants.0.capacity"
            label="Capacity"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="facilitiesHotel.restaurants.0.opening"
            label="Opening Hours"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.restaurants.0.breakfast"
            label="Breakfast"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.restaurants.0.lunch"
            label="Lunch"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.restaurants.0.dinner"
            label="Dinner"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.restaurants.0.buffet"
            label="Buffet"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.restaurants.0.reservation"
            label="Reservation Required"
          />
        </div>
      </FormSection>

      <FormSection title="Restaurant Images" description="Restaurant gallery">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="facilitiesHotel.restaurants.0.images.0.url"
            label="Image URL"
          />

          <FormSelect<HotelFormValues>
            name="facilitiesHotel.restaurants.0.images.0.category"
            label="Category"
            options={restaurantCategoryOptions}
          />

          <FormInput<HotelFormValues>
            name="facilitiesHotel.restaurants.0.images.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.restaurants.0.images.0.isPrimary"
            label="Primary Image"
          />
        </div>
      </FormSection>

      <FormSection
        title="General Facilities"
        description="Other hotel facilities"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<HotelFormValues> name="facilitiesHotel.bar" label="Bar" />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.roomService"
            label="Room Service"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.laundry"
            label="Laundry"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.meetingRoom"
            label="Meeting Room"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.businessCenter"
            label="Business Center"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.familyRoom"
            label="Family Room"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.kidsClub"
            label="Kids Club"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.playground"
            label="Playground"
          />

          <FormSwitch<HotelFormValues> name="facilitiesHotel.atm" label="ATM" />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.currencyExchange"
            label="Currency Exchange"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.concierge"
            label="Concierge"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.beachAccess"
            label="Beach Access"
          />

          <FormSwitch<HotelFormValues>
            name="facilitiesHotel.privateBeach"
            label="Private Beach"
          />
        </div>
      </FormSection>
    </>
  );
}
