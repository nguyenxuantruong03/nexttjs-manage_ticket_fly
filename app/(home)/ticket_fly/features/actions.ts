import { Eye, Pencil, Trash } from "lucide-react";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { TicketFly } from "@/types/bookings/ticket-fly/core/fly.types";

interface Props {
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function createTicketFlyActions({ onView, onEdit, onDelete }: Props) {
  return (row: TicketFly): ActionMenuItem<TicketFly>[] => [
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
