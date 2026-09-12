export function NumberRenderer({ value }: { value: number }) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return <span className="text-muted-foreground">-</span>;
  }
  return <span>{new Intl.NumberFormat("vi-VN").format(value)}</span>;
}