// step/marina.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";
import { YachtFormValues } from "../schema/core/yacht.schema";



export default function MarinaStep() {
  return (
    <>
      {/* ======================================================
          MARINA INFORMATION
      ====================================================== */}

      <FormSection
        title="Marina Information"
        description="Yacht departure marina details"
      >
        <div className="grid gap-6 md:grid-cols-2">

          <FormInput<YachtFormValues>
            name="marina.0.name"
            label="Marina Name"
          />


          <FormInput<YachtFormValues>
            name="marina.0.addressId"
            label="Address ID"
          />


          <FormInput<YachtFormValues>
            name="marina.0.city"
            label="City"
          />


          <FormInput<YachtFormValues>
            name="marina.0.country"
            label="Country"
          />


          <FormInput<YachtFormValues>
            name="marina.0.contactPhone"
            label="Contact Phone"
          />


          <FormInput<YachtFormValues>
            name="marina.0.operatingHours"
            label="Operating Hours"
          />


          <FormInput<YachtFormValues>
            name="marina.0.latitude"
            label="Latitude"
            type="number"
          />


          <FormInput<YachtFormValues>
            name="marina.0.longitude"
            label="Longitude"
            type="number"
          />

        </div>
      </FormSection>




      {/* ======================================================
          MARINA FACILITIES
      ====================================================== */}

      <FormSection
        title="Marina Facilities"
        description="Available facilities at marina"
      >

        <div className="grid gap-6 md:grid-cols-3">


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.fuelStation"
            label="Fuel Station"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.restaurant"
            label="Restaurant"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.cafe"
            label="Cafe"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.parking"
            label="Parking"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.waitingLounge"
            label="Waiting Lounge"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.toilet"
            label="Toilet"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.shower"
            label="Shower"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.drinkingWater"
            label="Drinking Water"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.electricity"
            label="Electricity"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.wifi"
            label="WiFi"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.security"
            label="Security"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.cctv"
            label="CCTV"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.luggageStorage"
            label="Luggage Storage"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.convenienceStore"
            label="Convenience Store"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.atm"
            label="ATM"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.customs"
            label="Customs"
          />


          <FormSwitch<YachtFormValues>
            name="marina.0.marinaFacilities.immigration"
            label="Immigration"
          />


        </div>

      </FormSection>




      {/* ======================================================
          MARINA ROUTING INFORMATION
      ====================================================== */}

      <FormSection
        title="Marina Location"
        description="Geographical information"
      >

        <div className="grid gap-6 md:grid-cols-2">


          <FormInput<YachtFormValues>
            name="marina.0.latitude"
            label="Latitude"
            type="number"
          />


          <FormInput<YachtFormValues>
            name="marina.0.longitude"
            label="Longitude"
            type="number"
          />


        </div>

      </FormSection>

    </>
  );
}