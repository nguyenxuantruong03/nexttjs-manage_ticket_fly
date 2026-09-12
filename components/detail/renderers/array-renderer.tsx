"use client";

import { BadgeRenderer } from "./badge-renderer";
type Props = { value: unknown[] };

export function ArrayRenderer({ value }: Props) {

  if (!Array.isArray(value) || value.length === 0) {
    return <span className="text-muted-foreground">-</span>;
  }

  const items = value.map((raw, index) => {
    // Case 1: phần tử đã populate sẵn { id, name, ... }
    if (raw && typeof raw === "object") {
      const obj = raw as Record<string, any>;
      return {
        key: obj.id ?? index,
        label: obj.name ?? obj.title ?? "—",
      };
    }

    // Case 2: phần tử là id thô (string/number) -> tra reference map
    const id = String(raw);
    return {
      key: id,
      label: id,
    };
  });

  return <BadgeRenderer items={items} />;
}
