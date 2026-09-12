import { Badge } from "@/components/ui/badge";

type Props = {
  items: Array<{ key: string | number; label: string }>;
};

export function BadgeRenderer({ items }: Props) {
  if (!items.length) {
    return <span className="text-muted-foreground">-</span>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {items.map(({ key, label }) => (
        <Badge key={key} variant="outline">
          {label}
        </Badge>
      ))}
    </div>
  );
}
