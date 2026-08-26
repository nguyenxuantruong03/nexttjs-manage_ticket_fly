import { Eye, Pencil, Trash } from "lucide-react";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { FlyFareRuleType } from "@/types/product-types/ticket-fly/pricing/fare-rule-type";

interface Props {
  onView: (id: string) => void;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

export function createFlyFareRuleTypeActions({
  onView,
  onUpdate,
  onDelete,
}: Props) {
  return (row: FlyFareRuleType): ActionMenuItem<FlyFareRuleType>[] => [
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
