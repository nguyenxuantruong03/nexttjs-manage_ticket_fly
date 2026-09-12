import { Eye, ExternalLink } from "lucide-react";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { AuditLog } from "@/types/system/system-governance.type";

interface Props {
  onView: (id: string) => void;
  onViewTarget: (row: AuditLog) => void;
}

export function createAuditLogActions({ onView, onViewTarget }: Props) {
  return (row: AuditLog): ActionMenuItem<AuditLog>[] => {
    const actions: ActionMenuItem<AuditLog>[] = [
      {
        label: "View",
        icon: Eye,
        onClick() {
          onView(row.id);
        },
      },
    ];

    if (row.targetId) {
      actions.push({
        label: "View Target",
        icon: ExternalLink,
        onClick() {
          onViewTarget(row);
        },
      });
    }

    return actions;
  };
}
