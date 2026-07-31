import { Eye, Pencil, Trash } from "lucide-react";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { Sustainability } from "@/types/bookings/hotel/hotel-detail.type";

interface Props {
  onView: (id: string) => void;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

export function createSustainabilityActions({
  onView,
  onUpdate,
  onDelete,
}: Props) {
  return (row: Sustainability): ActionMenuItem<Sustainability>[] => [
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
