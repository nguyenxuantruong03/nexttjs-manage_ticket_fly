export const PRESET_COLORS: Array<{ label: string; value: string }> = [
  { label: "Mặc định", value: "currentColor" },
  { label: "Đen", value: "#171717" },
  { label: "Xám đậm", value: "#404040" },
  { label: "Xám", value: "#737373" },
  { label: "Trắng", value: "#ffffff" },
  { label: "Đỏ", value: "#ef4444" },
  { label: "Cam", value: "#f97316" },
  { label: "Vàng", value: "#eab308" },
  { label: "Xanh lá", value: "#22c55e" },
  { label: "Xanh ngọc", value: "#14b8a6" },
  { label: "Xanh dương", value: "#2563eb" },
  { label: "Xanh navy", value: "#1e3a8a" },
  { label: "Tím", value: "#8b5cf6" },
  { label: "Hồng", value: "#ec4899" },
];

export const PRESET_FILLS: Array<{ label: string; value: string }> = [
  { label: "Không tô", value: "none" },
  { label: "Theo màu icon", value: "currentColor" },
  ...PRESET_COLORS.filter((preset) => preset.value !== "currentColor"),
];

export const GRID_COLUMNS = 6;
export const ROW_HEIGHT = 56;
export const VIEWPORT_HEIGHT = 300;
export const OVERSCAN_ROWS = 3;
export const SEARCH_DEBOUNCE_MS = 200;
