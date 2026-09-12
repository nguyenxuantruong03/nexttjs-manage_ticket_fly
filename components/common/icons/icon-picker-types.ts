import type { UIEvent } from "react";
import type {
  IconAnimation,
  IconAnimationDirection,
  IconAnimationIteration,
  IconAnimationTimingFunction,
  LucideIconName,
} from "./icon-types";
import type { IconConfig } from "./icon-config";

export interface IconPickerProps {
  value?: string | null;
  onChange: (value: string | null) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  container?: HTMLElement | null;
}

export type IconPickerStep = "icon" | "custom";

export interface IconPickerIconStepProps {
  filteredIcons: LucideIconName[];
  selectedIconName?: LucideIconName;
  searchInput: string;
  setSearchInput: (value: string) => void;
  listRef: React.RefObject<HTMLDivElement | null>;
  handleGridScroll: (event: UIEvent<HTMLDivElement>) => void;
  totalHeight: number;
  offsetY: number;
  startRow: number;
  endRow: number;
  onSelect: (iconName: LucideIconName) => void;
}

export interface IconPickerCustomStepProps {
  value?: string | null;
  selectedConfig: IconConfig;
  customEnabled: boolean;
  animation: IconAnimation;
  hasAnimationCustom: boolean;
  updateConfig: (patch: Partial<IconConfig>) => void;
  removeProperty: <K extends keyof IconConfig>(property: K) => void;
  onChange: (value: string | null) => void;
  onChangeIcon: () => void;
  onClear: () => void;
  onResetCustom: () => void;
}
