import type { ReactNode } from "react";

interface StatCardProps {
  icon?: ReactNode;
  label: string;
  value: string;
}

export function StatCard({
  icon,
  label,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-lg border bg-muted/20 p-3">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {icon}
        <span>{label}</span>
      </div>

      <p className="mt-1 text-base font-semibold">
        {value}
      </p>
    </div>
  );
}