import { Eye, Pencil, Trash } from "lucide-react";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { Regulation } from "@/types/common/commerce/compliance-legal.type";

interface Props {
  onView: (id: string) => void;

  onUpdate: (id: string) => void;

  onDelete: (id: string) => void;
}

export function createRegulationActions({ onView, onUpdate, onDelete }: Props) {
  return (row: Regulation): ActionMenuItem<Regulation>[] => [
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
