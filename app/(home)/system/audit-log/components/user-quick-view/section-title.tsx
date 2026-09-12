import type { ReactNode } from "react";

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
}

export function SectionTitle({
  icon,
  title,
}: SectionTitleProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-muted-foreground">
        {icon}
      </div>

      <h3 className="text-sm font-semibold">
        {title}
      </h3>
    </div>
  );
}