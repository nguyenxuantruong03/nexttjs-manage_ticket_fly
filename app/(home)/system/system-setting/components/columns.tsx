"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Settings2 } from "lucide-react";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";
import { SystemSetting } from "@/types/system/system-governance.type";

export function systemSettingColumns(
  actions: (row: SystemSetting) => ActionMenuItem<SystemSetting>[],
): ColumnDef<SystemSetting>[] {
  return [
    createSelectionColumn<SystemSetting>(),

    createDataTableColumn<SystemSetting>({
      accessorKey: "key",
      header: "Key",
      cell: (row) => (
        <div className="flex items-center gap-2 font-medium">
          <Settings2 className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span>{row.key}</span>
        </div>
      ),
      meta: {
        align: "left",
      },
    }),

    createDataTableColumn<SystemSetting>({
      accessorKey: "value",
      header: "Value",
      exclude: ["sorting"],
      cell: (row) => {
        if (row.value === null) {
          return <span className="text-muted-foreground">—</span>;
        }

        if (typeof row.value === "object" && row.value !== null) {
          return (
            <span className="block max-w-[400px] truncate font-mono text-sm">
              {JSON.stringify(row.value)}
            </span>
          );
        }

        return (
          <span className="block max-w-[400px] truncate">
            {String(row.value)}
          </span>
        );
      },
    }),

    createDataTableColumn<SystemSetting>({
      accessorKey: "updatedAt",
      header: "Cập nhật lần cuối",
      cell: (row) => (
        <span className="text-muted-foreground">
          {new Date(row.updatedAt).toLocaleString("vi-VN", {
            dateStyle: "short",
            timeStyle: "short",
          })}
        </span>
      ),
    }),

    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
