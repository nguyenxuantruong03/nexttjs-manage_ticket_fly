interface ProviderStatusBadgeProps {
  status: string;
}

export function ProviderStatusBadge({
  status,
}: ProviderStatusBadgeProps) {
  const isActive = status === "ACTIVE";

  return (
    <span
      className={
        isActive
          ? "rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 dark:bg-green-950 dark:text-green-400"
          : "rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
      }
    >
      {status}
    </span>
  );
}