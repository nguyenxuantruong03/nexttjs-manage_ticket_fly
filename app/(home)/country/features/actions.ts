import { Eye, Pencil, Trash } from "lucide-react";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { City } from "@/types/bookings/location/city";
import { Country } from "@/types/bookings/location/country";

interface Props {
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function createCountryActions({ onView, onEdit, onDelete }: Props) {
  return (row: Country): ActionMenuItem<Country>[] => [
    {
      label: "View",
      icon: Eye,
      onClick() {
        onView(row.id);
      },
    },

    {
      label: "Edit",
      icon: Pencil,
      onClick() {
        onEdit(row.id);
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
