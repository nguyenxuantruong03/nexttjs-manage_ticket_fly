interface EmptyValueProps {
  text: string;
}

export function EmptyValue({
  text,
}: EmptyValueProps) {
  return (
    <div className="rounded-lg border border-dashed px-4 py-3 text-sm text-muted-foreground">
      {text}
    </div>
  );
}