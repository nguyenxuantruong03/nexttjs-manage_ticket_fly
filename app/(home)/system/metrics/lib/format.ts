export function formatMb(mb: number): string {
  if (mb >= 1024) {
    return `${(mb / 1024).toFixed(2)} GB`;
  }
  return `${mb.toFixed(0)} MB`;
}

export function formatBytesPerSec(bytes: number): string {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / 1024 / 1024).toFixed(2)} MB/s`;
  }
  if (bytes >= 1024) {
    return `${(bytes / 1024).toFixed(1)} KB/s`;
  }
  return `${bytes.toFixed(0)} B/s`;
}

export function formatMs(ms: number): string {
  if (ms >= 1000) {
    return `${(ms / 1000).toFixed(2)} s`;
  }
  return `${ms.toFixed(1)} ms`;
}

export function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

export function formatDateTime(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("vi-VN", {
    dateStyle: "short",
    timeStyle: "medium",
  });
}

/**
 * Trả về mức cảnh báo dựa trên % sử dụng, dùng chung cho CPU/RAM/Disk/dead tuples/error rate.
 * Ngưỡng có thể chỉnh theo nhu cầu thực tế của hệ thống bạn.
 */
export type UsageLevel = "good" | "warning" | "critical";

export function getUsageLevel(
  percent: number,
  thresholds: { warning: number; critical: number } = {
    warning: 70,
    critical: 90,
  },
): UsageLevel {
  if (percent >= thresholds.critical) return "critical";
  if (percent >= thresholds.warning) return "warning";
  return "good";
}

export const usageLevelClasses: Record<
  UsageLevel,
  { bar: string; text: string; badge: string }
> = {
  good: {
    bar: "bg-emerald-500",
    text: "text-emerald-600 dark:text-emerald-400",
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
  },
  warning: {
    bar: "bg-amber-500",
    text: "text-amber-600 dark:text-amber-400",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
  },
  critical: {
    bar: "bg-red-500",
    text: "text-red-600 dark:text-red-400",
    badge: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400",
  },
};
