import type { CSSProperties } from "react";
import type { LucideProps } from "lucide-react";
import { LUCIDE_ICON_NAMES, type LucideIconName } from "./icon-types";
import {
  type IconAnimation,
  type IconAnimationDirection,
  type IconAnimationIteration,
  type IconAnimationTimingFunction,
} from "./icon-types";

export interface IconConfig {
  /**
   * Lucide icon name.
   */
  name: LucideIconName;

  /**
   * =========================
   * ICON PROPS
   * =========================
   */
  size?: LucideProps["size"];
  strokeWidth?: LucideProps["strokeWidth"];
  color?: LucideProps["color"];
  fill?: LucideProps["fill"];
  opacity?: number;
  absoluteStrokeWidth?: LucideProps["absoluteStrokeWidth"];
  className?: string;

  /**
   * =========================
   * ANIMATION
   * =========================
   */
  animation?: IconAnimation;
  animationDuration?: number;
  animationDelay?: number;
  animationIterationCount?: IconAnimationIteration;
  animationTimingFunction?: IconAnimationTimingFunction;
  animationDirection?: IconAnimationDirection;
}

const LUCIDE_ICON_NAME_SET = new Set(LUCIDE_ICON_NAMES);

export function isValidIconName(name: string): name is LucideIconName {
  return LUCIDE_ICON_NAME_SET.has(name);
}

export function isValidAnimation(value: unknown): value is IconAnimation {
  return (
    typeof value === "string" &&
    [
      "none",
      "spin",
      "pulse",
      "bounce",
      "ping",
      "shake",
      "float",
      "wiggle",
      "swing",
      "heartbeat",
      "blink",
    ].includes(value)
  );
}

export function isValidTimingFunction(
  value: unknown,
): value is IconAnimationTimingFunction {
  return (
    value === "linear" ||
    value === "ease" ||
    value === "ease-in" ||
    value === "ease-out" ||
    value === "ease-in-out"
  );
}

export function isValidDirection(
  value: unknown,
): value is IconAnimationDirection {
  return (
    value === "normal" ||
    value === "reverse" ||
    value === "alternate" ||
    value === "alternate-reverse"
  );
}

export function isValidIteration(
  value: unknown,
): value is IconAnimationIteration {
  return (
    value === "1" || value === "2" || value === "3" || value === "infinite"
  );
}

export function parseIconConfig(value?: string | null): IconConfig | null {
  if (!value) {
    return null;
  }

  const input = value.trim();

  if (!input) {
    return null;
  }

  /**
   * Support old format:
   *
   * "plane"
   */
  if (!input.startsWith("{")) {
    if (!isValidIconName(input)) {
      return null;
    }
    return {
      name: input,
    };
  }

  try {
    const parsed: unknown = JSON.parse(input);

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return null;
    }

    const data = parsed as Record<string, unknown>;

    if (typeof data.name !== "string" || !isValidIconName(data.name)) {
      return null;
    }

    const config: IconConfig = {
      name: data.name,
    };

    /**
     * =========================
     * ICON PROPS
     * =========================
     */
    if (typeof data.size === "number" || typeof data.size === "string") {
      config.size = data.size as LucideProps["size"];
    }
    if (typeof data.strokeWidth === "number") {
      config.strokeWidth = data.strokeWidth;
    }
    if (typeof data.color === "string") {
      config.color = data.color;
    }
    if (typeof data.fill === "string") {
      config.fill = data.fill;
    }
    if (typeof data.opacity === "number") {
      config.opacity = data.opacity;
    }
    if (typeof data.absoluteStrokeWidth === "boolean") {
      config.absoluteStrokeWidth = data.absoluteStrokeWidth;
    }
    if (typeof data.className === "string") {
      config.className = data.className;
    }

    /**
     * =========================
     * ANIMATION
     * =========================
     */
    if (isValidAnimation(data.animation)) {
      config.animation = data.animation;
    }
    if (typeof data.animationDuration === "number") {
      config.animationDuration = data.animationDuration;
    }
    if (typeof data.animationDelay === "number") {
      config.animationDelay = data.animationDelay;
    }
    if (isValidIteration(data.animationIterationCount)) {
      config.animationIterationCount = data.animationIterationCount;
    }
    if (isValidTimingFunction(data.animationTimingFunction)) {
      config.animationTimingFunction = data.animationTimingFunction;
    }
    if (isValidDirection(data.animationDirection)) {
      config.animationDirection = data.animationDirection;
    }

    return config;
  } catch {
    return null;
  }
}

export function stringifyIconConfig(config: IconConfig): string {
  /**
   * Remove undefined.
   *
   * JSON.stringify already does this,
   * but explicit object reconstruction
   * keeps the output predictable.
   */
  return JSON.stringify(config);
}

export function createIconConfig(name: LucideIconName): string {
  return stringifyIconConfig({
    name,
  });
}

export function hasCustomIconProps(config: IconConfig | null): boolean {
  if (!config) {
    return false;
  }

  return (
    config.size !== undefined ||
    config.strokeWidth !== undefined ||
    config.color !== undefined ||
    config.fill !== undefined ||
    config.opacity !== undefined ||
    config.absoluteStrokeWidth !== undefined ||
    config.className !== undefined ||
    config.animation !== undefined ||
    config.animationDuration !== undefined ||
    config.animationDelay !== undefined ||
    config.animationIterationCount !== undefined ||
    config.animationTimingFunction !== undefined ||
    config.animationDirection !== undefined
  );
}

export function hasAnimation(config: IconConfig | null): boolean {
  if (!config) {
    return false;
  }
  return config.animation !== undefined && config.animation !== "none";
}

/**
 * Tạo style animation cho icon.
 */
export function getIconAnimationStyle(config: IconConfig): CSSProperties {
  if (!config.animation || config.animation === "none") {
    return {};
  }

  return {
    animationName: `icon-${config.animation}`,
    animationDuration: `${config.animationDuration ?? 2}s`,
    animationDelay: `${config.animationDelay ?? 0}s`,
    animationIterationCount: config.animationIterationCount ?? "infinite",
    animationTimingFunction: config.animationTimingFunction ?? "ease-in-out",
    animationDirection: config.animationDirection ?? "normal",
    animationFillMode: "both",
    display: "inline-flex",
  };
}
