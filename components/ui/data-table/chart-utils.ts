import type { ColumnDef } from "@tanstack/react-table";

import type {
  AggregationType,
  TimeGranularity,
  TopNLimit,
} from "./data-table-types";
import {
  getExportableColumns,
  getColumnLabel,
  getRawExportValue,
  stringifyExportValue,
  type ExportableColumn,
} from "./export-utils";

/* ------------------------------------------------------------------ */
/* 1. Phân loại cột: "numeric" (vẽ được dạng series số liệu) hay       */
/*    "category" (vẽ được dạng đếm số lượng theo từng giá trị)         */
/* ------------------------------------------------------------------ */

export type ChartColumnKind = "numeric" | "category";

export interface ChartableColumn<TData> {
  id: string;
  label: string;
  kind: ChartColumnKind;
  column: ExportableColumn<TData>;
}

/**
 * Danh sách cột có thể dùng để vẽ biểu đồ — dùng lại đúng logic
 * "cột nào xuất được file" của export-utils, để những gì chọn để vẽ
 * cũng chính là những gì sẽ nằm trong phần dữ liệu khi xuất kèm.
 */
export function getChartableColumns<TData>(
  columns: ColumnDef<TData, any>[],
  columnVisibility: Record<string, boolean>,
): ChartableColumn<TData>[] {
  const exportable = getExportableColumns(columns, columnVisibility);

  return exportable.map((column) => {
    const id = (column.accessorKey ?? column.id) as string;
    const isNumeric =
      column.meta?.filterVariant === "number" ||
      (!!column.meta?.summary &&
        ["sum", "avg", "min", "max"].includes(column.meta.summary.type));

    return {
      id,
      label: getColumnLabel(column),
      kind: isNumeric ? "numeric" : "category",
      column,
    };
  });
}

/* ------------------------------------------------------------------ */
/* 2. Dữ liệu cho biểu đồ "đếm theo danh mục" (Pie / Donut / Bar)      */
/* ------------------------------------------------------------------ */

export interface CategoryDatum {
  label: string;
  count: number;
}

const MAX_CATEGORY_SLICES = 12;

export function buildCategoryData<TData>(
  rows: TData[],
  column: ExportableColumn<TData>,
): CategoryDatum[] {
  const counts = new Map<string, number>();

  rows.forEach((row) => {
    const raw = getRawExportValue(row, column);
    const label = stringifyExportValue(raw) || "(trống)";
    counts.set(label, (counts.get(label) ?? 0) + 1);
  });

  const sorted = [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);

  if (sorted.length <= MAX_CATEGORY_SLICES) return sorted;

  const head = sorted.slice(0, MAX_CATEGORY_SLICES - 1);
  const rest = sorted.slice(MAX_CATEGORY_SLICES - 1);
  const otherCount = rest.reduce((sum, item) => sum + item.count, 0);
  return [...head, { label: "Khác", count: otherCount }];
}

/* ------------------------------------------------------------------ */
/* 3. Dữ liệu cho biểu đồ "chuỗi số liệu theo dòng" (Bar/Line/Area/    */
/*    Radar) — mỗi cột số được chọn trở thành 1 series                 */
/* ------------------------------------------------------------------ */

export function buildSeriesData<TData>(
  rows: TData[],
  numericColumns: ChartableColumn<TData>[],
  labelColumn?: ExportableColumn<TData>,
  maxRows = 100,
): Record<string, unknown>[] {
  const limited = rows.slice(0, maxRows);

  return limited.map((row, index) => {
    const record: Record<string, unknown> = {
      label: labelColumn
        ? stringifyExportValue(getRawExportValue(row, labelColumn)) ||
          `Dòng ${index + 1}`
        : `Dòng ${index + 1}`,
    };

    numericColumns.forEach(({ id, column }) => {
      const raw = getRawExportValue(row, column);
      const n = Number(raw);
      record[id] = Number.isFinite(n) ? n : 0;
    });

    return record;
  });
}

/* ------------------------------------------------------------------ */
/* 3b. So sánh GIÁ TRỊ theo nhóm — vd "Tổng dung lượng theo Type",     */
/*     "Trung bình Width theo MIME Type"... Đây là kiểu so sánh chính. */
/* ------------------------------------------------------------------ */

export interface GroupedValueDatum {
  label: string;
  count?: number;
  [seriesId: string]: string | number | undefined;
}

const DEFAULT_TOP_N: TopNLimit = 20;

function aggregateNumbers(
  numbers: number[],
  aggregation: AggregationType,
): number {
  if (numbers.length === 0) return 0;
  switch (aggregation) {
    case "sum":
      return numbers.reduce((a, b) => a + b, 0);
    case "avg":
      return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    case "min":
      return Math.min(...numbers);
    case "max":
      return Math.max(...numbers);
  }
}

