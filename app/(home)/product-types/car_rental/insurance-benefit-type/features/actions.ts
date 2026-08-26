import { Eye, Pencil, Trash } from "lucide-react";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { InsuranceBenefitType } from "@/types/product-types/car_rental/insurance-type.type";

interface Props {
  onView: (id: string) => void;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

export function createCarRentalInsuranceBenefitTypeActions({
  onView,
  onUpdate,
  onDelete,
}: Props) {
  return (
    row: InsuranceBenefitType,
  ): ActionMenuItem<InsuranceBenefitType>[] => [
    {
      label: "View",
      icon: Eye,
      onClick() {
        onView(row.id);
      },
    },

    {
      label: "Update",
      icon: Pencil,
      onClick() {
        onUpdate(row.id);
      },
    },

    {
      label: "Delete",
      icon: Trash,
      danger: true,
      separator: true,
      onClick() {
        onDelete(row.id);
      },
    },
  ];
}
