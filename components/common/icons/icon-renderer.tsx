"use client";

import { memo, useMemo, type CSSProperties } from "react";

import {
  getIconAnimationStyle,
  parseIconConfig,
  type IconConfig,
} from "./icon-config";
import type { LucideIconName } from "./icon-types";

/**
 * =========================
 * VÌ SAO BỎ lucide-react/dynamicIconImports?
 * =========================
 * Bản trước dùng `lazy(() => import(...))` cho TỪNG icon,
 * dựa trên `lucide-react/dynamicIconImports` - 1 file có sẵn
 * ~1800 dòng `() => import('./icons/xxx.js')`. CHỈ CẦN import
 * file đó (icon-utils.ts trước đây gọi Object.keys() trên nó)
 * đã bắt webpack/Next dev phải phân tích 1800 điểm code-split
 * này mỗi lần compile/HMR -> đây mới là nguồn tiêu CPU LỚN
 * NHẤT, độc lập với việc người dùng có mở picker hay không.
 *
 * GIẢI PHÁP TRIỆT ĐỂ: dùng SVG SPRITE tĩnh của chính lucide
 * (gói `lucide-static`, file `sprite.svg`) đặt trong
 * `public/icons/lucide-sprite.svg`. Đây là 1 file tĩnh, KHÔNG
 * đi qua webpack/module graph, trình duyệt tải 1 LẦN DUY NHẤT
 * rồi cache vĩnh viễn. Render icon chỉ còn là:
 *
 *   <svg><use href="/icons/lucide-sprite.svg#icon-name" /></svg>
 *
 * -> Không còn dynamic import(), không lazy(), không Suspense,
 * không IntersectionObserver, không hàng đợi concurrency nào
 * cần thiết nữa - vì không có gì phải "tải" ở tầng JS cả.
 *
 * LƯU Ý TRIỂN KHAI: copy file `sprite.svg` từ
 * `node_modules/lucide-static/sprite.svg` vào
 * `public/icons/lucide-sprite.svg` trong project Next.js của
 * bạn (làm lại mỗi khi nâng cấp version lucide). File đính
 * kèm trong output đã có sẵn bản build hiện tại.
 */
const SPRITE_URL = "/icons/lucide-sprite.svg";

interface IconRendererProps {
  value?: string | null;
  name?: string | null;
  size?: number | string;
  strokeWidth?: number;
  color?: string;
  fill?: string;
  absoluteStrokeWidth?: boolean;
  className?: string;
  style?: CSSProperties;
  /**
   * Giữ lại prop này chỉ để KHÔNG phá vỡ các nơi khác trong
   * app đang truyền `eager` vào IconRenderer. Với sprite thì
   * việc "tải" gần như tức thời nên prop này không còn tác
   * dụng thực sự, nhưng vẫn được chấp nhận (no-op) để tương
   * thích ngược.
   */
  eager?: boolean;
}

function IconRendererComponent({
  value,
  name,
  size,
  strokeWidth,
  color,
  fill,
  absoluteStrokeWidth,
  className,
  style,
}: IconRendererProps) {
  const config: IconConfig | null = useMemo(() => {
    if (value) {
      const parsed = parseIconConfig(value);
      if (parsed) return parsed;
    }
    if (name) {
      return parseIconConfig(name);
    }
    return null;
  }, [value, name]);

  if (!config) {
    return null;
  }

  const iconSize = size ?? config.size ?? 20;
  const resolvedStrokeWidth = Number(strokeWidth ?? config.strokeWidth ?? 2);
  const resolvedColor = color ?? config.color ?? "currentColor";
  const resolvedFill = fill ?? config.fill ?? "none";
  const resolvedClassName = className ?? config.className;

  const animationStyle = getIconAnimationStyle(config);

  const wrapperStyle: CSSProperties = {
    ...animationStyle,
    ...style,
    ...(config.opacity !== undefined ? { opacity: config.opacity } : {}),
  };

  /**
   * `absoluteStrokeWidth` của lucide-react quy đổi stroke-width
   * theo kích thước 24px gốc để nét vẽ không "phình" khi icon
   * bị scale to/nhỏ. Công thức: strokeWidth * (24 / size).
   */
  const numericSize = typeof iconSize === "number" ? iconSize : 24;
  const finalStrokeWidth =
    (absoluteStrokeWidth ?? config.absoluteStrokeWidth) && numericSize
      ? (resolvedStrokeWidth * 24) / numericSize
      : resolvedStrokeWidth;

  return (
    <span
      className={cnFallback("inline-flex shrink-0", resolvedClassName)}
      style={wrapperStyle}
      aria-hidden="true"
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={resolvedFill}
        stroke={resolvedColor}
        strokeWidth={finalStrokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <use
          href={`${SPRITE_URL}#${(config as { name: LucideIconName }).name}`}
        />
      </svg>
    </span>
  );
}

/**
 * Tránh phải import thêm `cn`/clsx vào file này (giữ file
 * hoàn toàn độc lập, dễ tái sử dụng ở project khác).
 */
function cnFallback(base: string, extra?: string) {
  return extra ? `${base} ${extra}` : base;
}

export const IconRenderer = memo(IconRendererComponent);
IconRenderer.displayName = "IconRenderer";
