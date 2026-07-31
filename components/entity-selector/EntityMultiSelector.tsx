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

  const items = [...options, ...createdItems];

  const selectedItems = React.useMemo(() => {
    return items.filter((item) =>
      value.some((v) => String(v) === String(item.value)),
    );
  }, [items, value]);

  const toggleItem = (itemValue: string) => {
    const exists = value.some((v) => String(v) === String(itemValue));

    if (exists) {
      onChange(value.filter((v) => String(v) !== String(itemValue)));
    } else {
      onChange([...value, itemValue]);
    }
  };

  const removeItem = (itemValue: string) => {
    onChange(value.filter((v) => String(v) !== String(itemValue)));
  };

  const handleCreated = React.useCallback(
    (item: EntityCreateResult) => {
      const option: EntityOption = {
        value: item.value,
        label: item.label,
        description: item.description,
        data: item.data,
      };

      setCreatedItems((prev) => [...prev, option]);

      onChange([...value, item.value]);

      onCreated?.(item);

      setCreateOpen(false);
      setOpen(false);
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
                      key={item.value}
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
                        className="h-3 w-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeItem(item.value);
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
                          key={item.value}
                          value={item.label}
                          onSelect={() => toggleItem(item.value)}
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

export default EntityMultiSelector;
