interface OperatingStatusBadgeProps {
  status: string;
}

export function OperatingStatusBadge({ status }: OperatingStatusBadgeProps) {
  const isOpen = status === "OPEN";

  return (
    <span className="text-[10px] text-muted-foreground">
      {isOpen ? "● " : "○ "}
      {status}
    </span>
  );
}
