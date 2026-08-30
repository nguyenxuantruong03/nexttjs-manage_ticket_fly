// step/routes.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { BusFormSchema } from "../form/schema/core/bus.schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";
import { EntityOption } from "@/components/entity-selector";
import { Address } from "@/types/location/address";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";
import BusSeatTypeCreateDialog from "../../../seat-type/components/BusSeatTypeCreateDialog";
import { RouteType } from "@/types/common/catalog/route-type.type";
import RouteTypeCreateDialog from "@/app/(home)/catalog/route-type/components/RouteTypeCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";

interface RoutesStepProps {
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
  seatTypeData: BusSeatType[];

  routeTypeData: RouteType[];
  bookingTypeData: BookingType[];
}

export default function RoutesStep({
  addresses,
  countries,
  cities,
  districts,
  wards,
  seatTypeData,
  routeTypeData,
  bookingTypeData,
}: RoutesStepProps) {
  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));

  const seatTypeOptions: EntityOption<BusSeatType>[] = seatTypeData.map(
    (seatType) => ({
      value: seatType.id,
      label: seatType.name ?? "",
      description: seatType.description ?? undefined,
      data: seatType,
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
        description="Departure and arrival"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, RouteType>
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

          <FormEntitySelector<BusFormSchema, Address>
            name="routes.0.departureAddressId"
            label="Departure Address"
            placeholder="Search departure address..."
            searchPlaceholder="Search departure address..."
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

          <FormEntitySelector<BusFormSchema, Address>
            name="routes.0.arrivalAddressId"
            label="Arrival Address"
            placeholder="Search arrival address..."
            searchPlaceholder="Search arrival address..."
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

      <FormSection title="Trips" description="Vehicle & route assignment">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="routes.0.trips.0.vehicleId"
            label="Vehicle ID"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.routeId"
            label="Route ID"
          />
        </div>
      </FormSection>

      <FormSection title="Trip Seat Prices" description="Per-trip seat pricing">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, BusSeatType>
            name="routes.0.trips.0.price.seatPrices.0.seatTypeId"
            label="Seat Type"
            placeholder="Search seat type..."
            searchPlaceholder="Search seat type..."
            emptyText="No seat type found"
            createText="Create seat type"
            options={seatTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <BusSeatTypeCreateDialog {...props} />
            )}
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.price"
            label="Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.originalPrice"
            label="Original Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.taxes"
            label="Taxes"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.serviceFee"
            label="Service Fee"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.bookingFee"
            label="Booking Fee"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.discount"
            label="Discount"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.finalPrice"
            label="Final Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.availableSeats"
            label="Available Seats"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
