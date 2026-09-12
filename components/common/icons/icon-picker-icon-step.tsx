import { Check, Search } from "lucide-react";
import { CommandInput, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { IconRenderer } from "./icon-renderer";
import type { IconPickerIconStepProps } from "./icon-picker-types";

export function IconPickerIconStep({
  filteredIcons,
  selectedIconName,
  searchInput,
  setSearchInput,
  listRef,
  handleGridScroll,
  totalHeight,
  offsetY,
  startRow,
  endRow,
  onSelect,
}: IconPickerIconStepProps) {
  const visibleIcons = filteredIcons.slice(
    startRow * 6,
    endRow * 6,
  );

  return (
    <>
      <div className="flex items-center gap-2 border-b px-3 py-2">
        <Search className="h-4 w-4 text-muted-foreground" />

        <div>
          <p className="text-sm font-medium">Chọn icon</p>
          <p className="text-xs text-muted-foreground">
            Chọn một icon để tiếp tục
          </p>
        </div>
      </div>

      <div className="px-3">
        <CommandInput
          value={searchInput}
          onValueChange={setSearchInput}
          placeholder="Tìm icon..."
          className="w-full border-0 focus:ring-0"
        />
      </div>

      <CommandList
        ref={listRef}
        onScroll={handleGridScroll}
        className="max-h-[300px] overflow-y-auto"
      >
        {filteredIcons.length === 0 && (
          <div className="py-6 text-center text-sm text-muted-foreground">
            Không tìm thấy icon.
          </div>
        )}

        {filteredIcons.length > 0 && (
          <div
            style={{
              height: totalHeight,
              position: "relative",
            }}
            className="p-3"
          >
            <div
              className="absolute left-0 right-0 grid grid-cols-6 gap-2 px-3"
              style={{
                transform: `translateY(${offsetY}px)`,
              }}
            >
              {visibleIcons.map((iconName) => {
                const selected = selectedIconName === iconName;

                return (
                  <button
                    key={iconName}
                    type="button"
                    title={iconName}
                    onClick={() => onSelect(iconName)}
                    className={cn(
                      "relative flex h-12 items-center justify-center rounded-md border transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      selected && "border-primary bg-accent",
                    )}
                  >
                    <IconRenderer name={iconName} size={20} eager />

                    {selected && (
                      <span className="absolute right-1 top-1">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </CommandList>
    </>
  );
}
