import { LogIn, LogOut,Info } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { HotelCheckInPolicySchemaForm } from "../form/schema";
import { hotelCheckInPolicyFieldGroups } from "./field-groups";

export const hotelCheckInPolicySteps: FormWizardStep<HotelCheckInPolicySchemaForm>[] =
  [
     {
    id: "basic",
    title: "Basic",
    description: "Basic hotel type information",
    icon: Info,

    fields: hotelCheckInPolicyFieldGroups.basic,
  },
    {
      id: "check-in",
      title: "Check-In",
      description: "Check-in time and requirements",
      icon: LogIn,

      fields: hotelCheckInPolicyFieldGroups.checkIn,
    },

    {
      id: "check-out",
      title: "Check-Out",
      description: "Check-out time and age requirements",
      icon: LogOut,

      fields: hotelCheckInPolicyFieldGroups.checkOut,
    },
  ];
