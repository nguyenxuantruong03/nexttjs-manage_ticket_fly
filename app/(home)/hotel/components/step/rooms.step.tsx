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

import { HotelFormSchema } from "../schema";

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
          <FormInput<HotelFormSchema>
            name="roomTypes.0.name"
            label="Room Type Name"
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.description"
            label="Description"
          />

          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection title="Room" description="Room information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.name"
            label="Room Name"
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.description"
            label="Description"
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomSize"
            label="Room Size (㎡)"
            type="number"
          />

          <FormSelect<HotelFormSchema>
            name="roomTypes.0.rooms.0.bedTypes.0"
            label="Bed Type"
            options={bedTypeOptions}
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.maxGuests"
            label="Max Guests"
            type="number"
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.maxAdults"
            label="Max Adults"
            type="number"
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.maxChildren"
            label="Max Children"
            type="number"
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.totalRooms"
            label="Total Rooms"
            type="number"
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.bedCount"
            label="Bed Count"
            type="number"
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.bathroomCount"
            label="Bathroom Count"
            type="number"
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.floor"
            label="Floor"
            type="number"
          />

          <FormSelect<HotelFormSchema>
            name="roomTypes.0.rooms.0.mealPlan"
            label="Meal Plan"
            options={mealPlanOptions}
          />

          <FormSelect<HotelFormSchema>
            name="roomTypes.0.rooms.0.smokingPolicy"
            label="Smoking Policy"
            options={smokingPolicyOptions}
          />

          <FormSelect<HotelFormSchema>
            name="roomTypes.0.rooms.0.viewType"
            label="View"
            options={roomViewOptions}
          />

          <FormSelect<HotelFormSchema>
            name="roomTypes.0.rooms.0.bathRoomType"
            label="Bathroom Type"
            options={bathroomOptions}
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.breakfastIncluded"
            label="Breakfast Included"
          />

          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.soundproof"
            label="Soundproof"
          />

          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.nonSmoking"
            label="Non Smoking"
          />

          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.airConditioning"
            label="Air Conditioning"
          />

          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.kitchenette"
            label="Kitchenette"
          />

          <FormSwitch<HotelFormSchema>
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
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.tv"
            label="TV"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.minibar"
            label="Minibar"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.refrigerator"
            label="Refrigerator"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.microwave"
            label="Microwave"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.coffeeMachine"
            label="Coffee Machine"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.kettle"
            label="Kettle"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.safe"
            label="Safe"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.wardrobe"
            label="Wardrobe"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.hairDryer"
            label="Hair Dryer"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.ironingFacilities"
            label="Ironing Facilities"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.slippers"
            label="Slippers"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.bathrobe"
            label="Bathrobe"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.telephone"
            label="Telephone"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.desk"
            label="Desk"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.sofa"
            label="Sofa"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.balcony"
            label="Balcony"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.bathtub"
            label="Bathtub"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.shower"
            label="Shower"
          />
          <FormSwitch<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomFacilities.streamingService"
            label="Streaming Service"
          />
        </div>
      </FormSection>

      <FormSection title="Room Images" description="Room gallery">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomImage.0.thumbnail"
            label="Thumbnail"
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomImage.0.cover"
            label="Cover"
          />

          <FormInput<HotelFormSchema>
            name="roomTypes.0.rooms.0.roomImage.0.hero"
            label="Hero"
          />
        </div>
      </FormSection>

      <FormSection title="Inventory" description="Room inventory">
        <FormInput<HotelFormSchema>
          name="inventory.0.roomTypeId"
          label="Room Type ID"
        />
      </FormSection>
    </>
  );
}
