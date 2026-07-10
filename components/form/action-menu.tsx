"use client";

import Link from "next/link";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type ActionMenuItem<T> = {
  label: string;
  href?: string;
  onClick?: (row: T) => void;
  danger?: boolean;
  separator?: boolean;
};

interface ActionMenuProps<T> {
  row: T;
  label?: string;
  actions: ActionMenuItem<T>[];
}

export function ActionMenu<T>({
  row,
  actions,
}: ActionMenuProps<T>) {
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

            {action.href ? (
              <DropdownMenuItem asChild>
                <Link href={action.href}>{action.label}</Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                className={action.danger ? "text-destructive" : ""}
                onClick={() => action.onClick?.(row)}
              >
                {action.label}
              </DropdownMenuItem>
            )}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
