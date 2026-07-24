import { Badge } from "@/components/ui/badge";

export function BooleanRenderer({ value }: { value: boolean }) {
  return (
    <Badge variant={value ? "default" : "secondary"}>
      {value ? "Active" : "Inactive"}
    </Badge>
  );
}
