import { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { getUsageLevel, usageLevelClasses } from "../lib/format";

// Thanh progress tự viết (không dùng shadcn Progress) vì component mặc định
// của shadcn không cho đổi màu indicator theo mức cảnh báo (good/warning/critical)
// mà không phải patch lại component gốc.
function ColoredBar({ percent, colorClass }: { percent: number; colorClass: string }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
      <div
        className={cn("h-full rounded-full transition-all", colorClass)}
        style={{ width: `${Math.min(Math.max(percent, 0), 100)}%` }}
      />
    </div>
  );
}

// ======================================================
// SectionCard — khung bọc mỗi nhóm (Process/System/Disk/DB/Redis)
// ======================================================

export function SectionCard({
  title,
  description,
  icon,
  children,
  className,
}: {
  title: string;
  description?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-3">
        {icon && (
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground">
            {icon}
          </div>
        )}
        <div>
          <CardTitle className="text-base">{title}</CardTitle>
          {description && (
            <CardDescription className="text-xs">
              {description}
            </CardDescription>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">{children}</CardContent>
    </Card>
  );
}

// ======================================================
// StatCard — 1 con số nổi bật (dùng cho hàng tổng quan trên cùng)
// ======================================================

export function StatCard({
  label,
  value,
  unit,
  hint,
  icon,
  percent,
}: {
  label: string;
  value: string | number;
  unit?: string;
  hint?: string;
  icon?: ReactNode;
  /** Nếu có, hiển thị thanh progress màu theo mức cảnh báo bên dưới giá trị */
  percent?: number;
}) {
  const level = percent !== undefined ? getUsageLevel(percent) : "good";
  const classes = usageLevelClasses[level];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">
              {label}
            </p>
            <p className="text-2xl font-semibold tracking-tight">
              {value}
              {unit && (
                <span className="ml-1 text-sm font-normal text-muted-foreground">
                  {unit}
                </span>
              )}
            </p>
            {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
          </div>
          {icon && (
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground">
              {icon}
            </div>
          )}
        </div>
        {percent !== undefined && (
          <div className="mt-3 space-y-1">
            <ColoredBar percent={percent} colorClass={classes.bar} />
            <p className={cn("text-right text-xs font-medium", classes.text)}>
              {percent.toFixed(1)}%
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ======================================================
// UsageBar — 1 dòng "label + % + progress bar" bên trong 1 SectionCard
// ======================================================

export function UsageBar({
  label,
  valueLabel,
  percent,
  thresholds,
}: {
  label: string;
  valueLabel: string;
  percent: number;
  thresholds?: { warning: number; critical: number };
}) {
  const level = getUsageLevel(percent, thresholds);
  const classes = usageLevelClasses[level];

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium">{valueLabel}</span>
      </div>
      <ColoredBar percent={percent} colorClass={classes.bar} />
    </div>
  );
}

// ======================================================
// MetricRow — 1 dòng dạng list (thay thế cho <tr>/<td> của table)
// ======================================================

export function MetricRow({
  primary,
  secondary,
  value,
  badge,
  badgeTone = "default",
}: {
  primary: string;
  secondary?: string;
  value?: string | number;
  badge?: string;
  badgeTone?: "default" | "good" | "warning" | "critical";
}) {
  const badgeClass =
    badgeTone === "default" ? undefined : usageLevelClasses[badgeTone].badge;

  return (
    <div className="flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0">
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{primary}</p>
        {secondary && (
          <p className="truncate text-xs text-muted-foreground">
            {secondary}
          </p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {value !== undefined && (
          <span className="text-sm font-medium tabular-nums">{value}</span>
        )}
        {badge && (
          <Badge variant="secondary" className={cn("text-xs", badgeClass)}>
            {badge}
          </Badge>
        )}
      </div>
    </div>
  );
}

export function MetricRowList({ children }: { children: ReactNode }) {
  return <div className="divide-y">{children}</div>;
}

export function EmptyHint({ text }: { text: string }) {
  return (
    <p className="rounded-md border border-dashed py-4 text-center text-xs text-muted-foreground">
      {text}
    </p>
  );
}
