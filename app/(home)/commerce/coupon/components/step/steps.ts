import { Info, Percent, Calendar, BarChart3, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { CouponFormSchema } from "../form/schema";
import { couponFieldGroups } from "./field-groups";

export const couponSteps: FormWizardStep<CouponFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Coupon information",
    icon: Info,
    fields: couponFieldGroups.basic,
  },

  {
    id: "discount",
    title: "Discount",
    description: "Configure coupon discount",
    icon: Percent,
    fields: couponFieldGroups.discount,
  },

  {
    id: "date",
    title: "Date",
    description: "Configure coupon validity period",
    icon: Calendar,
    fields: couponFieldGroups.date,
  },

  {
    id: "usage",
    title: "Usage",
    description: "Configure coupon usage limits",
    icon: BarChart3,
    fields: couponFieldGroups.usage,
  },

  {
    id: "status",
    title: "Status",
    description: "Coupon status",
    icon: Activity,
    fields: couponFieldGroups.status,
  },
];
