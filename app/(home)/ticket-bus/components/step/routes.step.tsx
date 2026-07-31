// step/routes.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { BusFormSchema } from "../schema/core/bus.schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { Address } from "@/types/bookings/location/address";
import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";
import { EntityOption } from "@/components/entity-selector";
import { Country } from "@/types/bookings/location/country";
import { City } from "@/types/bookings/location/city";
import { District } from "@/types/bookings/location/district";
import { Ward } from "@/types/bookings/location/ward";

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
      <FormSection
        title="Route Information"
        description="Departure and arrival"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="routes.0.departureAddressId"
            label="Departure Address ID"
          />

          <FormInput<BusFormSchema>
            name="routes.0.arrivalAddressId"
            label="Arrival Address ID"
          />

          <FormInput<BusFormSchema>
            name="routes.0.distanceKm"
            label="Distance (Km)"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.estimatedDuration"
            label="Estimated Duration (Minutes)"
            type="number"
          />

          <FormInput<BusFormSchema> name="routes.0.code" label="Route Code" />
        </div>
      </FormSection>

      <FormSection
        title="Boarding Points"
        description="Passenger boarding locations"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, Address>
            name="routes.0.boardingPoints.0.addressId"
            label="Boarding Point"
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

          <FormInput<BusFormSchema>
            name="routes.0.boardingPoints.0.name"
            label="Name"
          />

          <FormInput<BusFormSchema>
            name="routes.0.boardingPoints.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<BusFormSchema>
            name="routes.0.boardingPoints.0.order"
            label="Order"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Dropoff Points"
        description="Passenger drop-off locations"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, Address>
            name="routes.0.dropoffPoints.0.addressId"
            label="Drop off Point"
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

          <FormInput<BusFormSchema>
            name="routes.0.dropoffPoints.0.name"
            label="Name"
          />

          <FormInput<BusFormSchema>
            name="routes.0.dropoffPoints.0.arrivalTime"
            label="Arrival Time"
            type="datetime-local"
          />

          <FormInput<BusFormSchema>
            name="routes.0.dropoffPoints.0.order"
            label="Order"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Route Stops" description="Intermediate stops">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, Address>
            name="routes.0.trips.0.stops.0.addressId"
            label="Address stop"
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

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.stops.0.arrivalTime"
            label="Arrival Time"
            type="datetime-local"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.stops.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.stops.0.stopOrder"
            label="Stop Order"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Trips" description="Scheduled departures">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="routes.0.trips.0.vehicleId"
            label="Vehicle ID"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.routeId"
            label="Route ID"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.arrivalTime"
            label="Arrival Time"
            type="datetime-local"
          />
        </div>
      </FormSection>
    </>
  );
}
