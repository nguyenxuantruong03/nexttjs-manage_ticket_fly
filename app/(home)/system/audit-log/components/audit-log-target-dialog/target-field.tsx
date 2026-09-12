import { TargetValue } from "./target-value";
import { formatFieldName } from "./utils";

interface TargetFieldProps {
  name: string;
  value: unknown;
}

export function TargetField({ name, value }: TargetFieldProps) {
  return (
    <div className="min-w-0 space-y-1">
      <p className="text-xs text-muted-foreground">{formatFieldName(name)}</p>

      <TargetValue value={value} />
    </div>
  );
}
