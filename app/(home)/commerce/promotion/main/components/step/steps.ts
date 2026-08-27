import { Info, Activity, CalendarDays, Ticket, Building2 } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { PromotionFormSchema } from "../form/schema";
import { promotionFieldGroups } from "./field-groups";

export const promotionSteps: FormWizardStep<PromotionFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Promotion information",
    icon: Info,
    fields: promotionFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Promotion status",
    icon: Activity,
    fields: promotionFieldGroups.status,
  },

  {
    id: "bookingType",
    title: "Booking Type",
    description: "Promotion booking type",
    icon: Building2,
    fields: promotionFieldGroups.bookingType,
  },

  {
    id: "date",
    title: "Date",
    description: "Promotion validity period",
    icon: CalendarDays,
    fields: promotionFieldGroups.date,
  },

  {
    id: "usage",
    title: "Usage",
    description: "Promotion usage limits",
    icon: Ticket,
    fields: promotionFieldGroups.usage,
  },
];