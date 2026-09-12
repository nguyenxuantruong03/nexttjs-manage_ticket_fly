import type { Column } from "@tanstack/react-table";

import { SUMMARY_DEFAULT_LABEL } from "./data-table-types";

/** Lấy giá trị số thô của 1 dòng cho mục đích thống kê — KHÔNG dùng exportValue
 *  vì exportValue có thể đã định dạng lại thành chuỗi hiển thị (vd "12.3 MB"). */
function getRawNumericSource<TData>(
  row: TData,
  column: Column<TData, unknown>,
): unknown {
  const summary = column.columnDef.meta?.summary;
  if (summary?.value) return summary.value(row);

  const accessorKey = (column.columnDef as { accessorKey?: string })
    .accessorKey;
  if (accessorKey) return (row as Record<string, unknown>)[accessorKey];

  return undefined;
}

function toNumber(raw: unknown): number | null {
  if (typeof raw === "number") return Number.isFinite(raw) ? raw : null;
  if (typeof raw === "string" && raw.trim() !== "") {
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

/**
 * Trả về chuỗi hiển thị cho ô thống kê ở cuối bảng, dạng "Tổng: 1.2 GB".
 * Trả về "" nếu cột không khai báo `meta.summary`.
 */
export function computeColumnSummaryText<TData>(
  rows: TData[],
  column: Column<TData, unknown>,
): string {
  const summary = column.columnDef.meta?.summary;
  if (!summary) return "";

  const label = summary.label ?? SUMMARY_DEFAULT_LABEL[summary.type];

  if (summary.type === "count") {
    const count = rows.filter((row) => {
      const raw = getRawNumericSource(row, column);
      return raw !== null && raw !== undefined && raw !== "";
    }).length;
    return `${label}: ${count}`;
  }

  const numbers = rows
    .map((row) => toNumber(getRawNumericSource(row, column)))
    .filter((n): n is number => n !== null);

  if (numbers.length === 0) return `${label}: -`;

  let value: number;
  switch (summary.type) {
    case "sum":
      value = numbers.reduce((a, b) => a + b, 0);
      break;
    case "avg":
      value = numbers.reduce((a, b) => a + b, 0) / numbers.length;
      break;
    case "min":
      value = Math.min(...numbers);
      break;
    case "max":
      value = Math.max(...numbers);
      break;
  }

  const display = summary.format
    ? summary.format(value)
    : value.toLocaleString("vi-VN", { maximumFractionDigits: 2 });

  return `${label}: ${display}`;
}
