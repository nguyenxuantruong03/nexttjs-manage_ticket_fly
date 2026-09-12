/**
 * =========================
 * TẠI SAO ĐỔI SANG icon-names.json?
 * =========================
 * `lucide-react/dynamicIconImports` là 1 file chứa ~1800
 * dòng, MỖI dòng là 1 `() => import('./icons/xxx.js')` viết
 * tay. Chỉ CẦN import file này (dù chỉ để lấy `keyof typeof`
 * ở mức type, hay để enumerate tên icon ở icon-utils.ts) là
 * Next.js/webpack đã phải parse toàn bộ 1800 điểm code-split
 * đó và đưa vào dependency graph MỖI LẦN file bị chạm tới
 * (kể cả mỗi lần Fast Refresh) - đây là nguyên nhân sâu xa
 * khiến CPU của next dev luôn ở mức rất cao dù đã tối ưu
 * phần render (virtualization, debounce...).
 *
 * `icon-names.json` chỉ là DỮ LIỆU (mảng string), không phải
 * code, không có bất kỳ import()/dynamic split point nào ->
 * webpack chỉ cần đọc/inline 1 mảng JSON, gần như miễn phí.
 */
import iconNames from "../../../public/icons/icon-names.json";

export type LucideIconName = string;

/**
 * =========================
 * GUARD: file JSON bị đặt sai chỗ / import lỗi
 * =========================
 * Nếu `icon-names.json` không nằm CÙNG THƯ MỤC với file này,
 * hoặc bị bundler trả về rỗng vì lý do nào đó, code cũ sẽ
 * silently có 1 mảng RỖNG -> picker không icon nào + luôn báo
 * "Không tìm thấy icon." mà không có bất kỳ lỗi nào hiện ra
 * để biết nguyên nhân. Guard này in cảnh báo rõ ràng ra
 * console ngay khi module load, giúp phát hiện ngay lập tức.
 */
const rawIconNames = Array.isArray(iconNames) ? iconNames : [];

if (process.env.NODE_ENV !== "production" && rawIconNames.length === 0) {
  // eslint-disable-next-line no-console
  console.error(
    "[icon-types] icon-names.json rỗng hoặc không load được. " +
      "Kiểm tra lại: file icon-names.json có nằm CÙNG THƯ MỤC với " +
      "icon-types.ts không, và có đúng là 1 mảng JSON (vd: " +
      '["activity","home",...]) không.',
  );
}

export const LUCIDE_ICON_NAMES = rawIconNames as LucideIconName[];

export const ICON_ANIMATIONS = [
  "none",
  "spin",
  "pulse",
  "bounce",
  "ping",
  "shake",
  "float",
  "wiggle",
  "swing",
  "heartbeat",
  "blink",
] as const;

export type IconAnimation = (typeof ICON_ANIMATIONS)[number];

export const ICON_ANIMATION_LABELS: Record<IconAnimation, string> = {
  none: "None",
  spin: "Spin",
  pulse: "Pulse",
  bounce: "Bounce",
  ping: "Ping",
  shake: "Shake",
  float: "Float",
  wiggle: "Wiggle",
  swing: "Swing",
  heartbeat: "Heartbeat",
  blink: "Blink",
};

export const ICON_ANIMATION_TIMING_FUNCTIONS = [
  "linear",
  "ease",
  "ease-in",
  "ease-out",
  "ease-in-out",
] as const;

export type IconAnimationTimingFunction =
  (typeof ICON_ANIMATION_TIMING_FUNCTIONS)[number];

export const ICON_ANIMATION_DIRECTIONS = [
  "normal",
  "reverse",
  "alternate",
  "alternate-reverse",
] as const;

export type IconAnimationDirection = (typeof ICON_ANIMATION_DIRECTIONS)[number];

export const ICON_ANIMATION_ITERATIONS = ["1", "2", "3", "infinite"] as const;

export type IconAnimationIteration = (typeof ICON_ANIMATION_ITERATIONS)[number];
