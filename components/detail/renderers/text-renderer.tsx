export function TextRenderer({ value }: { value: any }) {
  return <span className="break-words">{String(value)}</span>;
}
