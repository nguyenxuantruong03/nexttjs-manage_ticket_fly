import { Badge } from "@/components/ui/badge";

export function EntityRenderer({ value }: { value: Record<string, any> }) {
  return <Badge variant="outline">{value?.name ?? value?.title ?? "-"}</Badge>;
}
