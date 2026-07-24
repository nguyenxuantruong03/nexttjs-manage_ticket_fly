// step/facilities.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { HotelFormSchema } from "../schema";

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
          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.wifi.available"
            label="Available"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.wifi.free"
            label="Free Wifi"
          />

          <FormInput<HotelFormSchema>
            name="facilitiesHotel.wifi.speedMbps"
            label="Speed (Mbps)"
            type="number"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.wifi.availableInRooms"
            label="Available In Rooms"
          />

          <FormSwitch<HotelFormSchema>
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
          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.swimmingPool.available"
            label="Available"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.swimmingPool.indoor"
            label="Indoor"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.swimmingPool.outdoor"
            label="Outdoor"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.swimmingPool.infinity"
            label="Infinity Pool"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.swimmingPool.heated"
            label="Heated"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.swimmingPool.kidsPool"
            label="Kids Pool"
          />
        </div>
      </FormSection>

      <FormSection title="Gym" description="Fitness facilities">
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.gym.available"
            label="Available"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.gym.open24Hours"
            label="Open 24 Hours"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.gym.personalTrainer"
            label="Personal Trainer"
          />
        </div>
      </FormSection>

      <FormSection title="Restaurant" description="Restaurant information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormSchema>
            name="facilitiesHotel.restaurants.0.name"
            label="Restaurant Name"
          />

          <FormInput<HotelFormSchema>
            name="facilitiesHotel.restaurants.0.price"
            label="Average Price"
            type="number"
          />

          <FormInput<HotelFormSchema>
            name="facilitiesHotel.restaurants.0.capacity"
            label="Capacity"
            type="number"
          />

          <FormInput<HotelFormSchema>
            name="facilitiesHotel.restaurants.0.opening"
            label="Opening Hours"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.restaurants.0.breakfast"
            label="Breakfast"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.restaurants.0.lunch"
            label="Lunch"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.restaurants.0.dinner"
            label="Dinner"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.restaurants.0.buffet"
            label="Buffet"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.restaurants.0.reservation"
            label="Reservation Required"
          />
        </div>
      </FormSection>

      <FormSection title="Restaurant Images" description="Restaurant gallery">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormSchema>
            name="facilitiesHotel.restaurants.0.images.0.url"
            label="Image URL"
          />

          <FormSelect<HotelFormSchema>
            name="facilitiesHotel.restaurants.0.images.0.category"
            label="Category"
            options={restaurantCategoryOptions}
          />

          <FormInput<HotelFormSchema>
            name="facilitiesHotel.restaurants.0.images.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<HotelFormSchema>
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
          <FormSwitch<HotelFormSchema> name="facilitiesHotel.bar" label="Bar" />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.roomService"
            label="Room Service"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.laundry"
            label="Laundry"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.meetingRoom"
            label="Meeting Room"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.businessCenter"
            label="Business Center"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.familyRoom"
            label="Family Room"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.kidsClub"
            label="Kids Club"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.playground"
            label="Playground"
          />

          <FormSwitch<HotelFormSchema> name="facilitiesHotel.atm" label="ATM" />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.currencyExchange"
            label="Currency Exchange"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.concierge"
            label="Concierge"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.beachAccess"
            label="Beach Access"
          />

          <FormSwitch<HotelFormSchema>
            name="facilitiesHotel.privateBeach"
            label="Private Beach"
          />
        </div>
      </FormSection>
    </>
  );
}
