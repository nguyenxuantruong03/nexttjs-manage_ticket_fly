import { Step } from "@/components/stepper/types";
import {
  Tag,
  Ticket,
  Wallet,
  Layers,
  Package,
  Percent,
  Gift,
  ListChecks,
  LucideIcon,
} from "lucide-react";

export const mainSteps: Step[] = [
  ["booking-item-type", "Booking Item Type", Tag],
  ["booking-type", "Booking Type", Ticket],
  ["coupon", "Coupon", Wallet],
  ["extra", "Extra", Layers],
  ["package", "Package", Package],
  ["price-rule-type", "Price Rule Type", Percent],
  ["promotion", "Promotion", Gift],
];

export const subSteps: Record<string, Step[]> = {
  "booking-item-type": [["booking-item-type", "Booking Item Type", Tag]],

  "booking-type": [["booking-type", "Booking Type", Ticket]],

  coupon: [["coupon", "Coupon", Wallet]],

  extra: [
    ["extra-fee-type", "Extra Fee Type", Layers],
    ["extra-type", "Extra Type", Layers],
    ["extra-main", "Extra", Package],
  ],

  package: [["package", "Package", Package]],

  "price-rule-type": [["price-rule-type", "Price Rule Type", Percent]],

  promotion: [
    ["promotion-main", "Promotion", Gift],
    ["promotion-rule", "Promotion Rule", ListChecks],
  ],
};
