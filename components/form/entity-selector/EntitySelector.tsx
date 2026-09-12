"use client";

import * as React from "react";

import { Check, ChevronsUpDown, Loader2, Plus } from "lucide-react";

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

import { EntitySelectorProps, EntityOption, EntityCreateResult } from "./types";

const EntitySelector = React.forwardRef<
  HTMLButtonElement,
  EntitySelectorProps<unknown>
>(function EntitySelector(
  {
    value,
    portalContainer,
    onChange,

    options,

    placeholder = "Select option",

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

  const selected = React.useMemo(() => {
    return items.find((item) => String(item.value) === String(value));
  }, [items, value]);

  const handleCreated = React.useCallback(
    (item: EntityCreateResult) => {
      const option: EntityOption = {
        value: item.value,

        label: item.label,

        description: item.description,

        data: item.data,
      };

      setCreatedItems((prev) => [...prev, option]);

      onChange(item.value);

      onCreated?.(item);

      setCreateOpen(false);

      setOpen(false);
    },
    [onChange, onCreated],
  );

  return (
    <>
      <Popover modal={false} open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            type="button"
            variant="outline"
            role="combobox"
            disabled={disabled}
            className={cn(
              "w-full justify-between font-normal",

              !selected && "text-muted-foreground",

              className,
            )}
          >
            {selected?.label ?? placeholder}

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
                <div
                  className="
flex
justify-center
py-8
"
                >
                  <Loader2
                    className="
animate-spin
"
                  />
                </div>
              ) : (
                <>
                  <CommandEmpty>{emptyText}</CommandEmpty>

                  <CommandGroup>
                    {items.map((item) => (
                      <CommandItem
                        key={item.value}
                        keywords={[String(item.value)]}
                        value={item.label}
                        onSelect={() => {
                          onChange(item.value);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            String(value) === String(item.value)
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />

                        <div>
                          <div>{item.label}</div>

                          {item.description && (
                            <div className="text-xs text-muted-foreground">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </CommandItem>
                    ))}
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

export default EntitySelector;
