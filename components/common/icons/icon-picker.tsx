"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type UIEvent,
} from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command } from "@/components/ui/command";

import { IconPickerTrigger } from "./icon-picker-trigger";
import { IconPickerIconStep } from "./icon-picker-icon-step";
import { IconPickerCustomStep } from "./icon-picker-custom-step";

import {
  createIconConfig,
  hasCustomIconProps,
  parseIconConfig,
  stringifyIconConfig,
  type IconConfig,
} from "./icon-config";

import { searchIcons } from "./icon-utils";

import {
  GRID_COLUMNS,
  OVERSCAN_ROWS,
  ROW_HEIGHT,
  SEARCH_DEBOUNCE_MS,
  VIEWPORT_HEIGHT,
} from "./icon-picker-constants";

import type {
  IconPickerProps,
  IconPickerStep,
} from "./icon-picker-types";

import type { LucideIconName } from "./icon-types";

import "./icon-animations.css";

export type { IconPickerProps } from "./icon-picker-types";

export function IconPicker({
  value,
  onChange,
  placeholder = "Chọn icon...",
  disabled = false,
  className,
  container,
}: IconPickerProps) {
  const [open, setOpen] = useState(false);

  const selectedConfig = useMemo(
    () => parseIconConfig(value),
    [value],
  );

  const [step, setStep] = useState<IconPickerStep>(
    selectedConfig ? "custom" : "icon",
  );

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput);
    }, SEARCH_DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const filteredIcons = useMemo(
    () => searchIcons(search),
    [search],
  );

  const listRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setScrollTop(0);

    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [filteredIcons]);

  const handleGridScroll = useCallback(
    (event: UIEvent<HTMLDivElement>) => {
      const top = event.currentTarget.scrollTop;

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setScrollTop(top);
      });
    },
    [],
  );

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const totalRows = Math.ceil(
    filteredIcons.length / GRID_COLUMNS,
  );
  const totalHeight = totalRows * ROW_HEIGHT;

  const startRow = Math.max(
    0,
    Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN_ROWS,
  );

  const endRow = Math.min(
    totalRows,
    Math.ceil(
      (scrollTop + VIEWPORT_HEIGHT) / ROW_HEIGHT,
    ) + OVERSCAN_ROWS,
  );

  const offsetY = startRow * ROW_HEIGHT;

  const customEnabled = hasCustomIconProps(selectedConfig);
  const animation = selectedConfig?.animation ?? "none";
  const hasAnimationCustom = animation !== "none";

  const updateConfig = (patch: Partial<IconConfig>) => {
    if (!selectedConfig) {
      return;
    }

    const nextConfig: IconConfig = {
      ...selectedConfig,
      ...patch,
    };

    onChange(stringifyIconConfig(nextConfig));
  };

  const removeProperty = <K extends keyof IconConfig>(
    property: K,
  ) => {
    if (!selectedConfig) {
      return;
    }

    const nextConfig = {
      ...selectedConfig,
    };

    delete nextConfig[property];

    onChange(stringifyIconConfig(nextConfig));
  };

  const handleSelect = (iconName: LucideIconName) => {
    if (selectedConfig) {
      const nextConfig: IconConfig = {
        ...selectedConfig,
        name: iconName,
      };

      onChange(stringifyIconConfig(nextConfig));
    } else {
      onChange(createIconConfig(iconName));
    }

    setStep("custom");
  };

  const handleChangeIcon = () => {
    setStep("icon");
    setSearchInput("");
    setSearch("");
    setScrollTop(0);

    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  };

  const handleClear = () => {
    onChange(null);
    setStep("icon");
    setSearchInput("");
    setSearch("");
  };

  const handleResetCustom = () => {
    if (!selectedConfig) {
      return;
    }

    onChange(createIconConfig(selectedConfig.name));
  };

  const handlePopoverOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (!nextOpen) {
      return;
    }

    setStep(selectedConfig ? "custom" : "icon");
  };

  return (
    <Popover
      open={open}
      onOpenChange={handlePopoverOpenChange}
      modal={Boolean(container)}
    >
      <PopoverTrigger asChild>
        <IconPickerTrigger
          value={value}
          selectedConfig={selectedConfig}
          customEnabled={customEnabled}
          placeholder={placeholder}
          disabled={disabled}
          className={className}
        />
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-[460px] p-0 rounded-md shadow-lg border bg-background overflow-hidden"
        container={container ?? undefined}
        onOpenAutoFocus={(event) => {
          if (container) {
            event.preventDefault();
          }
        }}
      >
        <Command
          shouldFilter={false}
          className="h-screen max-h-[350px] overflow-y-auto"
        >
          {step === "icon" && (
            <IconPickerIconStep
              filteredIcons={filteredIcons}
              selectedIconName={selectedConfig?.name}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              listRef={listRef}
              handleGridScroll={handleGridScroll}
              totalHeight={totalHeight}
              offsetY={offsetY}
              startRow={startRow}
              endRow={endRow}
              onSelect={handleSelect}
            />
          )}

          {step === "custom" && selectedConfig && (
            <IconPickerCustomStep
              value={value}
              selectedConfig={selectedConfig}
              customEnabled={customEnabled}
              animation={animation}
              hasAnimationCustom={hasAnimationCustom}
              updateConfig={updateConfig}
              removeProperty={removeProperty}
              onChange={onChange}
              onChangeIcon={handleChangeIcon}
              onClear={handleClear}
              onResetCustom={handleResetCustom}
            />
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
