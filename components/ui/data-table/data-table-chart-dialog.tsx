"use client";

import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";
import {
  BarChart3,
  Layers,
  LineChart as LineChartIcon,
  AreaChart as AreaChartIcon,
  PieChart as PieChartIcon,
  Circle,
  Hexagon,
  ChartScatter,
  Download,
  ImageDown,
  Loader2,
  Copy,
  Check,
  ChevronDown,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import {
  AGGREGATION_LABEL,
  CHART_PALETTE_LABEL,
  CHART_PALETTES,
  CHART_TYPES_BY_MODE,
  CHART_TYPE_LABEL,
  COMPARISON_MODE_LABEL,
  LEGEND_POSITION_LABEL,
  TIME_GRANULARITY_LABEL,
  TOP_N_LABEL,
  TOP_N_OPTIONS,
  type AggregationType,
  type ChartPaletteId,
  type ChartType,
  type ComparisonMode,
  type LegendPosition,
  type PersistedChartConfig,
  type TimeGranularity,
  type TopNLimit,
} from "./data-table-types";
import {
  buildGroupedValueData,
  buildScatterData,
  buildSeriesData,
  buildTimeSeriesData,
  copyPngToClipboard,
  getChartableColumns,
  getDateColumns,
  groupScatterByColor,
  svgElementToPngDataUrl,
  type ChartableColumn,
  type GroupedValueDatum,
  type TimeSeriesDatum,
} from "./chart-utils";
import {
  exportChartWithData,
  exportChartWithDataPdf,
  downloadDataUrl,
} from "./export-utils";

const CHART_TYPE_ICON: Record<ChartType, React.ElementType> = {
  bar: BarChart3,
  stackedBar: Layers,
  line: LineChartIcon,
  area: AreaChartIcon,
  pie: PieChartIcon,
  donut: Circle,
  radar: Hexagon,
  scatter: ChartScatter,
};

function readPersistedChartConfig(
  key: string,
): Partial<PersistedChartConfig> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

const NONE = "__none__";

/**
 * Format số cho 1 cột trên biểu đồ (nhãn giá trị / tooltip / trục) — tái
 * dùng đúng `meta.summary.format` đã khai báo ở cột (vd byte -> "12.3 MB")
 * để khớp với những gì người dùng thấy trong bảng, thay vì hiện số thô.
 */
function getChartValueFormatter<TData>(
  col?: ChartableColumn<TData>,
): (value: number) => string {
  const fmt = col?.column.meta?.summary?.format;
  if (fmt) return fmt;
  return (value: number) =>
    value.toLocaleString("vi-VN", { maximumFractionDigits: 2 });
}

interface DataTableChartDialogProps<TData> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  columns: ColumnDef<TData, any>[];
  rows: TData[];
  columnVisibility: Record<string, boolean>;
  exportFilename: string;
  exportTitle: string;
  /** Tóm tắt các filter đang active trên bảng (vd "Type: Ảnh"), chỉ để hiển thị */
  activeFilterSummary?: string[];
  /** Lưu/khôi phục cấu hình biểu đồ đã chọn vào localStorage theo key này */
  persistKey?: string;
}

