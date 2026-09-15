import type { RowData } from "@tanstack/react-table";
import type {
  ColumnOrderState,
  ColumnPinningState,
  ColumnSizingState,
  VisibilityState,
} from "@tanstack/react-table";

export type FilterVariant = "text" | "number" | "boolean" | "select";

export type DataTableFeature = "sorting" | "filtering" | "hiding" | "pinning";

export type TableDensity = "compact" | "comfortable" | "spacious";

/** Các định dạng file có thể xuất ra từ bảng */
export type ExportFormat = "csv" | "xlsx" | "doc" | "json" | "pdf";

export const EXPORT_FORMAT_LABEL: Record<ExportFormat, string> = {
  csv: "CSV",
  xlsx: "Excel (.xls)",
  doc: "Word (.doc)",
  json: "JSON",
  pdf: "PDF",
};

/** Các kiểu biểu đồ hỗ trợ khi dựng chart từ dữ liệu bảng */
export type ChartType =
  | "bar"
  | "stackedBar"
  | "line"
  | "area"
  | "pie"
  | "donut"
  | "radar"
  | "scatter";

export const CHART_TYPE_LABEL: Record<ChartType, string> = {
  bar: "Cột",
  stackedBar: "Cột chồng",
  line: "Đường",
  area: "Vùng",
  pie: "Tròn",
  donut: "Vành khuyên",
  radar: "Radar",
  scatter: "Phân tán",
};

/**
 * Cách so sánh dữ liệu:
 * - "group": so sánh GIÁ TRỊ (tổng/TB/min/max/số lượng) giữa các nhóm —
 *   vd tổng dung lượng theo từng Type. Đây là kiểu so sánh chính.
 * - "series": so sánh nhiều CỘT với nhau theo từng dòng (kiểu cũ).
 * - "scatter": so sánh tương quan giữa 2 giá trị số (X so với Y).
 * - "time": so sánh xu hướng theo thời gian (ngày/tuần/tháng), dựa trên
 *   1 cột ngày (vd Created At/Updated At).
 */
export type ComparisonMode = "group" | "series" | "scatter" | "time";

export const COMPARISON_MODE_LABEL: Record<ComparisonMode, string> = {
  group: "Giá trị theo nhóm",
  series: "Cột theo dòng",
  scatter: "Tương quan (X–Y)",
  time: "Xu hướng theo thời gian",
};

/** Nhóm kiểu biểu đồ hợp lệ theo từng cách so sánh */
export const CHART_TYPES_BY_MODE: Record<ComparisonMode, ChartType[]> = {
  group: ["bar", "stackedBar", "line", "area", "radar", "pie", "donut"],
  series: ["bar", "stackedBar", "line", "area", "radar"],
  scatter: ["scatter"],
  time: ["line", "area", "bar"],
};

/** Đơn vị gộp nhóm theo thời gian cho chế độ "time" */
export type TimeGranularity = "day" | "week" | "month";

export const TIME_GRANULARITY_LABEL: Record<TimeGranularity, string> = {
  day: "Theo ngày",
  week: "Theo tuần",
  month: "Theo tháng",
};

/**
 * Giới hạn số nhóm hiển thị trên biểu đồ (top N theo giá trị/độ lớn), phần
 * còn lại được gộp vào "Khác" — tránh biểu đồ rối khi cột phân loại có
 * hàng trăm giá trị khác nhau. "all" nghĩa là không giới hạn.
 */
export type TopNLimit = 5 | 10 | 20 | "all";

export const TOP_N_OPTIONS: TopNLimit[] = [5, 10, 20, "all"];

export const TOP_N_LABEL: Record<TopNLimit, string> = {
  5: "Top 5",
  10: "Top 10",
  20: "Top 20",
  all: "Tất cả",
};

/** Kiểu tổng hợp giá trị số khi so sánh theo nhóm */
export type AggregationType = "sum" | "avg" | "min" | "max";

export const AGGREGATION_LABEL: Record<AggregationType, string> = {
  sum: "Tổng",
  avg: "Trung bình",
  min: "Nhỏ nhất",
  max: "Lớn nhất",
};

/**
 * Nhiều bảng màu để chọn khi vẽ biểu đồ — "default" hài hoà với
 * THEME.primary trong export-utils, các bảng còn lại là lựa chọn thêm.
 */
export const CHART_PALETTES = {
  default: [
    "#1d4ed8",
    "#0ea5e9",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#ec4899",
    "#14b8a6",
    "#64748b",
    "#eab308",
  ],
  pastel: [
    "#93c5fd",
    "#a7f3d0",
    "#fde68a",
    "#fca5a5",
    "#c4b5fd",
    "#f9a8d4",
    "#99f6e4",
    "#fdba74",
    "#bef264",
    "#a5b4fc",
  ],
  earth: [
    "#78350f",
    "#92400e",
    "#b45309",
    "#a16207",
    "#4d7c0f",
    "#166534",
    "#115e59",
    "#1e3a5f",
    "#374151",
    "#7c2d12",
  ],
  vivid: [
    "#dc2626",
    "#ea580c",
    "#facc15",
    "#65a30d",
    "#059669",
    "#0891b2",
    "#2563eb",
    "#7c3aed",
    "#c026d3",
    "#e11d48",
  ],
  mono: [
    "#0f172a",
    "#1e293b",
    "#334155",
    "#475569",
    "#64748b",
    "#94a3b8",
    "#cbd5e1",
    "#e2e8f0",
  ],
} as const satisfies Record<string, string[]>;

