import { Eye, Pencil } from "lucide-react";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { SystemSetting } from "@/types/system/system-governance.type";

interface Props {
  onView: (id: string) => void;
  onUpdate: (id: string) => void;
}

export function createSystemSettingActions({ onView, onUpdate }: Props) {
  return (row: SystemSetting): ActionMenuItem<SystemSetting>[] => [
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
  ];
}
