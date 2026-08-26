import { Eye, Pencil, Trash } from "lucide-react";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";


interface Props {
  onView: (id: string) => void;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

export function createFlyCrewDutyActions({
  onView,
  onUpdate,
  onDelete,
}: Props) {
  return (row: FlyCrewDuty): ActionMenuItem<FlyCrewDuty>[] => [
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
