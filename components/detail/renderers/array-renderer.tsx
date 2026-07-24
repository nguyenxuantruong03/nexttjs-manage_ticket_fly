import { Badge } from "@/components/ui/badge";

export function ArrayRenderer({ value }: { value: any[] }) {
  return (
    <div
      className="
flex
flex-wrap
gap-2
"
    >
      {value.map((item, index) => (
        <Badge key={index} variant="outline">
          {typeof item === "object"
            ? (item.name ?? item.title ?? "Object")
            : item}
        </Badge>
      ))}
    </div>
  );
}
