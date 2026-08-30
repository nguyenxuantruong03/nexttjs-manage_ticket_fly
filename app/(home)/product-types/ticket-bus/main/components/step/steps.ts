import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Route,
  Bus,
  Armchair,
  DollarSign,
  FileText,
  Images,
  CalendarRange,
  PackagePlus,
  Package,
} from "lucide-react";

import { busFieldGroups } from "./field-groups";
import { BusFormSchema } from "../form/schema/core/bus.schema";

// NOTE: field-groups.ts does not define its own "schedule" group.
// Everything schedule.step.tsx renders (trip timing/status + seat
// availability) already exists inside busFieldGroups.routes, so we
// split that single group into two field lists here — WITHOUT
// touching field-groups.ts — so each wizard step still validates
// exactly the fields it renders, with no overlap.
const scheduleFieldPaths = [
  "routes.0.trips.0.departureTime",
  "routes.0.trips.0.arrivalTime",
  "routes.0.trips.0.status",
  "routes.0.trips.0.boardingStatus",
  "routes.0.trips.0.seatAvailability.0.seatId",
  "routes.0.trips.0.seatAvailability.0.status",
  "routes.0.trips.0.seatAvailability.0.availableSeats",
  "routes.0.trips.0.seatAvailability.0.soldSeats",
  "routes.0.trips.0.seatAvailability.0.reservedSeats",
  "routes.0.trips.0.seatAvailability.0.totalSeats",
  "routes.0.trips.0.seatAvailability.0.currentPrice",
];

const scheduleFields = busFieldGroups.routes.filter((field) =>
  scheduleFieldPaths.includes(field),
);

const routeFields = busFieldGroups.routes.filter(
  (field) => !scheduleFieldPaths.includes(field),
);

export const busSteps: FormWizardStep<BusFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "General bus information",
    icon: Info,
    fields: busFieldGroups.basic,
  },

  {
    id: "routes",
    title: "Routes",
    description: "Routes, boarding & trips",
    icon: Route,
    fields: routeFields,
  },

  {
    id: "vehicles",
    title: "Vehicles",
    description: "Bus vehicles & specifications",
    icon: Bus,
    fields: busFieldGroups.vehicle,
  },

  {
    id: "seats",
    title: "Seats",
    description: "Seat layouts & availability",
    icon: Armchair,
    fields: busFieldGroups.seats,
  },

  {
    id: "pricing",
    title: "Pricing",
    description: "Prices & pricing rules",
    icon: DollarSign,
    fields: busFieldGroups.pricing,
  },

  {
    id: "policies",
    title: "Policies",
    description: "Passenger & ticket policies",
    icon: FileText,
    fields: busFieldGroups.policies,
  },

  {
    id: "media",
    title: "Images",
    description: "Bus gallery",
    icon: Images,
    fields: busFieldGroups.media,
  },

  {
    id: "schedule",
    title: "Schedule",
    description: "Trip schedules & seat availability",
    icon: CalendarRange,
    fields: scheduleFields,
  },

  {
    id: "extras",
    title: "Extras",
    description: "Additional services & charges",
    icon: PackagePlus,
    fields: busFieldGroups.extras,
  },

  {
    id: "packages",
    title: "Packages",
    description: "Bundled packages",
    icon: Package,
    fields: busFieldGroups.packages,
  },
];