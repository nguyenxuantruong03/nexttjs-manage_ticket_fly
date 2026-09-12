import { LUCIDE_ICON_NAMES, type LucideIconName } from "./icon-types";

export const ICON_OPTIONS = [...LUCIDE_ICON_NAMES].sort((a, b) =>
  a.localeCompare(b),
);

export function normalizeIconName(name: string) {
  return name.replace(/[-_]/g, " ").toLowerCase();
}

/**
 * =========================
 * SEARCH INDEX (precomputed ONCE)
 * =========================
 * Trước đây `normalizeIconName` được gọi lại cho toàn bộ
 * ~1500+ icon MỖI LẦN gõ phím (mỗi keystroke -> 1500 lần
 * replace() + toLowerCase()). Với người gõ nhanh, đây là
 * hàng chục ngàn phép string alloc/giây -> tốn CPU vô ích,
 * vì tên icon không hề đổi giữa các lần gõ.
 *
 * Giải pháp: chuẩn hoá tên 1 lần duy nhất khi module được
 * load, rồi chỉ cần chuẩn hoá query của người dùng (1 chuỗi)
 * mỗi lần tìm kiếm.
 */
const ICON_SEARCH_INDEX: ReadonlyArray<{
  name: LucideIconName;
  normalized: string;
}> = ICON_OPTIONS.map((name) => ({
  name,
  normalized: normalizeIconName(name),
}));

export function searchIcons(keyword: string) {
  const query = normalizeIconName(keyword).trim();

  if (!query) {
    return ICON_OPTIONS;
  }

  const result: LucideIconName[] = [];
  for (const entry of ICON_SEARCH_INDEX) {
    if (entry.normalized.includes(query)) {
      result.push(entry.name);
    }
  }
  return result;
}
