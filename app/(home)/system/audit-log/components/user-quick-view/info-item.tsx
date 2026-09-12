interface InfoItemProps {
  label: string;
  value?: string | null;
  mono?: boolean;
}

export function InfoItem({
  label,
  value,
  mono = false,
}: InfoItemProps) {
  return (
    <div className="min-w-0 space-y-1">
      <p className="text-xs text-muted-foreground">
        {label}
      </p>

      <p
        className={
          mono
            ? "break-all font-mono text-xs font-medium"
            : "break-words text-sm font-medium"
        }
      >
        {value || "—"}
      </p>
    </div>
  );
}