/**
 * Gom dòng theo `groupColumn`, rồi với mỗi nhóm tính giá trị tổng hợp
 * (sum/avg/min/max) của từng cột trong `valueColumns` — và/hoặc số lượng
 * dòng nếu `includeCount`. Kết quả sắp theo giá trị giảm dần để dễ so
 * sánh nhóm nào nổi bật nhất.
 *
 * `topN` giới hạn số nhóm hiển thị (5/10/20/tất cả) — các nhóm còn lại
 * (đã sắp theo giá trị giảm dần) được GỘP LẠI thành 1 nhóm "Khác" với
 * giá trị tổng hợp lại từ toàn bộ dòng thuộc các nhóm đó, thay vì bị cắt
 * bỏ âm thầm như trước — tránh biểu đồ rối khi cột phân loại có hàng
 * trăm giá trị khác nhau nhưng vẫn giữ được tổng số liệu chính xác.
 */
export function buildGroupedValueData<TData>(
  rows: TData[],
  groupColumn: ExportableColumn<TData>,
  valueColumns: ChartableColumn<TData>[],
  aggregation: AggregationType,
  includeCount: boolean,
  topN: TopNLimit = DEFAULT_TOP_N,
): GroupedValueDatum[] {
  const groups = new Map<string, TData[]>();

  rows.forEach((row) => {
    const raw = getRawExportValue(row, groupColumn);
    const label = stringifyExportValue(raw) || "(trống)";
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label)!.push(row);
  });

  const computeDatum = (
    label: string,
    groupRows: TData[],
  ): GroupedValueDatum => {
    const datum: GroupedValueDatum = { label };

    valueColumns.forEach(({ id, column }) => {
      const numbers = groupRows
        .map((r) => Number(getRawExportValue(r, column)))
        .filter((n) => Number.isFinite(n));
      datum[id] = aggregateNumbers(numbers, aggregation);
    });

    if (includeCount || valueColumns.length === 0) {
      datum.count = groupRows.length;
    }

    return datum;
  };

  let result: GroupedValueDatum[] = [...groups.entries()].map(([label, r]) =>
    computeDatum(label, r),
  );

  const sortKey = valueColumns[0]?.id ?? "count";
  result.sort((a, b) => (Number(b[sortKey]) || 0) - (Number(a[sortKey]) || 0));

  const limit = topN === "all" ? Infinity : topN;
  if (result.length > limit) {
    const tailLabels = result.slice(limit).map((d) => d.label);
    const otherRows = tailLabels.flatMap((label) => groups.get(label) ?? []);

    result = result.slice(0, limit);
    if (otherRows.length > 0) {
      result.push(computeDatum("Khác", otherRows));
    }
  }

  return result;
}

/* ------------------------------------------------------------------ */
/* 3b-2. So sánh theo THỜI GIAN — gộp dòng theo ngày/tuần/tháng dựa vào */
/*       1 cột ngày (vd Created At/Updated At) rồi tính tổng hợp giá   */
/*       trị số theo từng khoảng thời gian, sắp theo thời gian tăng    */
/*       dần -> vẽ được biểu đồ xu hướng (line/area/bar).              */
/* ------------------------------------------------------------------ */

/**
 * Lấy giá trị NGÀY THÔ của 1 dòng — bám theo đúng field gốc (accessorKey),
 * KHÔNG dùng exportValue/cell vì các cột ngày trong bảng thường đã được
 * định dạng lại thành chuỗi hiển thị (vd "8/9/2026, 10:00:00") ở đó, mất
 * khả năng parse ngược lại thành Date một cách đáng tin cậy.
 */
function getRawDateValue<TData>(
  row: TData,
  column: ExportableColumn<TData>,
): Date | null {
  const key = column.accessorKey ?? column.id;
  if (!key) return null;
  const raw = (row as Record<string, unknown>)[key as string];
  if (raw instanceof Date) return isNaN(raw.getTime()) ? null : raw;
  if (typeof raw === "string" || typeof raw === "number") {
    const d = new Date(raw);
    return isNaN(d.getTime()) ? null : d;
  }
  return null;
}

/**
 * Lọc ra các cột "có thể là cột ngày" để người dùng chọn làm trục thời
 * gian — nhận diện qua giá trị thô parse được thành Date hợp lệ trên vài
 * dòng đầu, thay vì đoán theo tên cột (tên cột có thể là tiếng Việt/Anh
 * bất kỳ, vd "createdAt", "Ngày tạo"...).
 */
