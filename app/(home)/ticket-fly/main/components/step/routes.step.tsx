// step/routes.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { FlyRouteType } from "@/types/bookings/ticket-fly/enums";
import { FlyFormSchema } from "../schema/core/fly.schema";
import FlyAirportCreateDialog from "../../../fly-airport/components/FlyAirportCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { EntityOption } from "@/components/entity-selector";
import { Address } from "@/types/bookings/location/address";
import { Country } from "@/types/bookings/location/country";
import { City } from "@/types/bookings/location/city";
import { District } from "@/types/bookings/location/district";
import { Ward } from "@/types/bookings/location/ward";
import { FlyAirport } from "@/types/bookings/ticket-fly/airport/airport.types";

const routeTypeOptions = Object.values(FlyRouteType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

interface RoutesStepProps {
  airports: FlyAirport[];
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
}

export default function RoutesStep({
  airports,
  addresses,
  countries,
  cities,
  districts,
  wards,
}: RoutesStepProps) {
  const airportOptions: EntityOption<FlyAirport>[] = airports.map(
    (airport) => ({
      value: airport.id,
      label:
        airport.name ??
        `${airport.address?.name ?? ""} ${airport.address?.houseNumber ?? ""}`,
      description: airport.address?.city?.name ?? "",
      data: airport,
    }),
  );
  return (
    <>
      <FormSection
        title="Route Information"
        description="Flight route configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<FlyFormSchema, FlyAirport>
            name="routes.0.departureAirportId"
            label="Departure Airport"
            placeholder="Select departure airport"
            searchPlaceholder="Search airport..."
            emptyText="No airport found"
            createText="Create airport"
            options={airportOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <FlyAirportCreateDialog
                {...props}
                countries={countries}
                cities={cities}
                districts={districts}
                wards={wards}
                addresses={addresses}
              />
            )}
          />

          <FormEntitySelector<FlyFormSchema, FlyAirport>
            name="routes.0.arrivalAirportId"
            label="Arrival Airport"
            placeholder="Select arrival airport"
            searchPlaceholder="Search airport..."
            emptyText="No airport found"
            createText="Create airport"
            options={airportOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <FlyAirportCreateDialog
                {...props}
                countries={countries}
                cities={cities}
                districts={districts}
                wards={wards}
                addresses={addresses}
              />
            )}
          />

          <FormInput<FlyFormSchema>
            name="routes.0.distanceKm"
            label="Distance KM"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="routes.0.estimatedDuration"
            label="Estimated Duration (Minutes)"
            type="number"
          />

          <FormSelect<FlyFormSchema>
            name="routes.0.routeType"
            label="Route Type"
            options={routeTypeOptions}
          />

          <FormSwitch<FlyFormSchema>
            name="routes.0.directFlight"
            label="Direct Flight"
          />
        </div>
      </FormSection>

      <FormSection
        title="Route Segments"
        description="Intermediate flight segments"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema>
            name="routes.0.segments.0.segmentOrder"
            label="Segment Order"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="routes.0.segments.0.estimatedDuration"
            label="Estimated Duration"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="routes.0.segments.0.distanceKm"
            label="Distance KM"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
