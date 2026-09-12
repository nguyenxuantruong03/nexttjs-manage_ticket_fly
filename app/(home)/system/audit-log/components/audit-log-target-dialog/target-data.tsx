import { FileText } from "lucide-react";
import { TargetField } from "./target-field";

interface TargetDataProps {
  data: Record<string, unknown>;
}

export function TargetData({ data }: TargetDataProps) {
  const entries = Object.entries(data);

  if (entries.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
        No target data available.
      </div>
    );
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-muted-foreground" />

        <h3 className="text-sm font-semibold">Target Data</h3>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {entries.map(([key, value]) => (
          <TargetField key={key} name={key} value={value} />
        ))}
      </div>
    </section>
  );
}