export function getDateColumns<TData>(
  columns: ColumnDef<TData, any>[],
  columnVisibility: Record<string, boolean>,
  sampleRows: TData[],
): ChartableColumn<TData>[] {
  const exportable = getExportableColumns(columns, columnVisibility);
  const sample = sampleRows.slice(0, 20);

  return exportable
    .filter((column) => {
      if (sample.length === 0) return false;
      const parsed = sample
        .map((row) => getRawDateValue(row, column))
        .filter((d): d is Date => d !== null);
      // Đa số dòng mẫu parse được thành ngày hợp lệ -> coi là cột ngày
      return parsed.length >= Math.ceil(sample.length * 0.6);
    })
    .map((column) => ({
      id: (column.accessorKey ?? column.id) as string,
      label: getColumnLabel(column),
      kind: "category" as ChartColumnKind,
      column,
    }));
}

export interface TimeSeriesDatum {
  label: string;
  bucketStart: number; // epoch ms, dùng để sắp xếp tăng dần
  count?: number;
  [seriesId: string]: string | number | undefined;
}

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function startOfWeek(d: Date): Date {
  const day = startOfDay(d);
  const dow = day.getDay(); // 0 = Chủ nhật
  const diff = dow === 0 ? -6 : 1 - dow; // tuần bắt đầu từ Thứ 2
  day.setDate(day.getDate() + diff);
  return day;
}

function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function bucketKeyAndLabel(
  date: Date,
  granularity: TimeGranularity,
): { key: number; label: string } {
  if (granularity === "day") {
    const d = startOfDay(date);
    return {
      key: d.getTime(),
      label: d.toLocaleDateString("vi-VN"),
    };
  }
  if (granularity === "week") {
    const d = startOfWeek(date);
    const end = new Date(d);
    end.setDate(end.getDate() + 6);
    return {
      key: d.getTime(),
      label: `${d.toLocaleDateString("vi-VN")} – ${end.toLocaleDateString("vi-VN")}`,
    };
  }
  const d = startOfMonth(date);
  return {
    key: d.getTime(),
    label: d.toLocaleDateString("vi-VN", { month: "2-digit", year: "numeric" }),
  };
}

/**
 * Gộp dòng theo khoảng thời gian (ngày/tuần/tháng) dựa trên `dateColumn`,
 * tính tổng hợp (sum/avg/min/max) các cột trong `valueColumns` cho từng
 * khoảng — và/hoặc đếm số dòng nếu `includeCount`. Kết quả sắp theo thời
 * gian TĂNG DẦN (khác với buildGroupedValueData) vì đây là biểu đồ xu
 * hướng, cần đọc theo trình tự thời gian.
 */
export function buildTimeSeriesData<TData>(
  rows: TData[],
  dateColumn: ExportableColumn<TData>,
  granularity: TimeGranularity,
  valueColumns: ChartableColumn<TData>[],
  aggregation: AggregationType,
  includeCount: boolean,
): TimeSeriesDatum[] {
  const buckets = new Map<number, { label: string; rows: TData[] }>();

  rows.forEach((row) => {
    const date = getRawDateValue(row, dateColumn);
    if (!date) return;
    const { key, label } = bucketKeyAndLabel(date, granularity);
    if (!buckets.has(key)) buckets.set(key, { label, rows: [] });
    buckets.get(key)!.rows.push(row);
  });

  const result: TimeSeriesDatum[] = [...buckets.entries()]
    .sort(([a], [b]) => a - b)
    .map(([bucketStart, { label, rows: bucketRows }]) => {
      const datum: TimeSeriesDatum = { label, bucketStart };

      valueColumns.forEach(({ id, column }) => {
        const numbers = bucketRows
          .map((r) => Number(getRawExportValue(r, column)))
          .filter((n) => Number.isFinite(n));
        datum[id] = aggregateNumbers(numbers, aggregation);
      });

      if (includeCount || valueColumns.length === 0) {
        datum.count = bucketRows.length;
      }

      return datum;
    });

  return result;
}

/* ------------------------------------------------------------------ */
/* 3c. So sánh GIÁ TRỊ với GIÁ TRỊ — biểu đồ phân tán (Scatter), mỗi   */
/*     dòng là 1 điểm (x, y), có thể tô màu theo 1 cột phân loại.      */
/* ------------------------------------------------------------------ */

export interface ScatterDatum {
  x: number;
  y: number;
  label: string;
  colorKey: string;
}

const MAX_SCATTER_POINTS = 500;

