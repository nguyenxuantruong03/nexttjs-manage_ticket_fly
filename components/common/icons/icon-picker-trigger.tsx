import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconRenderer } from "./icon-renderer";
import type { IconConfig } from "./icon-config";

interface IconPickerTriggerProps {
  value?: string | null;
  selectedConfig: IconConfig | null;
  customEnabled: boolean;
  placeholder: string;
  disabled: boolean;
  className?: string;
}

export function IconPickerTrigger({
  value,
  selectedConfig,
  customEnabled,
  placeholder,
  disabled,
  className,
}: IconPickerTriggerProps) {
  return (
    <Button
      type="button"
      variant="outline"
      disabled={disabled}
      className={cn("w-full justify-between", className)}
    >
      <div className="flex min-w-0 items-center gap-2">
        {selectedConfig ? (
          <>
            <IconRenderer value={value} size={18} />
            <span className="truncate">{selectedConfig.name}</span>

            {customEnabled && (
              <span className="shrink-0 rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-medium text-accent-foreground">
                Custom
              </span>
            )}
          </>
        ) : (
          <span className="text-muted-foreground">{placeholder}</span>
        )}
      </div>

      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );
}