export function DataTableChartDialog<TData>({
  open,
  onOpenChange,
  columns,
  rows,
  columnVisibility,
  exportFilename,
  exportTitle,
  activeFilterSummary = [],
  persistKey,
}: DataTableChartDialogProps<TData>) {
  const chartHostRef = React.useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = React.useState<
    "png" | "doc" | "pdf" | "copy" | null
  >(null);
  const [copied, setCopied] = React.useState(false);

  const storageKey = persistKey ? `data-table-chart:${persistKey}` : undefined;
  const persistedConfig = React.useMemo(
    () => (storageKey ? readPersistedChartConfig(storageKey) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [storageKey],
  );

  const chartableColumns = React.useMemo(
    () => getChartableColumns(columns, columnVisibility),
    [columns, columnVisibility],
  );
  const numericColumns = chartableColumns.filter((c) => c.kind === "numeric");
  const categoricalColumns = chartableColumns.filter(
    (c) => c.kind === "category",
  );
  const dateColumns = React.useMemo(
    () => getDateColumns(columns, columnVisibility, rows),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [columns, columnVisibility],
  );

  const canGroup = categoricalColumns.length > 0;
  const canSeries = numericColumns.length > 0;
  const canScatter = numericColumns.length >= 2;
  const canTime = dateColumns.length > 0 && numericColumns.length > 0;

  const [mode, setMode] = React.useState<ComparisonMode>("group");

  // ---- Chế độ "Giá trị theo nhóm" (mặc định, so sánh VALUE) ----
  const [groupColumnId, setGroupColumnId] = React.useState<string>("");
  const [valueColumnIds, setValueColumnIds] = React.useState<string[]>([]);
  const [includeCount, setIncludeCount] = React.useState(false);
  const [aggregation, setAggregation] = React.useState<AggregationType>("sum");
  const [topN, setTopN] = React.useState<TopNLimit>(20);

  // ---- Chế độ "Cột theo dòng" ----
  const [seriesColumnIds, setSeriesColumnIds] = React.useState<string[]>([]);
  const [seriesLabelColumnId, setSeriesLabelColumnId] = React.useState(NONE);

  // ---- Chế độ "Tương quan (X–Y)" ----
  const [xColumnId, setXColumnId] = React.useState("");
  const [yColumnId, setYColumnId] = React.useState("");
  const [colorColumnId, setColorColumnId] = React.useState(NONE);

  // ---- Chế độ "Xu hướng theo thời gian" ----
  const [timeColumnId, setTimeColumnId] = React.useState("");
  const [timeGranularity, setTimeGranularity] =
    React.useState<TimeGranularity>("day");
  const [timeValueColumnIds, setTimeValueColumnIds] = React.useState<string[]>(
    [],
  );
  const [timeIncludeCount, setTimeIncludeCount] = React.useState(false);
  const [timeAggregation, setTimeAggregation] =
    React.useState<AggregationType>("sum");

  const [chartType, setChartType] = React.useState<ChartType>("bar");

  // ---- Tuỳ chỉnh hiển thị: tiêu đề, nhãn giá trị, bảng màu, chú giải ----
  const [chartTitle, setChartTitle] = React.useState(exportTitle);
  const [chartSubtitle, setChartSubtitle] = React.useState("");
  const [showValueLabels, setShowValueLabels] = React.useState(false);
  const [paletteId, setPaletteId] = React.useState<ChartPaletteId>("default");
  const [showLegend, setShowLegend] = React.useState(true);
  const [legendPosition, setLegendPosition] =
    React.useState<LegendPosition>("bottom");
  const [logScale, setLogScale] = React.useState(false);

  const palette = CHART_PALETTES[paletteId];

  // Khởi tạo lại toàn bộ lựa chọn mặc định mỗi khi danh sách cột đổi, sau
  // đó áp lại cấu hình đã lưu (nếu có persistKey và các cột đó vẫn còn
  // tồn tại) để mở dialog lên không phải chọn lại từ đầu.
  React.useEffect(() => {
    const numericIds = new Set(numericColumns.map((c) => c.id));
    const categoricalIds = new Set(categoricalColumns.map((c) => c.id));
    const dateIds = new Set(dateColumns.map((c) => c.id));
    const p = persistedConfig;

    const defaultMode: ComparisonMode = canGroup
      ? "group"
      : canSeries
        ? "series"
        : canTime
          ? "time"
          : "scatter";
    const validModes: ComparisonMode[] = [
      ...(canGroup ? (["group"] as const) : []),
      ...(canSeries ? (["series"] as const) : []),
      ...(canTime ? (["time"] as const) : []),
      ...(canScatter ? (["scatter"] as const) : []),
    ];
    setMode(p?.mode && validModes.includes(p.mode) ? p.mode : defaultMode);

    const validGroupId =
      p?.groupColumnId && categoricalIds.has(p.groupColumnId)
        ? p.groupColumnId
        : (categoricalColumns[0]?.id ?? "");
    setGroupColumnId(validGroupId);
    const validValueIds = p?.valueColumnIds?.filter((id) => numericIds.has(id));
    setValueColumnIds(
      validValueIds && validValueIds.length > 0
        ? validValueIds
        : numericColumns.map((c) => c.id),
    );
    setIncludeCount(p?.includeCount ?? numericColumns.length === 0);
    setAggregation(p?.aggregation ?? "sum");
    setTopN(p?.topN ?? 20);

    const validSeriesIds = p?.seriesColumnIds?.filter((id) =>
      numericIds.has(id),
    );
    setSeriesColumnIds(
      validSeriesIds && validSeriesIds.length > 0
        ? validSeriesIds
        : numericColumns.map((c) => c.id),
    );
    setSeriesLabelColumnId(
      p?.seriesLabelColumnId && categoricalIds.has(p.seriesLabelColumnId)
        ? p.seriesLabelColumnId
        : (categoricalColumns[0]?.id ?? NONE),
    );

    setXColumnId(
      p?.xColumnId && numericIds.has(p.xColumnId)
        ? p.xColumnId
        : (numericColumns[0]?.id ?? ""),
    );
    setYColumnId(
      p?.yColumnId && numericIds.has(p.yColumnId)
        ? p.yColumnId
        : (numericColumns[1]?.id ?? numericColumns[0]?.id ?? ""),
    );
    setColorColumnId(
      p?.colorColumnId && categoricalIds.has(p.colorColumnId)
        ? p.colorColumnId
        : NONE,
    );

    setTimeColumnId(
      p?.timeColumnId && dateIds.has(p.timeColumnId)
        ? p.timeColumnId
        : (dateColumns[0]?.id ?? ""),
    );
    setTimeGranularity(p?.timeGranularity ?? "day");
    const validTimeValueIds = p?.timeValueColumnIds?.filter((id) =>
      numericIds.has(id),
    );
    setTimeValueColumnIds(
      validTimeValueIds && validTimeValueIds.length > 0
        ? validTimeValueIds
        : numericColumns.slice(0, 1).map((c) => c.id),
    );
    setTimeIncludeCount(p?.timeIncludeCount ?? false);
    setTimeAggregation(p?.timeAggregation ?? "sum");

    if (p?.chartTitle !== undefined) setChartTitle(p.chartTitle);
    if (p?.chartSubtitle !== undefined) setChartSubtitle(p.chartSubtitle);
    setShowValueLabels(p?.showValueLabels ?? false);
    setPaletteId(p?.paletteId ?? "default");
    setShowLegend(p?.showLegend ?? true);
    setLegendPosition(p?.legendPosition ?? "bottom");
    setLogScale(p?.logScale ?? false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns]);

  // Lưu cấu hình biểu đồ hiện tại vào localStorage khi có persistKey
  React.useEffect(() => {
    if (!storageKey) return;
    const config: PersistedChartConfig = {
      mode,
      chartType,
      groupColumnId,
      valueColumnIds,
      includeCount,
      aggregation,
      topN,
      seriesColumnIds,
      seriesLabelColumnId,
      xColumnId,
      yColumnId,
      colorColumnId,
      timeColumnId,
      timeGranularity,
      timeValueColumnIds,
      timeIncludeCount,
      timeAggregation,
      chartTitle,
      chartSubtitle,
      showValueLabels,
      paletteId,
      showLegend,
      legendPosition,
      logScale,
    };
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(config));
    } catch {
      // localStorage không khả dụng -> bỏ qua
    }
  }, [
    storageKey,
    mode,
    chartType,
    groupColumnId,
    valueColumnIds,
    includeCount,
    aggregation,
    topN,
    seriesColumnIds,
    seriesLabelColumnId,
    xColumnId,
    yColumnId,
    colorColumnId,
    timeColumnId,
    timeGranularity,
    timeValueColumnIds,
    timeIncludeCount,
    timeAggregation,
    chartTitle,
    chartSubtitle,
    showValueLabels,
    paletteId,
    showLegend,
    legendPosition,
    logScale,
  ]);

  const effectiveIncludeCount = includeCount || valueColumnIds.length === 0;

  const groupColumn = categoricalColumns.find((c) => c.id === groupColumnId);
  const selectedValueColumns = numericColumns.filter((c) =>
    valueColumnIds.includes(c.id),
  );
  const groupSeriesCount =
    selectedValueColumns.length + (effectiveIncludeCount ? 1 : 0);

  const selectedSeriesColumns = numericColumns.filter((c) =>
    seriesColumnIds.includes(c.id),
  );
  const seriesLabelColumn = categoricalColumns.find(
    (c) => c.id === seriesLabelColumnId,
  );

  const xColumn = numericColumns.find((c) => c.id === xColumnId);
  const yColumn = numericColumns.find((c) => c.id === yColumnId);
  const colorColumn = categoricalColumns.find((c) => c.id === colorColumnId);

  const timeColumn = dateColumns.find((c) => c.id === timeColumnId);
  const effectiveTimeIncludeCount =
    timeIncludeCount || timeValueColumnIds.length === 0;
  const selectedTimeValueColumns = numericColumns.filter((c) =>
    timeValueColumnIds.includes(c.id),
  );

  // ---- Danh sách kiểu biểu đồ khả dụng cho chế độ hiện tại ----
  const availableChartTypes = React.useMemo(() => {
    const base = CHART_TYPES_BY_MODE[mode];
    if (mode === "group" && groupSeriesCount !== 1) {
      return base.filter((t) => t !== "pie" && t !== "donut");
    }
    return base;
  }, [mode, groupSeriesCount]);

  React.useEffect(() => {
    if (!availableChartTypes.includes(chartType)) {
      setChartType(availableChartTypes[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, availableChartTypes.join(",")]);

  // ---- Dữ liệu biểu đồ ----
  const seriesDefs: { id: string; label: string }[] =
    mode === "group"
      ? [
          ...selectedValueColumns.map((c) => ({ id: c.id, label: c.label })),
          ...(effectiveIncludeCount
            ? [{ id: "count", label: "Số lượng dòng" }]
            : []),
        ]
      : mode === "series"
        ? selectedSeriesColumns.map((c) => ({ id: c.id, label: c.label }))
        : mode === "time"
          ? [
              ...selectedTimeValueColumns.map((c) => ({
                id: c.id,
                label: c.label,
              })),
              ...(effectiveTimeIncludeCount
                ? [{ id: "count", label: "Số lượng dòng" }]
                : []),
            ]
          : [];

  const chartData:
    | GroupedValueDatum[]
    | TimeSeriesDatum[]
    | Record<string, unknown>[] =
    mode === "group" && groupColumn
      ? buildGroupedValueData(
          rows,
          groupColumn.column,
          selectedValueColumns,
          aggregation,
          effectiveIncludeCount,
          topN,
        )
      : mode === "series"
        ? buildSeriesData(
            rows,
            selectedSeriesColumns,
            seriesLabelColumn?.column,
          )
        : mode === "time" && timeColumn
          ? buildTimeSeriesData(
              rows,
              timeColumn.column,
              timeGranularity,
              selectedTimeValueColumns,
              timeAggregation,
              effectiveTimeIncludeCount,
            )
          : [];

  // Map "id cột -> hàm format" — dùng cho nhãn giá trị, tooltip và trục,
  // để khớp đúng định dạng đã khai báo ở meta.summary.format của cột đó.
  const valueFormatters: Record<string, (value: number) => string> =
    React.useMemo(() => {
      const map: Record<string, (value: number) => string> = {};
      if (mode === "group") {
        selectedValueColumns.forEach((c) => {
          map[c.id] = getChartValueFormatter(c);
        });
      } else if (mode === "series") {
        selectedSeriesColumns.forEach((c) => {
          map[c.id] = getChartValueFormatter(c);
        });
      } else if (mode === "time") {
        selectedTimeValueColumns.forEach((c) => {
          map[c.id] = getChartValueFormatter(c);
        });
      }
      map.count = (value: number) => value.toLocaleString("vi-VN");
      return map;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode, valueColumnIds, seriesColumnIds, timeValueColumnIds]);

  const scatterPoints =
    mode === "scatter" && xColumn && yColumn
      ? buildScatterData(
          rows,
          xColumn.column,
          yColumn.column,
          colorColumn?.column,
        )
      : [];
  const scatterGroups = groupScatterByColor(scatterPoints);

  const hasData =
    mode === "scatter"
      ? scatterPoints.length > 0
      : chartData.length > 0 && seriesDefs.length > 0;
  const modeDisabled = (m: ComparisonMode) =>
    (m === "group" && !canGroup) ||
    (m === "series" && !canSeries) ||
    (m === "scatter" && !canScatter) ||
    (m === "time" && !canTime);

  const toggleInList = (
    list: string[],
    setList: (v: string[]) => void,
    id: string,
  ) => {
    setList(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  };

  async function getChartPng(): Promise<string | null> {
    const svg = chartHostRef.current?.querySelector("svg");
    if (!svg) return null;
    return svgElementToPngDataUrl(
      svg as SVGSVGElement,
      2,
      "#ffffff",
      chartTitle.trim() || undefined,
      chartSubtitle.trim() || undefined,
    );
  }

  function getExportColumns(): ColumnDef<TData, any>[] {
    if (mode === "group" && groupColumn) {
      return [groupColumn.column, ...selectedValueColumns.map((c) => c.column)];
    }
    if (mode === "series") {
      return [
        ...(seriesLabelColumn ? [seriesLabelColumn.column] : []),
        ...selectedSeriesColumns.map((c) => c.column),
      ];
    }
    if (mode === "scatter") {
      return [
        ...(xColumn ? [xColumn.column] : []),
        ...(yColumn ? [yColumn.column] : []),
        ...(colorColumn ? [colorColumn.column] : []),
      ];
    }
    if (mode === "time" && timeColumn) {
      return [
        timeColumn.column,
        ...selectedTimeValueColumns.map((c) => c.column),
      ];
    }
    return [];
  }

  async function handleExportPngOnly() {
    setExporting("png");
    try {
      const dataUrl = await getChartPng();
      if (dataUrl) {
        downloadDataUrl(
          dataUrl,
          `${exportFilename.replace(/\.[^./\\]+$/, "")}-chart.png`,
        );
      }
    } finally {
      setExporting(null);
    }
  }

  async function handleExportWithData() {
    setExporting("doc");
    try {
      const dataUrl = await getChartPng();
      if (!dataUrl) return;
      exportChartWithData(
        getExportColumns(),
        rows,
        dataUrl,
        `${exportFilename.replace(/\.[^./\\]+$/, "")}-chart.doc`,
        columnVisibility,
        exportTitle,
      );
    } finally {
      setExporting(null);
    }
  }

  async function handleExportWithDataPdf() {
    setExporting("pdf");
    try {
      const dataUrl = await getChartPng();
      if (!dataUrl) return;
      await exportChartWithDataPdf(
        getExportColumns(),
        rows,
        dataUrl,
        `${exportFilename.replace(/\.[^./\\]+$/, "")}-chart.pdf`,
        columnVisibility,
        exportTitle,
      );
    } finally {
      setExporting(null);
    }
  }

  async function handleCopyToClipboard() {
    setExporting("copy");
    try {
      const dataUrl = await getChartPng();
      if (!dataUrl) return;
      const ok = await copyPngToClipboard(dataUrl);
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } finally {
      setExporting(null);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[85vh] w-[min(96vw,1040px)] max-w-none flex-col gap-0 overflow-hidden p-0">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Biểu đồ dữ liệu
          </DialogTitle>
          <DialogDescription>
            So sánh giá trị giữa các nhóm, so sánh nhiều cột theo dòng, hoặc xem
            tương quan giữa 2 giá trị số.
          </DialogDescription>
        </DialogHeader>

        {/* ---- Chọn cách so sánh ---- */}
        <div className="flex gap-1.5 border-b bg-muted/30 px-6 py-2.5">
          {(Object.keys(COMPARISON_MODE_LABEL) as ComparisonMode[]).map((m) => {
            const disabled = modeDisabled(m);
            return (
              <Button
                key={m}
                type="button"
                size="sm"
                variant={mode === m ? "default" : "ghost"}
                disabled={disabled}
                onClick={() => setMode(m)}
                className="h-8"
              >
                {COMPARISON_MODE_LABEL[m]}
              </Button>
            );
          })}
        </div>

        <div className="grid flex-1 grid-cols-1 overflow-hidden md:grid-cols-[260px_1fr]">
          {/* ---------------- Sidebar theo chế độ ---------------- */}
          <ScrollArea className="h-64 border-b md:h-auto md:border-b-0 md:border-r">
            <div className="space-y-4 p-4">
              {mode === "group" && (
                <>
                  <div>
                    <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Nhóm theo
                    </Label>
                    <Select
                      value={groupColumnId}
                      onValueChange={setGroupColumnId}
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue placeholder="Chọn cột..." />
                      </SelectTrigger>
                      <SelectContent>
                        {categoricalColumns.map((c) => (
                          <SelectItem key={c.id} value={c.id}>
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Giá trị so sánh
                    </p>
                    <div className="space-y-0.5 rounded-md border p-1">
                      <label className="flex cursor-pointer items-center gap-2 rounded px-1.5 py-1 text-sm hover:bg-accent">
                        <Checkbox
                          checked={effectiveIncludeCount}
                          disabled={valueColumnIds.length === 0}
                          onCheckedChange={() => setIncludeCount((v) => !v)}
                        />
                        <span className="flex-1">Số lượng dòng</span>
                      </label>
                      {numericColumns.map((c) => (
                        <label
                          key={c.id}
                          className="flex cursor-pointer items-center gap-2 rounded px-1.5 py-1 text-sm hover:bg-accent"
                        >
                          <Checkbox
                            checked={valueColumnIds.includes(c.id)}
                            onCheckedChange={() =>
                              toggleInList(
                                valueColumnIds,
                                setValueColumnIds,
                                c.id,
                              )
                            }
                          />
                          <span className="flex-1 truncate">{c.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {selectedValueColumns.length > 0 && (
                    <div>
                      <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Cách tính
                      </Label>
                      <Select
                        value={aggregation}
                        onValueChange={(v) =>
                          setAggregation(v as AggregationType)
                        }
                      >
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {(
                            Object.keys(AGGREGATION_LABEL) as AggregationType[]
                          ).map((a) => (
                            <SelectItem key={a} value={a}>
                              {AGGREGATION_LABEL[a]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div>
                    <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Số nhóm hiển thị
                    </Label>
                    <Select
                      value={String(topN)}
                      onValueChange={(v) =>
                        setTopN(v === "all" ? "all" : (Number(v) as TopNLimit))
                      }
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {TOP_N_OPTIONS.map((option) => (
                          <SelectItem key={option} value={String(option)}>
                            {TOP_N_LABEL[option]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Các nhóm còn lại được gộp vào "Khác"
                    </p>
                  </div>
                </>
              )}

              {mode === "series" && (
                <>
                  <div>
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Cột so sánh
                    </p>
                    <div className="space-y-0.5 rounded-md border p-1">
                      {numericColumns.map((c) => (
                        <label
                          key={c.id}
                          className="flex cursor-pointer items-center gap-2 rounded px-1.5 py-1 text-sm hover:bg-accent"
                        >
                          <Checkbox
                            checked={seriesColumnIds.includes(c.id)}
                            onCheckedChange={() =>
                              toggleInList(
                                seriesColumnIds,
                                setSeriesColumnIds,
                                c.id,
                              )
                            }
                          />
                          <span className="flex-1 truncate">{c.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Nhãn trục ngang
                    </Label>
                    <Select
                      value={seriesLabelColumnId}
                      onValueChange={setSeriesLabelColumnId}
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={NONE}>Theo thứ tự dòng</SelectItem>
                        {categoricalColumns.map((c) => (
                          <SelectItem key={c.id} value={c.id}>
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {mode === "scatter" && (
                <>
                  <div>
                    <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Trục X
                    </Label>
                    <Select value={xColumnId} onValueChange={setXColumnId}>
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {numericColumns.map((c) => (
                          <SelectItem key={c.id} value={c.id}>
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Trục Y
                    </Label>
                    <Select value={yColumnId} onValueChange={setYColumnId}>
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {numericColumns.map((c) => (
                          <SelectItem key={c.id} value={c.id}>
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {categoricalColumns.length > 0 && (
                    <div>
                      <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Tô màu theo
                      </Label>
                      <Select
                        value={colorColumnId}
                        onValueChange={setColorColumnId}
                      >
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={NONE}>Không</SelectItem>
                          {categoricalColumns.map((c) => (
                            <SelectItem key={c.id} value={c.id}>
                              {c.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </>
              )}

              {mode === "time" && (
                <>
                  <div>
                    <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Cột ngày
                    </Label>
                    <Select
                      value={timeColumnId}
                      onValueChange={setTimeColumnId}
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue placeholder="Chọn cột..." />
                      </SelectTrigger>
                      <SelectContent>
                        {dateColumns.map((c) => (
                          <SelectItem key={c.id} value={c.id}>
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Gộp theo
                    </Label>
                    <Select
                      value={timeGranularity}
                      onValueChange={(v) =>
                        setTimeGranularity(v as TimeGranularity)
                      }
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {(
                          Object.keys(
                            TIME_GRANULARITY_LABEL,
                          ) as TimeGranularity[]
                        ).map((g) => (
                          <SelectItem key={g} value={g}>
                            {TIME_GRANULARITY_LABEL[g]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Giá trị theo dõi
                    </p>
                    <div className="space-y-0.5 rounded-md border p-1">
                      <label className="flex cursor-pointer items-center gap-2 rounded px-1.5 py-1 text-sm hover:bg-accent">
                        <Checkbox
                          checked={effectiveTimeIncludeCount}
                          disabled={timeValueColumnIds.length === 0}
                          onCheckedChange={() => setTimeIncludeCount((v) => !v)}
                        />
                        <span className="flex-1">Số lượng dòng</span>
                      </label>
                      {numericColumns.map((c) => (
                        <label
                          key={c.id}
                          className="flex cursor-pointer items-center gap-2 rounded px-1.5 py-1 text-sm hover:bg-accent"
                        >
                          <Checkbox
                            checked={timeValueColumnIds.includes(c.id)}
                            onCheckedChange={() =>
                              toggleInList(
                                timeValueColumnIds,
                                setTimeValueColumnIds,
                                c.id,
                              )
                            }
                          />
                          <span className="flex-1 truncate">{c.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {selectedTimeValueColumns.length > 0 && (
                    <div>
                      <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Cách tính
                      </Label>
                      <Select
                        value={timeAggregation}
                        onValueChange={(v) =>
                          setTimeAggregation(v as AggregationType)
                        }
                      >
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {(
                            Object.keys(AGGREGATION_LABEL) as AggregationType[]
                          ).map((a) => (
                            <SelectItem key={a} value={a}>
                              {AGGREGATION_LABEL[a]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </>
              )}

              {mode !== "scatter" && (
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Kiểu biểu đồ
                  </p>
                  <div className="grid grid-cols-3 gap-1.5">
                    {availableChartTypes.map((type) => {
                      const Icon = CHART_TYPE_ICON[type];
                      return (
                        <Button
                          key={type}
                          type="button"
                          size="sm"
                          variant={chartType === type ? "default" : "outline"}
                          className="h-auto flex-col gap-1 py-2 text-[11px]"
                          onClick={() => setChartType(type)}
                        >
                          <Icon className="h-4 w-4" />
                          {CHART_TYPE_LABEL[type]}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ---- Tuỳ chỉnh hiển thị: áp dụng cho mọi chế độ ---- */}
              <div className="space-y-3 border-t pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Tuỳ chỉnh hiển thị
                </p>

                <div className="space-y-2">
                  <Label className="block text-xs text-muted-foreground">
                    Tiêu đề biểu đồ
                  </Label>
                  <Input
                    value={chartTitle}
                    onChange={(e) => setChartTitle(e.target.value)}
                    placeholder="Vd: Doanh thu theo khu vực"
                    className="h-8"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="block text-xs text-muted-foreground">
                    Phụ đề
                  </Label>
                  <Input
                    value={chartSubtitle}
                    onChange={(e) => setChartSubtitle(e.target.value)}
                    placeholder="Vd: Quý 3/2026"
                    className="h-8"
                  />
                </div>

                <label
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded px-1.5 py-1 text-sm hover:bg-accent",
                    mode === "scatter" && "cursor-not-allowed opacity-50",
                  )}
                >
                  <Checkbox
                    checked={showValueLabels}
                    disabled={mode === "scatter"}
                    onCheckedChange={() => setShowValueLabels((v) => !v)}
                  />
                  <span className="flex-1">Hiện nhãn giá trị trên biểu đồ</span>
                </label>

                <label
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded px-1.5 py-1 text-sm hover:bg-accent",
                    (chartType === "pie" ||
                      chartType === "donut" ||
                      chartType === "radar") &&
                      mode !== "scatter" &&
                      "cursor-not-allowed opacity-50",
                  )}
                >
                  <Checkbox
                    checked={logScale}
                    disabled={
                      mode !== "scatter" &&
                      (chartType === "pie" ||
                        chartType === "donut" ||
                        chartType === "radar")
                    }
                    onCheckedChange={() => setLogScale((v) => !v)}
                  />
                  <span className="flex-1">
                    Trục log (khi dữ liệu chênh lệch lớn)
                  </span>
                </label>

                <div className="space-y-2">
                  <Label className="block text-xs text-muted-foreground">
                    Bảng màu
                  </Label>
                  <Select
                    value={paletteId}
                    onValueChange={(v) => setPaletteId(v as ChartPaletteId)}
                  >
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(
                        Object.keys(CHART_PALETTE_LABEL) as ChartPaletteId[]
                      ).map((id) => (
                        <SelectItem key={id} value={id}>
                          <span className="flex items-center gap-2">
                            <span className="flex gap-0.5">
                              {CHART_PALETTES[id].slice(0, 4).map((color) => (
                                <span
                                  key={color}
                                  className="h-3 w-3 rounded-full"
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </span>
                            {CHART_PALETTE_LABEL[id]}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <label className="flex cursor-pointer items-center gap-2 rounded px-1.5 py-1 text-sm hover:bg-accent">
                  <Checkbox
                    checked={showLegend}
                    onCheckedChange={() => setShowLegend((v) => !v)}
                  />
                  <span className="flex-1">Hiện chú giải</span>
                </label>

                {showLegend && (
                  <div className="space-y-2">
                    <Label className="block text-xs text-muted-foreground">
                      Vị trí chú giải
                    </Label>
                    <Select
                      value={legendPosition}
                      onValueChange={(v) =>
                        setLegendPosition(v as LegendPosition)
                      }
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {(
                          Object.keys(LEGEND_POSITION_LABEL) as LegendPosition[]
                        )
                          .filter((p) => p !== "none")
                          .map((p) => (
                            <SelectItem key={p} value={p}>
                              {LEGEND_POSITION_LABEL[p]}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </div>
          </ScrollArea>

          {/* ---------------- Preview ---------------- */}
          <div className="flex flex-col overflow-hidden">
            <div ref={chartHostRef} className="min-h-[320px] flex-1 p-4">
              {(chartTitle.trim() || chartSubtitle.trim()) && (
                <div className="mb-2">
                  {chartTitle.trim() && (
                    <p className="text-base font-semibold text-foreground">
                      {chartTitle}
                    </p>
                  )}
                  {chartSubtitle.trim() && (
                    <p className="text-xs text-muted-foreground">
                      {chartSubtitle}
                    </p>
                  )}
                </div>
              )}
              {!hasData ? (
                <div className="flex h-full min-h-[300px] items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
                  {mode === "scatter"
                    ? "Chọn trục X và trục Y để xem biểu đồ"
                    : mode === "time"
                      ? "Chọn cột ngày và ít nhất 1 giá trị để xem biểu đồ"
                      : "Chọn ít nhất 1 giá trị để xem biểu đồ"}
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={360}>
                  {mode === "scatter"
                    ? renderScatterChart(
                        scatterGroups,
                        xColumn?.label,
                        yColumn?.label,
                        {
                          palette,
                          showLegend,
                          legendPosition,
                          logScale,
                          formatX: xColumn
                            ? getChartValueFormatter(xColumn)
                            : undefined,
                          formatY: yColumn
                            ? getChartValueFormatter(yColumn)
                            : undefined,
                        },
                      )
                    : renderChart(chartType, chartData, seriesDefs, {
                        palette,
                        showLegend,
                        legendPosition,
                        showValueLabels,
                        logScale,
                        formatters: valueFormatters,
                      })}
                </ResponsiveContainer>
              )}
            </div>
            <p className="border-t px-4 py-2 text-xs text-muted-foreground">
              {mode === "group" &&
                `${chartData.length} nhóm · ${seriesDefs.length} giá trị so sánh (${AGGREGATION_LABEL[aggregation]}) · ${rows.length} dòng`}
              {mode === "series" &&
                `${seriesDefs.length} cột được so sánh · ${chartData.length} dòng hiển thị${rows.length > chartData.length ? ` (trong tổng ${rows.length})` : ""}`}
              {mode === "scatter" &&
                `${scatterPoints.length} điểm dữ liệu${scatterGroups.length > 1 ? ` · ${scatterGroups.length} nhóm màu` : ""}`}
              {mode === "time" &&
                `${chartData.length} khoảng thời gian (${TIME_GRANULARITY_LABEL[timeGranularity].toLowerCase()}) · ${seriesDefs.length} giá trị so sánh · ${rows.length} dòng`}
            </p>
            {activeFilterSummary.length > 0 && (
              <p className="border-t px-4 py-1.5 text-xs text-muted-foreground">
                Đang áp dụng filter: {activeFilterSummary.join(" · ")}
              </p>
            )}
          </div>
        </div>

        <DialogFooter className="gap-2 border-t px-6 py-4 sm:justify-between">
          <p className="hidden text-xs text-muted-foreground sm:block">
            Ảnh biểu đồ được xuất ở độ phân giải gấp đôi để nét khi in.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={!hasData || exporting !== null}
              onClick={handleCopyToClipboard}
            >
              {exporting === "copy" ? (
                <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
              ) : copied ? (
                <Check className="mr-1.5 h-3.5 w-3.5" />
              ) : (
                <Copy className="mr-1.5 h-3.5 w-3.5" />
              )}
              {copied ? "Đã copy!" : "Copy biểu đồ"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={!hasData || exporting !== null}
              onClick={handleExportPngOnly}
            >
              {exporting === "png" ? (
                <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
              ) : (
                <ImageDown className="mr-1.5 h-3.5 w-3.5" />
              )}
              Chỉ xuất biểu đồ (PNG)
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  disabled={!hasData || exporting !== null}
                  className="gap-1.5"
                >
                  {exporting === "doc" || exporting === "pdf" ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Download className="h-3.5 w-3.5" />
                  )}
                  Xuất dữ liệu + biểu đồ
                  <ChevronDown className="h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleExportWithData}>
                  Word (.doc)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleExportWithDataPdf}>
                  PDF (.pdf)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/* ------------------------------------------------------------------ */
/* Vẽ biểu đồ cho chế độ "group" (giá trị theo nhóm) và "series"      */
/* (cột theo dòng) — cả 2 dùng chung 1 dạng dữ liệu: mảng bản ghi có   */
/* field "label" + 1 field cho mỗi phần tử trong seriesDefs.           */
/* ------------------------------------------------------------------ */

interface ChartRenderOptions {
  palette: string[];
  showLegend: boolean;
  legendPosition: LegendPosition;
  showValueLabels: boolean;
  /** Trục Y dùng thang log — cho biểu đồ có chênh lệch giá trị rất lớn */
  logScale?: boolean;
  /** Map "id cột -> hàm format" — tái dùng meta.summary.format của cột */
  formatters: Record<string, (value: number) => string>;
}

/**
 * Chuyển hàm format `(value: number) => string` của mình thành đúng kiểu
 * `LabelFormatter` mà recharts <LabelList> yêu cầu — tham số đầu vào ở đó
 * là `RenderableText` (có thể là string/number/undefined), không phải
 * number thuần, nên cần ép kiểu và xử lý an toàn trước khi format.
 */
function toLabelListFormatter(
  fmt?: (value: number) => string,
): ((label: any) => string) | undefined {
  if (!fmt) return undefined;
  return (label: any): string => {
    const n = Number(label);
    return Number.isFinite(n) ? fmt(n) : String(label ?? "");
  };
}

/** Props recharts <Legend> tương ứng với 1 vị trí — trả về null nếu ẩn */
function legendLayoutProps(position: LegendPosition) {
  switch (position) {
    case "top":
      return {
        verticalAlign: "top" as const,
        align: "center" as const,
        layout: "horizontal" as const,
      };
    case "bottom":
      return {
        verticalAlign: "bottom" as const,
        align: "center" as const,
        layout: "horizontal" as const,
      };
    case "left":
      return {
        verticalAlign: "middle" as const,
        align: "left" as const,
        layout: "vertical" as const,
      };
    case "right":
      return {
        verticalAlign: "middle" as const,
        align: "right" as const,
        layout: "vertical" as const,
      };
    case "none":
      return null;
  }
}

function renderChart(
  type: ChartType,
  data: Record<string, unknown>[],
  seriesDefs: { id: string; label: string }[],
  options: ChartRenderOptions,
) {
  const {
    palette,
    showLegend,
    legendPosition,
    showValueLabels,
    logScale,
    formatters,
  } = options;
  const legendProps =
    showLegend && legendPosition !== "none"
      ? legendLayoutProps(legendPosition)
      : null;
  const yAxisScaleProps = logScale
    ? { scale: "log" as const, domain: [1, "auto"] as [number, "auto"] }
    : {};
  const tooltipFormatter = (value: any, name: any, entry: any) => {
    const key = entry?.dataKey as string | undefined;
    const fmt = key ? formatters[key] : undefined;
    return [fmt ? fmt(Number(value)) : value, name];
  };
  const singleSeriesFormatter =
    seriesDefs.length === 1 ? formatters[seriesDefs[0].id] : undefined;

  if (type === "pie" || type === "donut") {
    const seriesId = seriesDefs[0]?.id;
    const fmt = formatters[seriesId ?? ""];
    const pieData = data.map((d) => ({
      label: String(d.label ?? ""),
      value: Number(d[seriesId]) || 0,
    }));
    return (
      <PieChart>
        <Tooltip
          formatter={(value: any) => (fmt ? fmt(Number(value)) : value)}
        />
        {legendProps && (
          <Legend wrapperStyle={{ fontSize: 12 }} {...legendProps} />
        )}
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="label"
          innerRadius={type === "donut" ? 70 : 0}
          outerRadius={120}
          paddingAngle={pieData.length > 1 ? 2 : 0}
          label={
            showValueLabels
              ? (entry: any) =>
                  fmt ? fmt(Number(entry.value)) : String(entry.value)
              : false
          }
        >
          {pieData.map((_, i) => (
            <Cell key={i} fill={palette[i % palette.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }

  if (type === "line") {
    return (
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis
          dataKey="label"
          tick={{ fontSize: 11 }}
          interval="preserveStartEnd"
        />
        <YAxis
          tick={{ fontSize: 11 }}
          tickFormatter={singleSeriesFormatter}
          {...yAxisScaleProps}
        />
        <Tooltip formatter={tooltipFormatter} />
        {legendProps && (
          <Legend wrapperStyle={{ fontSize: 12 }} {...legendProps} />
        )}
        {seriesDefs.map((s, i) => (
          <Line
            key={s.id}
            type="monotone"
            dataKey={s.id}
            name={s.label}
            stroke={palette[i % palette.length]}
            strokeWidth={2}
            dot={false}
          >
            {showValueLabels && (
              <LabelList
                dataKey={s.id}
                position="top"
                style={{ fontSize: 10 }}
                formatter={toLabelListFormatter(formatters[s.id]) as any}
              />
            )}
          </Line>
        ))}
      </LineChart>
    );
  }

  if (type === "area") {
    return (
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis
          dataKey="label"
          tick={{ fontSize: 11 }}
          interval="preserveStartEnd"
        />
        <YAxis
          tick={{ fontSize: 11 }}
          tickFormatter={singleSeriesFormatter}
          {...yAxisScaleProps}
        />
        <Tooltip formatter={tooltipFormatter} />
        {legendProps && (
          <Legend wrapperStyle={{ fontSize: 12 }} {...legendProps} />
        )}
        {seriesDefs.map((s, i) => (
          <Area
            key={s.id}
            type="monotone"
            dataKey={s.id}
            name={s.label}
            stroke={palette[i % palette.length]}
            fill={palette[i % palette.length]}
            fillOpacity={0.25}
          >
            {showValueLabels && (
              <LabelList
                dataKey={s.id}
                position="top"
                style={{ fontSize: 10 }}
                formatter={toLabelListFormatter(formatters[s.id]) as any}
              />
            )}
          </Area>
        ))}
      </AreaChart>
    );
  }

  if (type === "radar") {
    return (
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="label" tick={{ fontSize: 11 }} />
        <PolarRadiusAxis tick={{ fontSize: 10 }} />
        <Tooltip formatter={tooltipFormatter} />
        {legendProps && (
          <Legend wrapperStyle={{ fontSize: 12 }} {...legendProps} />
        )}
        {seriesDefs.map((s, i) => (
          <Radar
            key={s.id}
            dataKey={s.id}
            name={s.label}
            stroke={palette[i % palette.length]}
            fill={palette[i % palette.length]}
            fillOpacity={0.25}
          >
            {showValueLabels && (
              <LabelList
                dataKey={s.id}
                style={{ fontSize: 10 }}
                formatter={toLabelListFormatter(formatters[s.id]) as any}
              />
            )}
          </Radar>
        ))}
      </RadarChart>
    );
  }

  // bar / stackedBar
  return (
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
      <XAxis
        dataKey="label"
        tick={{ fontSize: 11 }}
        interval="preserveStartEnd"
      />
      <YAxis
        tick={{ fontSize: 11 }}
        tickFormatter={singleSeriesFormatter}
        {...yAxisScaleProps}
      />
      <Tooltip formatter={tooltipFormatter} />
      {legendProps && (
        <Legend wrapperStyle={{ fontSize: 12 }} {...legendProps} />
      )}
      {seriesDefs.map((s, i) => (
        <Bar
          key={s.id}
          dataKey={s.id}
          name={s.label}
          fill={palette[i % palette.length]}
          stackId={type === "stackedBar" ? "stack" : undefined}
          radius={type === "stackedBar" ? undefined : [3, 3, 0, 0]}
        >
          {showValueLabels && (
            <LabelList
              dataKey={s.id}
              position={type === "stackedBar" ? "inside" : "top"}
              style={{
                fontSize: 10,
                fill: type === "stackedBar" ? "#ffffff" : "#334155",
              }}
              formatter={toLabelListFormatter(formatters[s.id]) as any}
            />
          )}
        </Bar>
      ))}
    </BarChart>
  );
}

/* ------------------------------------------------------------------ */
/* Vẽ biểu đồ cho chế độ "scatter" (tương quan giá trị với giá trị)   */
/* ------------------------------------------------------------------ */

interface ScatterRenderOptions {
  palette: string[];
  showLegend: boolean;
  legendPosition: LegendPosition;
  /** Áp dụng thang log cho cả trục X và Y — khi giá trị chênh lệch lớn */
  logScale?: boolean;
  formatX?: (value: number) => string;
  formatY?: (value: number) => string;
}

function renderScatterChart(
  groups: { key: string; points: { x: number; y: number; label: string }[] }[],
  xLabel: string | undefined,
  yLabel: string | undefined,
  options: ScatterRenderOptions,
) {
  const { palette, showLegend, legendPosition, logScale, formatX, formatY } =
    options;
  const legendProps =
    showLegend && legendPosition !== "none"
      ? legendLayoutProps(legendPosition)
      : null;
  const scatterAxisScaleProps = logScale
    ? { scale: "log" as const, domain: [1, "auto"] as [number, "auto"] }
    : {};

  return (
    <ScatterChart>
      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
      <XAxis
        type="number"
        dataKey="x"
        name={xLabel ?? "X"}
        tick={{ fontSize: 11 }}
        tickFormatter={formatX}
        label={{
          value: xLabel,
          position: "insideBottom",
          offset: -4,
          fontSize: 11,
        }}
        {...scatterAxisScaleProps}
      />
      <YAxis
        type="number"
        dataKey="y"
        name={yLabel ?? "Y"}
        tick={{ fontSize: 11 }}
        tickFormatter={formatY}
        label={{
          value: yLabel,
          angle: -90,
          position: "insideLeft",
          fontSize: 11,
        }}
        {...scatterAxisScaleProps}
      />
      <Tooltip
        cursor={{ strokeDasharray: "3 3" }}
        formatter={(value: any, name: any) => {
          const fmt =
            name === xLabel ? formatX : name === yLabel ? formatY : undefined;
          return [fmt ? fmt(Number(value)) : value, name];
        }}
      />
      {legendProps && groups.length > 1 && (
        <Legend wrapperStyle={{ fontSize: 12 }} {...legendProps} />
      )}
      {groups.map((g, i) => (
        <Scatter
          key={g.key}
          name={g.key}
          data={g.points}
          fill={palette[i % palette.length]}
        />
      ))}
    </ScatterChart>
  );
}