export function buildScatterData<TData>(
  rows: TData[],
  xColumn: ExportableColumn<TData>,
  yColumn: ExportableColumn<TData>,
  colorColumn?: ExportableColumn<TData>,
  labelColumn?: ExportableColumn<TData>,
  maxPoints = MAX_SCATTER_POINTS,
): ScatterDatum[] {
  return rows.slice(0, maxPoints).map((row, index) => {
    const x = Number(getRawExportValue(row, xColumn));
    const y = Number(getRawExportValue(row, yColumn));
    return {
      x: Number.isFinite(x) ? x : 0,
      y: Number.isFinite(y) ? y : 0,
      label: labelColumn
        ? stringifyExportValue(getRawExportValue(row, labelColumn)) ||
          `Dòng ${index + 1}`
        : `Dòng ${index + 1}`,
      colorKey: colorColumn
        ? stringifyExportValue(getRawExportValue(row, colorColumn)) || "(trống)"
        : "Tất cả",
    };
  });
}

/** Gom các điểm scatter theo colorKey — mỗi nhóm vẽ thành 1 series riêng màu */
export function groupScatterByColor(
  points: ScatterDatum[],
): { key: string; points: ScatterDatum[] }[] {
  const groups = new Map<string, ScatterDatum[]>();
  points.forEach((p) => {
    if (!groups.has(p.colorKey)) groups.set(p.colorKey, []);
    groups.get(p.colorKey)!.push(p);
  });
  return [...groups.entries()].map(([key, pts]) => ({ key, points: pts }));
}

/* ------------------------------------------------------------------ */
/* 4. Rasterize khối SVG (do recharts render) thành ảnh PNG, không cần */
/*    thêm thư viện nào — chỉ dùng API sẵn có của trình duyệt.         */
/* ------------------------------------------------------------------ */

/**
 * Copy 1 ảnh (dạng PNG data URL) vào clipboard hệ thống — dán thẳng vào
 * Slack/email/PowerPoint mà không cần tải file xuống trước. Trả về false
 * nếu trình duyệt không hỗ trợ Clipboard API (vd Safari cũ, hoặc không
 * chạy trên HTTPS/localhost) để nơi gọi có thể báo lỗi phù hợp.
 */
export async function copyPngToClipboard(dataUrl: string): Promise<boolean> {
  if (
    typeof navigator === "undefined" ||
    !navigator.clipboard ||
    typeof ClipboardItem === "undefined"
  ) {
    return false;
  }

  try {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
    return true;
  } catch {
    return false;
  }
}

export async function svgElementToPngDataUrl(
  svg: SVGSVGElement,
  scale = 2,
  backgroundColor = "#ffffff",
  titleText?: string,
  subtitleText?: string,
): Promise<string> {
  const clone = svg.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const width =
    svg.viewBox?.baseVal?.width ||
    svg.clientWidth ||
    svg.getBoundingClientRect().width ||
    640;
  const height =
    svg.viewBox?.baseVal?.height ||
    svg.clientHeight ||
    svg.getBoundingClientRect().height ||
    360;

  // Chừa thêm không gian phía trên để vẽ tiêu đề / phụ đề (nếu có), sẽ
  // được "khắc" trực tiếp vào ảnh PNG xuất ra — không phụ thuộc vào HTML
  // ở phần preview (vốn không được canvas chụp lại).
  const hasTitle = Boolean(titleText);
  const hasSubtitle = Boolean(subtitleText);
  const titleBlockHeight =
    hasTitle || hasSubtitle
      ? (hasTitle ? 26 : 0) + (hasSubtitle ? 20 : 0) + 14
      : 0;
  const totalHeight = height + titleBlockHeight;

  const svgString = new XMLSerializer().serializeToString(clone);
  const svgBlob = new Blob([svgString], {
    type: "image/svg+xml;charset=utf-8",
  });
  const url = URL.createObjectURL(svgBlob);

  try {
    return await new Promise<string>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = width * scale;
        canvas.height = totalHeight * scale;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Không tạo được canvas context"));
          return;
        }
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.scale(scale, scale);

        let cursorY = 8;
        if (hasTitle) {
          ctx.fillStyle = "#0f172a";
          ctx.font = "bold 17px Arial, Helvetica, sans-serif";
          ctx.textBaseline = "top";
          ctx.fillText(titleText as string, 12, cursorY);
          cursorY += 26;
        }
        if (hasSubtitle) {
          ctx.fillStyle = "#64748b";
          ctx.font = "12px Arial, Helvetica, sans-serif";
          ctx.textBaseline = "top";
          ctx.fillText(subtitleText as string, 12, cursorY);
          cursorY += 20;
        }

        ctx.drawImage(img, 0, titleBlockHeight, width, height);
        resolve(canvas.toDataURL("image/png"));
      };
      img.onerror = () => reject(new Error("Không đọc được ảnh biểu đồ"));
      img.src = url;
    });
  } finally {
    URL.revokeObjectURL(url);
  }
}
