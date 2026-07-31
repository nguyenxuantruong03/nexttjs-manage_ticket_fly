// step/routes.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { YachtFormSchema } from "../schema/core/yacht.schema";
import { EntityOption } from "@/components/entity-selector";
import { Address } from "@/types/bookings/location/address";
import { Country } from "@/types/bookings/location/country";
import { City } from "@/types/bookings/location/city";
import { District } from "@/types/bookings/location/district";
import { Ward } from "@/types/bookings/location/ward";
import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

interface RoutesStepProps {
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
}

export default function RoutesStep({
  addresses,
  countries,
  cities,
  districts,
  wards,
}: RoutesStepProps) {
  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));

  return (
    <>
      {/* ======================================================
          ROUTE INFORMATION
      ====================================================== */}

      <FormSection
        title="Route Information"
        description="Yacht departure and destination route"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="routes.0.departureMarinaId"
            label="Departure Marina ID"
          />

          <FormInput<YachtFormSchema>
            name="routes.0.destinationMarinaId"
            label="Destination Marina ID"
          />

          <FormInput<YachtFormSchema>
            name="routes.0.destinationName"
            label="Destination Name"
          />

          <FormInput<YachtFormSchema>
            name="routes.0.distanceNm"
            label="Distance (NM)"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="routes.0.durationMinutes"
            label="Duration Minutes"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          ROUTE STATUS
      ====================================================== */}

      <FormSection title="Route Status" description="Route availability">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<YachtFormSchema> name="routes.0.active" label="Active" />
        </div>
      </FormSection>

      {/* ======================================================
          ROUTE STOPS
      ====================================================== */}

      <FormSection
        title="Route Stops"
        description="Intermediate stops during trip"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="routes.0.stops.0.name"
            label="Stop Name"
          />

          <FormEntitySelector<YachtFormSchema, Address>
            name="routes.0.stops.0.addressId"
            label="Address Stop"
            placeholder="Search address..."
            searchPlaceholder="Search address..."
            emptyText="No address found"
            createText="Create address"
            options={addressOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <AddressCreateDialog
                {...props}
                countries={countries}
                cities={cities}
                districts={districts}
                wards={wards}
              />
            )}
          />

          <FormInput<YachtFormSchema>
            name="routes.0.stops.0.stopDurationMinutes"
            label="Stop Duration Minutes"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="routes.0.stops.0.order"
            label="Stop Order"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          TRIP CONNECTION
      ====================================================== */}

      <FormSection
        title="Route Trip Mapping"
        description="Trip relation mapping"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="routes.0.trip.0.routeId"
            label="Trip Route ID"
          />

          <FormInput<YachtFormSchema>
            name="routes.0.trip.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<YachtFormSchema>
            name="routes.0.trip.0.arrivalTime"
            label="Arrival Time"
            type="datetime-local"
          />
        </div>
      </FormSection>
    </>
  );
}
