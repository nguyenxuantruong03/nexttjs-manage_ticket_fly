import { formatTargetType } from "./utils";

interface TargetHeaderProps {
  type: string;
  id: string;
}

export function TargetHeader({ type, id }: TargetHeaderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="rounded-md border bg-muted px-2.5 py-1 text-xs font-medium">
          {formatTargetType(type)}
        </span>
      </div>

      <div>
        <p className="text-xs text-muted-foreground">Target ID</p>

        <p className="break-all font-mono text-sm font-medium">{id}</p>
      </div>
    </div>
  );
}