export type ChartPaletteId = keyof typeof CHART_PALETTES;

export const CHART_PALETTE_LABEL: Record<ChartPaletteId, string> = {
  default: "Mặc định",
  pastel: "Pastel",
  earth: "Đất",
  vivid: "Rực rỡ",
  mono: "Đơn sắc",
};

/** Bảng màu mặc định — giữ lại để không phá vỡ các import cũ */
export const CHART_PALETTE: string[] = CHART_PALETTES.default;

/** Vị trí hiển thị chú giải (legend) của biểu đồ, hoặc "none" để ẩn */
export type LegendPosition = "top" | "bottom" | "left" | "right" | "none";

export const LEGEND_POSITION_LABEL: Record<LegendPosition, string> = {
  top: "Trên",
  bottom: "Dưới",
  left: "Trái",
  right: "Phải",
  none: "Ẩn",
};

/** Kiểu thống kê hiển thị ở dòng tổng cuối bảng */
export type SummaryType = "sum" | "avg" | "min" | "max" | "count";

export const SUMMARY_DEFAULT_LABEL: Record<SummaryType, string> = {
  sum: "Tổng",
  avg: "TB",
  min: "Nhỏ nhất",
  max: "Lớn nhất",
  count: "Số lượng",
};

export interface ColumnSummary<TData = any> {
  type: SummaryType;
  /**
   * Lấy giá trị SỐ THÔ để tính toán. Mặc định lấy theo accessorKey của cột.
   * Bắt buộc cần khai báo khi: cột không có accessorKey (cột tính toán), hoặc
   * khi `cell`/`exportValue` của cột đã định dạng lại giá trị thành chuỗi
   * (vd "12.3 MB") — nếu không kết quả tính sẽ sai.
   */
  value?: (row: TData) => number | null | undefined;
  /** Định dạng lại kết quả trước khi hiển thị, vd đổi byte -> "12.3 MB" */
  format?: (value: number) => string;
  /** Nhãn hiển thị trước giá trị, mặc định tự suy ra theo type (vd "Tổng") */
  label?: string;
}

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: "left" | "center" | "right";
    filterVariant?: FilterVariant;
    filterOptions?: { label: string; value: string }[];
    /** Tên cột hiển thị trong menu / export, mặc định lấy header */
    exportLabel?: string;
    /** Nhãn ngắn hiển thị trên chip bộ lọc đang active, mặc định lấy exportLabel */
    filterLabel?: string;
    /**
     * Hàm trả về giá trị "sạch" của cột để xuất file (CSV/Excel/Word/PDF/JSON).
     * Dùng khi cột không có accessorKey (cột tính toán) hoặc khi giá trị thô
     * không phải string/number (mảng, object, Date...) — tránh lỗi hiển thị
     * kiểu "[object Object]" khi xuất file.
     * Trả về giá trị nguyên bản (string/number/boolean/null) — không cần tự
     * chuyển thành chuỗi, bộ xuất file sẽ tự định dạng.
     */
    exportValue?: (row: TData) => unknown;
    /** Bật dòng tổng/thống kê ở cuối bảng cho cột này (tổng, TB, min, max, đếm) */
    summary?: ColumnSummary<TData>;
  }
}

/**
 * Cấu hình biểu đồ đã chọn (chế độ so sánh, cột, kiểu vẽ, tuỳ chỉnh hiển
 * thị...) — lưu vào localStorage theo persistKey của bảng để mở lại dialog
 * không phải chọn lại từ đầu. Tất cả field đều optional vì tuỳ chế độ mà
 * chỉ một phần được dùng.
 */
export interface PersistedChartConfig {
  mode: ComparisonMode;
  chartType: ChartType;

  groupColumnId?: string;
  valueColumnIds?: string[];
  includeCount?: boolean;
  aggregation?: AggregationType;
  topN?: TopNLimit;

  seriesColumnIds?: string[];
  seriesLabelColumnId?: string;

  xColumnId?: string;
  yColumnId?: string;
  colorColumnId?: string;

  timeColumnId?: string;
  timeGranularity?: TimeGranularity;
  timeValueColumnIds?: string[];
  timeIncludeCount?: boolean;
  timeAggregation?: AggregationType;

  chartTitle?: string;
  chartSubtitle?: string;
  showValueLabels?: boolean;
  paletteId?: ChartPaletteId;
  showLegend?: boolean;
  legendPosition?: LegendPosition;
  logScale?: boolean;
}

/** Server-side mode: khi bảng lớn, tự fetch qua API thay vì lọc/sort client */
export interface ServerSideState {
  pageIndex: number;
  pageSize: number;
  sorting: { id: string; desc: boolean }[];
  filters: { id: string; value: unknown }[];
  globalFilter: string;
}

/** Trạng thái view của bảng, có thể lưu vào localStorage theo persistKey */
export interface DataTableViewState {
  pageSize: number;

  density: TableDensity;

  columnVisibility: VisibilityState;

  columnPinning: ColumnPinningState;

  columnSizing: ColumnSizingState;

  columnOrder: ColumnOrderState;
}

/** Padding dọc cho mỗi mật độ dòng — dùng cn()/twMerge nên sẽ ghi đè class mặc định của TableCell */
export const DENSITY_ROW_CLASS: Record<TableDensity, string> = {
  compact: "py-1.5",
  comfortable: "py-2.5",
  spacious: "py-4",
};

export const DENSITY_LABEL: Record<TableDensity, string> = {
  compact: "Gọn",
  comfortable: "Vừa",
  spacious: "Rộng",
};
