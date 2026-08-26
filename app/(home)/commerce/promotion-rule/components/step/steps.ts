import {
  Building2,
  Percent,
  Wallet,
  Ticket,
} from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { PromotionRuleFormSchema } from "../form/schema";

import { promotionRuleFieldGroups } from "./field-groups";

export const promotionRuleSteps: FormWizardStep<PromotionRuleFormSchema>[] = [
  {
    id: "promotion",
    title: "Promotion",
    description: "Select the promotion",
    icon: Ticket,
    fields: promotionRuleFieldGroups.promotion,
  },

  {
    id: "bookingType",
    title: "Booking Type",
    description: "Promotion rule booking type",
    icon: Building2,
    fields: promotionRuleFieldGroups.bookingType,
  },

  {
    id: "discount",
    title: "Discount",
    description: "Configure discount",
    icon: Percent,
    fields: promotionRuleFieldGroups.discount,
  },

  {
    id: "amount",
    title: "Amount",
    description: "Configure amount limits",
    icon: Wallet,
    fields: promotionRuleFieldGroups.amount,
  },
];