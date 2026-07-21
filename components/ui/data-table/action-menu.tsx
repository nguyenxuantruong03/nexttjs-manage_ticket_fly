"use client";

import { MoreHorizontal, LucideIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

export type ActionMenuItem<T> = {
  label: string;

  icon?: LucideIcon;

  onClick?: (row: T) => void;

  danger?: boolean;

  separator?: boolean;
};

interface Props<T> {
  row: T;

  actions: ActionMenuItem<T>[];
}

export function ActionMenu<T>({ row, actions }: Props<T>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {actions.map((action, index) => (
          <div key={index}>
            {action.separator && <DropdownMenuSeparator />}

            <DropdownMenuItem
              className={action.danger ? "text-destructive" : ""}
              onClick={() => action.onClick?.(row)}
            >
              {action.icon && (
                <action.icon
                  className="
mr-2
h-4 w-4
"
                />
              )}

              {action.label}
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
