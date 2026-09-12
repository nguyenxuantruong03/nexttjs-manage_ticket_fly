import type { ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  value?: string | null;
}

export function ContactItem({
  icon,
  label,
  value,
}: ContactItemProps) {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <div className="text-muted-foreground">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[11px] text-muted-foreground">
          {label}
        </p>

        <p className="truncate text-sm font-medium">
          {value || "—"}
        </p>
      </div>
    </div>
  );
}