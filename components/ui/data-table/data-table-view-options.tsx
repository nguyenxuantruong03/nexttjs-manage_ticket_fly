"use client";

import * as React from "react";
import type { Table } from "@tanstack/react-table";
import { Check, Settings2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  const columns = table.getAllColumns().filter((column) => column.getCanHide());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5">
          <Settings2 className="h-3.5 w-3.5" />
          Cột hiển thị
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-56 p-0 z-50 shadow-sm border rounded-md">
        <Command>
          <CommandInput placeholder="Tìm cột..." className="h-9" />
          <CommandList>
            <CommandEmpty>Không tìm thấy cột.</CommandEmpty>
            <CommandGroup>
              {columns.map((column) => {
                const label =
                  (column.columnDef.meta?.exportLabel as string | undefined) ??
                  column.id;
                const visible = column.getIsVisible();
                return (
                  <CommandItem
                    key={column.id}
                    value={label}
                    onSelect={() => column.toggleVisibility(!visible)}
                    className="cursor-pointer gap-2"
                  >
                    <div
                      className={cn(
                        "flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-primary",
                        visible
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50",
                      )}
                    >
                      {visible && <Check className="h-3 w-3" />}
                    </div>
                    <span className="truncate">{label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
