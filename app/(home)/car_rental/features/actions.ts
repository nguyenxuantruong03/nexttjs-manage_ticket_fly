import { Eye, Pencil, Trash } from "lucide-react";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { CarRental } from "@/types/bookings/car_rental/core/car-rental.types";


interface Props {
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function createCarRentalActions({
  onView,
  onEdit,
  onDelete,
}: Props) {
  return (row: CarRental): ActionMenuItem<CarRental>[] => [
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
