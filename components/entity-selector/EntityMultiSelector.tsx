"use client";

import * as React from "react";

import { Check, ChevronsUpDown, Loader2, Plus, X } from "lucide-react";

import { cn } from "@/lib/utils";

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

import {
  EntityMultiSelectorProps,
  EntityOption,
  EntityCreateResult,
} from "./types";

const EntityMultiSelector = React.forwardRef<
  HTMLButtonElement,
  EntityMultiSelectorProps<unknown>
>(function EntityMultiSelector(
  {
    value = [],
    portalContainer,
    onChange,
    options,
    placeholder = "Select options",
    searchPlaceholder = "Search...",
    emptyText = "No data found",
    createText = "Create new",
    disabled,
    loading,
    enableCreate,
    renderCreateDialog,
    onCreated,
    className,
  },
  ref,
) {
  const [open, setOpen] = React.useState(false);

  const [createOpen, setCreateOpen] = React.useState(false);

  const [keyword, setKeyword] = React.useState("");

  const [createdItems, setCreatedItems] = React.useState<
    EntityOption<unknown>[]
  >([]);

  // ======================================================
  // Merge options + createdItems
  // Remove duplicate by value
  // ======================================================

  const items = React.useMemo(() => {
    const map = new Map<string, EntityOption<unknown>>();

    [...options, ...createdItems].forEach((item) => {
      map.set(String(item.value), item);
    });

    return Array.from(map.values());
  }, [options, createdItems]);

  // ======================================================
  // Selected Items
  // ======================================================

  const selectedItems = React.useMemo(() => {
    const selectedValueSet = new Set(value.map((item) => String(item)));

    return items.filter((item) => selectedValueSet.has(String(item.value)));
  }, [items, value]);

  // ======================================================
  // Toggle Item
  // ======================================================

  const toggleItem = React.useCallback(
    (itemValue: string) => {
      const exists = value.some((v) => String(v) === String(itemValue));

      if (exists) {
        onChange(value.filter((v) => String(v) !== String(itemValue)));

        return;
      }

      onChange([...value, itemValue]);
    },
    [onChange, value],
  );

  // ======================================================
  // Remove Item
  // ======================================================

  const removeItem = React.useCallback(
    (itemValue: string) => {
      onChange(value.filter((v) => String(v) !== String(itemValue)));
    },
    [onChange, value],
  );

  // ======================================================
  // Handle Created
  // ======================================================

  const handleCreated = React.useCallback(
    (item: EntityCreateResult) => {
      const option: EntityOption<unknown> = {
        value: item.value,
        label: item.label,
        description: item.description,
        data: item.data,
      };

      // Prevent duplicate created item
      setCreatedItems((prev) => {
        const exists = prev.some(
          (current) => String(current.value) === String(option.value),
        );

        if (exists) {
          return prev;
        }

        return [...prev, option];
      });

      // Prevent duplicate selected value
      const existsInValue = value.some(
        (current) => String(current) === String(item.value),
      );

      if (!existsInValue) {
        onChange([...value, item.value]);
      }

      onCreated?.(item);

      setCreateOpen(false);

      setOpen(false);

      setKeyword("");
    },
    [onChange, onCreated, value],
  );

  return (
    <>
      <Popover modal={false} open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            type="button"
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-full justify-between font-normal min-h-10",
              !selectedItems.length && "text-muted-foreground",
              className,
            )}
          >
            <div className="flex flex-wrap gap-1 text-left">
              {selectedItems.length
                ? selectedItems.map((item) => (
                    <span
                      key={String(item.value)}
                      className="
                        flex
                        items-center
                        gap-1
                        rounded-md
                        bg-muted
                        px-2
                        py-1
                        text-xs
                      "
                    >
                      {item.label}

                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();

                          removeItem(String(item.value));
                        }}
                      />
                    </span>
                  ))
                : placeholder}
            </div>

            <ChevronsUpDown
              className="
                ml-2
                h-4
                w-4
                shrink-0
                opacity-50
              "
            />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          container={portalContainer}
          sideOffset={4}
          forceMount
          align="start"
          className="
            w-[var(--radix-popover-trigger-width)]
            p-0
          "
        >
          <Command>
            <CommandInput
              placeholder={searchPlaceholder}
              value={keyword}
              onValueChange={setKeyword}
            />

            <CommandList>
              {loading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="animate-spin" />
                </div>
              ) : (
                <>
                  <CommandEmpty>{emptyText}</CommandEmpty>

                  <CommandGroup>
                    {items.map((item) => {
                      const checked = value.some(
                        (v) => String(v) === String(item.value),
                      );

                      return (
                        <CommandItem
                          key={String(item.value)}
                          value={String(item.label)}
                          onSelect={() => toggleItem(String(item.value))}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              checked ? "opacity-100" : "opacity-0",
                            )}
                          />

                          <div>
                            <div>{item.label}</div>

                            {item.description && (
                              <div
                                className="
                                  text-xs
                                  text-muted-foreground
                                "
                              >
                                {item.description}
                              </div>
                            )}
                          </div>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>

                  {enableCreate && renderCreateDialog && (
                    <>
                      <div className="mx-2 my-1 h-px bg-border" />

                      <CommandGroup>
                        <CommandItem
                          value={`__create__${keyword}`}
                          onSelect={() => {
                            setOpen(false);

                            setCreateOpen(true);
                          }}
                        >
                          <Plus className="mr-2 h-4 w-4" />

                          {keyword ? `Create "${keyword}"` : createText}
                        </CommandItem>
                      </CommandGroup>
                    </>
                  )}
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {createOpen &&
        renderCreateDialog?.({
          open: createOpen,

          onOpenChange: setCreateOpen,

          defaultKeyword: keyword,

          onCreated: handleCreated,
        })}
    </>
  );
});

EntityMultiSelector.displayName = "EntityMultiSelector";

export default EntityMultiSelector;
