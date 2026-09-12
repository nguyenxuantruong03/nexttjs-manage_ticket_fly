export function TextRenderer({ value }: { value: any }) {
  if (value === null || value === undefined || value === "") {
    return <span className="text-muted-foreground">-</span>;
  }
  return <span className="break-words">{String(value)}</span>;
}
