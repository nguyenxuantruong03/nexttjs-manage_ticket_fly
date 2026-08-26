// step/routes.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { FlyFormSchema } from "../schema/core/fly.schema";
import FlyAirportCreateDialog from "../../../../references/airport/components/FlyAirportCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { EntityOption } from "@/components/entity-selector";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import { Address } from "@/types/location/address";
import { FlyAirport } from "@/types/product-types/references/airport/airport.types";
import RouteTypeCreateDialog from "@/app/(home)/catalog/route-type/components/RouteTypeCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import { RouteType } from "@/types/common/catalog/route-type.type";

interface RoutesStepProps {
  airports: FlyAirport[];
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
  bookingTypeData: BookingType[];
  routeTypeData: RouteType[];
}

export default function RoutesStep({
  airports,
  addresses,
  countries,
  cities,
  districts,
  wards,
  bookingTypeData,
  routeTypeData,
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

  const routeTypeOptions: EntityOption<RouteType>[] = routeTypeData.map(
    (routeType) => ({
      value: routeType.id,
      label: routeType.name,
      description: routeType.description ?? undefined,
      data: routeType,
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

          <FormEntitySelector<FlyFormSchema, RouteType>
            name="routes.0.routeTypeId"
            label="Route Type"
            placeholder="Search route type..."
            searchPlaceholder="Search route type..."
            emptyText="No route type found"
            createText="Create route type"
            options={routeTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <RouteTypeCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
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
