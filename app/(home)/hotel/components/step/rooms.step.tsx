// step/rooms.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import {
  BathroomType,
  BedType,
  MealPlan,
  RoomViewType,
  SmokingPolicy,
} from "@/types/bookings/hotel/enum/enums";

import { HotelFormValues } from "../schema";

const bedTypeOptions = Object.values(BedType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const mealPlanOptions = Object.values(MealPlan).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const smokingPolicyOptions = Object.values(SmokingPolicy).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const roomViewOptions = Object.values(RoomViewType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const bathroomOptions = Object.values(BathroomType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function RoomsStep() {
  return (
    <>
      <FormSection title="Room Type" description="Room type information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="roomTypes.0.name"
            label="Room Type Name"
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.description"
            label="Description"
          />

          <FormSwitch<HotelFormValues>
            name="roomTypes.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection title="Room" description="Room information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.name"
            label="Room Name"
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.description"
            label="Description"
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.roomSize"
            label="Room Size (㎡)"
            type="number"
          />

          <FormSelect<HotelFormValues>
            name="roomTypes.0.rooms.0.bedTypes.0"
            label="Bed Type"
            options={bedTypeOptions}
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.maxGuests"
            label="Max Guests"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.maxAdults"
            label="Max Adults"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.maxChildren"
            label="Max Children"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.totalRooms"
            label="Total Rooms"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.bedCount"
            label="Bed Count"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.bathroomCount"
            label="Bathroom Count"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.floor"
            label="Floor"
            type="number"
          />

          <FormSelect<HotelFormValues>
            name="roomTypes.0.rooms.0.mealPlan"
            label="Meal Plan"
            options={mealPlanOptions}
          />

          <FormSelect<HotelFormValues>
            name="roomTypes.0.rooms.0.smokingPolicy"
            label="Smoking Policy"
            options={smokingPolicyOptions}
          />

          <FormSelect<HotelFormValues>
            name="roomTypes.0.rooms.0.viewType"
            label="View"
            options={roomViewOptions}
          />

          <FormSelect<HotelFormValues>
            name="roomTypes.0.rooms.0.bathRoomType"
            label="Bathroom Type"
            options={bathroomOptions}
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.breakfastIncluded"
            label="Breakfast Included"
          />

          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.soundproof"
            label="Soundproof"
          />

          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.nonSmoking"
            label="Non Smoking"
          />

          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.airConditioning"
            label="Air Conditioning"
          />

          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.kitchenette"
            label="Kitchenette"
          />

          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.privateBathroom"
            label="Private Bathroom"
          />
        </div>
      </FormSection>

      <FormSection
        title="Room Facilities"
        description="Facilities inside the room"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.tv"
            label="TV"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.minibar"
            label="Minibar"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.refrigerator"
            label="Refrigerator"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.microwave"
            label="Microwave"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.coffeeMachine"
            label="Coffee Machine"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.kettle"
            label="Kettle"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.safe"
            label="Safe"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.wardrobe"
            label="Wardrobe"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.hairDryer"
            label="Hair Dryer"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.ironingFacilities"
            label="Ironing Facilities"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.slippers"
            label="Slippers"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.bathrobe"
            label="Bathrobe"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.telephone"
            label="Telephone"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.desk"
            label="Desk"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.sofa"
            label="Sofa"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.balcony"
            label="Balcony"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.bathtub"
            label="Bathtub"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.shower"
            label="Shower"
          />
          <FormSwitch<HotelFormValues>
            name="roomTypes.0.rooms.0.roomFacilities.streamingService"
            label="Streaming Service"
          />
        </div>
      </FormSection>

      <FormSection title="Room Images" description="Room gallery">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.roomImage.0.thumbnail"
            label="Thumbnail"
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.roomImage.0.cover"
            label="Cover"
          />

          <FormInput<HotelFormValues>
            name="roomTypes.0.rooms.0.roomImage.0.hero"
            label="Hero"
          />
        </div>
      </FormSection>

      <FormSection title="Inventory" description="Room inventory">
        <FormInput<HotelFormValues>
          name="inventory.0.roomTypeId"
          label="Room Type ID"
        />
      </FormSection>
    </>
  );
}
