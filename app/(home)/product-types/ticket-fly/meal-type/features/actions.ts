import { Eye, Pencil, Trash } from "lucide-react";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { FlyMealType } from "@/types/product-types/ticket-fly/fly-meal-type";

interface Props {
  onView: (id: string) => void;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

export function createFlyMealTypeActions({
  onView,
  onUpdate,
  onDelete,
}: Props) {
  return (row: FlyMealType): ActionMenuItem<FlyMealType>[] => [
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
