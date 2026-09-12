import { BadgeCheck } from "lucide-react";

interface RoleBadgeProps {
  role: string;
}

export function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border bg-muted px-2 py-0.5 text-[11px] font-medium">
      <BadgeCheck className="h-3 w-3" />
      {role}
    </span>
  );
}