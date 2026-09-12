import { RotateCcw, Settings2, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { IconRenderer } from "./icon-renderer";
import {
  ICON_ANIMATIONS,
  ICON_ANIMATION_DIRECTIONS,
  ICON_ANIMATION_ITERATIONS,
  ICON_ANIMATION_LABELS,
  ICON_ANIMATION_TIMING_FUNCTIONS,
  IconAnimation,
  type IconAnimationDirection,
  type IconAnimationIteration,
  type IconAnimationTimingFunction,
} from "./icon-types";
import { PRESET_COLORS, PRESET_FILLS } from "./icon-picker-constants";
import type { IconPickerCustomStepProps } from "./icon-picker-types";
import { cn } from "@/lib/utils";

export function IconPickerCustomStep({
  value,
  selectedConfig,
  customEnabled,
  animation,
  hasAnimationCustom,
  updateConfig,
  removeProperty,
  onChangeIcon,
  onClear,
  onResetCustom,
}: IconPickerCustomStepProps) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-background shadow-sm">
        <div className="flex items-center justify-between gap-3 border-b p-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border">
              <IconRenderer value={value} size={22} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                {selectedConfig.name}
              </p>

              <p className="text-xs text-muted-foreground">
                {customEnabled ? "Đã tuỳ chỉnh" : "Icon mặc định"}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {/* ĐỔI ICON */}

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onChangeIcon}
            >
              Đổi icon
            </Button>

            {/* CLEAR */}

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onClear}
              title="Bỏ chọn icon"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      {/* ============================================= */}
      {/* CUSTOM CONTENT                                 */}
      {/* ============================================= */}

      <div className="p-3 mt-16">
        {/* =========================================== */}
        {/* RESET                                       */}
        {/* =========================================== */}

        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Settings2 className="h-4 w-4 text-muted-foreground" />

              <p className="text-sm font-medium">Tuỳ chỉnh icon</p>
            </div>

            <p className="mt-1 text-xs text-muted-foreground">
              Kích thước, màu, stroke, animation...
            </p>
          </div>

          {customEnabled && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onResetCustom}
            >
              <RotateCcw className="mr-1 h-3.5 w-3.5" />
              Reset
            </Button>
          )}
        </div>

        <div className="grid gap-4">
          {/* ========================================= */}
          {/* SIZE                                      */}
          {/* ========================================= */}

          <div className="grid gap-2">
            <Label htmlFor="icon-size">Size</Label>

            <Input
              id="icon-size"
              type="number"
              min={1}
              max={200}
              value={selectedConfig.size ?? ""}
              placeholder="20"
              onChange={(event) => {
                const raw = event.target.value;

                if (!raw) {
                  removeProperty("size");

                  return;
                }

                updateConfig({
                  size: Number(raw),
                });
              }}
            />
          </div>

          {/* ========================================= */}
          {/* STROKE WIDTH                              */}
          {/* ========================================= */}

          <div className="grid gap-2">
            <Label htmlFor="icon-stroke">Stroke width</Label>

            <Input
              id="icon-stroke"
              type="number"
              min={0}
              max={10}
              step={0.5}
              value={selectedConfig.strokeWidth ?? ""}
              placeholder="2"
              onChange={(event) => {
                const raw = event.target.value;

                if (!raw) {
                  removeProperty("strokeWidth");

                  return;
                }

                updateConfig({
                  strokeWidth: Number(raw),
                });
              }}
            />
          </div>

          {/* ========================================= */}
          {/* COLOR                                     */}
          {/* ========================================= */}

          <div className="grid gap-2">
            <Label htmlFor="icon-color">Màu icon</Label>

            <p className="text-xs text-muted-foreground">
              Chọn 1 màu có sẵn bên dưới, hoặc tự nhập mã màu nếu cần màu chính
              xác riêng.
            </p>

            {/* ===================================== */}
            {/* BẢNG MÀU CÓ SẴN - bấm chọn theo tên   */}
            {/* ===================================== */}

            <div className="grid grid-cols-7 gap-2 rounded-md border p-2">
              {PRESET_COLORS.map((preset) => {
                const isSelected =
                  (selectedConfig.color ?? "currentColor") === preset.value;

                return (
                  <button
                    key={preset.value}
                    type="button"
                    title={preset.label}
                    aria-label={preset.label}
                    onClick={() => {
                      if (preset.value === "currentColor") {
                        removeProperty("color");
                        return;
                      }

                      updateConfig({
                        color: preset.value,
                      });
                    }}
                    className={cn(
                      "flex flex-col items-center gap-1 rounded-md p-1 text-center hover:bg-accent",
                      isSelected && "bg-accent",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full border",
                        preset.value === "currentColor" &&
                          "bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:8px_8px]",
                      )}
                      style={
                        preset.value === "currentColor"
                          ? undefined
                          : { backgroundColor: preset.value }
                      }
                    >
                      {isSelected && (
                        <Check
                          className={cn(
                            "h-3.5 w-3.5",
                            preset.value === "#ffffff" ||
                              preset.value === "currentColor"
                              ? "text-black"
                              : "text-white",
                          )}
                        />
                      )}
                    </span>

                    <span className="w-full truncate text-[10px] leading-tight text-muted-foreground">
                      {preset.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ===================================== */}
            {/* NÂNG CAO - tự nhập mã hex / bảng chọn  */}
            {/* dành cho ai cần màu chính xác riêng    */}
            {/* ===================================== */}

            <details className="group rounded-md border">
              <summary className="cursor-pointer select-none px-3 py-2 text-xs font-medium text-muted-foreground">
                Nhập màu khác (nâng cao)
              </summary>

              <div className="flex gap-2 border-t p-3">
                <Input
                  id="icon-color"
                  value={selectedConfig.color ?? ""}
                  placeholder="Ví dụ: #2563eb"
                  onChange={(event) => {
                    const raw = event.target.value;

                    if (!raw) {
                      removeProperty("color");

                      return;
                    }

                    updateConfig({
                      color: raw,
                    });
                  }}
                />

                <input
                  type="color"
                  value={
                    typeof selectedConfig.color === "string" &&
                    selectedConfig.color.startsWith("#")
                      ? selectedConfig.color
                      : "#000000"
                  }
                  onChange={(event) => {
                    updateConfig({
                      color: event.target.value,
                    });
                  }}
                  className="h-10 w-10 cursor-pointer rounded-md border p-1"
                  title="Bảng chọn màu chi tiết"
                />
              </div>
            </details>
          </div>

          {/* ========================================= */}
          {/* FILL                                      */}
          {/* ========================================= */}

          <div className="grid gap-2">
            <Label htmlFor="icon-fill">Màu tô (Fill)</Label>

            <p className="text-xs text-muted-foreground">
              Tô đầy bên trong icon. Mặc định là "Không tô" (chỉ có viền ngoài).
            </p>

            {/* ===================================== */}
            {/* BẢNG MÀU TÔ CÓ SẴN - bấm chọn theo tên */}
            {/* ===================================== */}

            <div className="grid grid-cols-7 gap-2 rounded-md border p-2">
              {PRESET_FILLS.map((preset) => {
                const isSelected =
                  (selectedConfig.fill ?? "none") === preset.value;

                const isSwatchColor =
                  preset.value !== "none" && preset.value !== "currentColor";

                return (
                  <button
                    key={preset.value}
                    type="button"
                    title={preset.label}
                    aria-label={preset.label}
                    onClick={() => {
                      if (preset.value === "none") {
                        removeProperty("fill");
                        return;
                      }

                      updateConfig({
                        fill: preset.value,
                      });
                    }}
                    className={cn(
                      "flex flex-col items-center gap-1 rounded-md p-1 text-center hover:bg-accent",
                      isSelected && "bg-accent",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full border",
                        !isSwatchColor &&
                          "bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:8px_8px]",
                      )}
                      style={
                        isSwatchColor
                          ? { backgroundColor: preset.value }
                          : undefined
                      }
                    >
                      {isSelected && (
                        <Check
                          className={cn(
                            "h-3.5 w-3.5",
                            preset.value === "#ffffff" || !isSwatchColor
                              ? "text-black"
                              : "text-white",
                          )}
                        />
                      )}
                    </span>

                    <span className="w-full truncate text-[10px] leading-tight text-muted-foreground">
                      {preset.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ===================================== */}
            {/* NÂNG CAO - tự nhập mã hex / bảng chọn  */}
            {/* dành cho ai cần màu chính xác riêng    */}
            {/* ===================================== */}

            <details className="group rounded-md border">
              <summary className="cursor-pointer select-none px-3 py-2 text-xs font-medium text-muted-foreground">
                Nhập giá trị khác (nâng cao)
              </summary>

              <div className="flex gap-2 border-t p-3">
                <Input
                  id="icon-fill"
                  value={selectedConfig.fill ?? ""}
                  placeholder="none / currentColor / #fff"
                  onChange={(event) => {
                    const raw = event.target.value;

                    if (!raw) {
                      removeProperty("fill");

                      return;
                    }

                    updateConfig({
                      fill: raw,
                    });
                  }}
                />

                <input
                  type="color"
                  value={
                    typeof selectedConfig.fill === "string" &&
                    selectedConfig.fill.startsWith("#")
                      ? selectedConfig.fill
                      : "#000000"
                  }
                  onChange={(event) => {
                    updateConfig({
                      fill: event.target.value,
                    });
                  }}
                  className="h-10 w-10 cursor-pointer rounded-md border p-1"
                  title="Bảng chọn màu chi tiết"
                />
              </div>
            </details>
          </div>

          {/* ========================================= */}
          {/* OPACITY                                   */}
          {/* ========================================= */}

          <div className="grid gap-2">
            <Label htmlFor="icon-opacity">Độ trong suốt (0 - 1)</Label>

            <Input
              id="icon-opacity"
              type="number"
              min={0}
              max={1}
              step={0.1}
              value={selectedConfig.opacity ?? ""}
              placeholder="1"
              onChange={(event) => {
                const raw = event.target.value;

                if (!raw) {
                  removeProperty("opacity");

                  return;
                }

                const parsed = Number(raw);

                if (Number.isNaN(parsed)) {
                  return;
                }

                /**
                 * =========================
                 * GIỚI HẠN 0 - 1
                 * =========================
                 *
                 * `min`/`max` trên <input type="number">
                 * chỉ có tác dụng với nút mũi tên lên/xuống,
                 * người dùng vẫn có thể GÕ TAY số ngoài
                 * khoảng (VD: 2, -1, 150...). Clamp thủ công
                 * ở đây để opacity luôn nằm trong 0 - 1,
                 * tránh icon bị lỗi hiển thị (ẩn mất hoặc
                 * giá trị CSS không hợp lệ).
                 */
                const clamped = Math.min(1, Math.max(0, parsed));

                updateConfig({
                  opacity: clamped,
                });
              }}
              onBlur={(event) => {
                const raw = event.target.value;

                if (!raw) {
                  return;
                }

                const parsed = Number(raw);

                if (Number.isNaN(parsed)) {
                  removeProperty("opacity");

                  return;
                }

                const clamped = Math.min(1, Math.max(0, parsed));

                updateConfig({
                  opacity: clamped,
                });
              }}
            />
          </div>

          {/* ========================================= */}
          {/* CLASS NAME                                */}
          {/* ========================================= */}

          <div className="grid gap-2">
            <Label htmlFor="icon-class">Class name</Label>

            <Input
              id="icon-class"
              value={selectedConfig.className ?? ""}
              placeholder="text-primary"
              onChange={(event) => {
                const raw = event.target.value;

                if (!raw) {
                  removeProperty("className");

                  return;
                }

                updateConfig({
                  className: raw,
                });
              }}
            />
          </div>

          {/* ========================================= */}
          {/* ABSOLUTE STROKE WIDTH                     */}
          {/* ========================================= */}

          <div className="flex items-center justify-between rounded-md border p-3">
            <div>
              <Label>Absolute stroke width</Label>

              <p className="text-xs text-muted-foreground">
                Giữ stroke khi scale
              </p>
            </div>

            <Switch
              checked={selectedConfig.absoluteStrokeWidth ?? false}
              onCheckedChange={(checked) => {
                if (checked) {
                  updateConfig({
                    absoluteStrokeWidth: true,
                  });
                } else {
                  removeProperty("absoluteStrokeWidth");
                }
              }}
            />
          </div>

          {/* ========================================= */}
          {/* ANIMATION                                 */}
          {/* ========================================= */}

          <div className="border-t pt-4">
            <div className="mb-3">
              <p className="text-sm font-medium">Animation</p>

              <p className="text-xs text-muted-foreground">
                Tạo chuyển động cho icon
              </p>
            </div>

            <div className="grid gap-4">
              {/* ANIMATION TYPE */}

              <div className="grid gap-2">
                <Label htmlFor="icon-animation">Animation</Label>

                <select
                  id="icon-animation"
                  value={animation}
                  onChange={(event) => {
                    const next = event.target.value as IconAnimation;

                    if (next === "none") {
                      removeProperty("animation");

                      return;
                    }

                    updateConfig({
                      animation: next,
                    });
                  }}
                  className="h-10 w-full rounded-md border bg-background px-3 text-sm"
                >
                  {ICON_ANIMATIONS.map((item) => (
                    <option key={item} value={item}>
                      {ICON_ANIMATION_LABELS[item]}
                    </option>
                  ))}
                </select>
              </div>

              {/* ANIMATION OPTIONS */}

              {hasAnimationCustom && (
                <>
                  {/* DURATION */}

                  <div className="grid gap-2">
                    <Label htmlFor="animation-duration">
                      Duration (seconds)
                    </Label>

                    <Input
                      id="animation-duration"
                      type="number"
                      min={0.1}
                      max={60}
                      step={0.1}
                      value={selectedConfig.animationDuration ?? 2}
                      onChange={(event) => {
                        updateConfig({
                          animationDuration: Number(event.target.value),
                        });
                      }}
                    />
                  </div>

                  {/* DELAY */}

                  <div className="grid gap-2">
                    <Label htmlFor="animation-delay">Delay (seconds)</Label>

                    <Input
                      id="animation-delay"
                      type="number"
                      min={0}
                      max={60}
                      step={0.1}
                      value={selectedConfig.animationDelay ?? 0}
                      onChange={(event) => {
                        updateConfig({
                          animationDelay: Number(event.target.value),
                        });
                      }}
                    />
                  </div>

                  {/* ITERATION */}

                  <div className="grid gap-2">
                    <Label htmlFor="animation-iteration">Iteration</Label>

                    <select
                      id="animation-iteration"
                      value={
                        selectedConfig.animationIterationCount ?? "infinite"
                      }
                      onChange={(event) => {
                        updateConfig({
                          animationIterationCount: event.target
                            .value as IconAnimationIteration,
                        });
                      }}
                      className="h-10 w-full rounded-md border bg-background px-3 text-sm"
                    >
                      {ICON_ANIMATION_ITERATIONS.map((item) => (
                        <option key={item} value={item}>
                          {item === "infinite" ? "Infinite" : `${item} time`}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* TIMING */}

                  <div className="grid gap-2">
                    <Label htmlFor="animation-timing">Timing function</Label>

                    <select
                      id="animation-timing"
                      value={
                        selectedConfig.animationTimingFunction ?? "ease-in-out"
                      }
                      onChange={(event) => {
                        updateConfig({
                          animationTimingFunction: event.target
                            .value as IconAnimationTimingFunction,
                        });
                      }}
                      className="h-10 w-full rounded-md border bg-background px-3 text-sm"
                    >
                      {ICON_ANIMATION_TIMING_FUNCTIONS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* DIRECTION */}

                  <div className="grid gap-2">
                    <Label htmlFor="animation-direction">Direction</Label>

                    <select
                      id="animation-direction"
                      value={selectedConfig.animationDirection ?? "normal"}
                      onChange={(event) => {
                        updateConfig({
                          animationDirection: event.target
                            .value as IconAnimationDirection,
                        });
                      }}
                      className="h-10 w-full rounded-md border bg-background px-3 text-sm"
                    >
                      {ICON_ANIMATION_DIRECTIONS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* =========================================== */}
        {/* PREVIEW                                     */}
        {/* =========================================== */}

        <div className="mt-4 border-t pt-3">
          <p className="mb-2 text-sm font-medium">Preview</p>

          <div className="flex min-h-[120px] items-center justify-center overflow-hidden rounded-lg border bg-muted/30">
            <IconRenderer value={value} />
          </div>

          <div className="mt-3 rounded-md bg-muted p-3">
            <pre className="whitespace-pre-wrap break-all text-xs">
              {JSON.stringify(selectedConfig, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
