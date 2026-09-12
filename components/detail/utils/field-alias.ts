import { resolveReferenceKey } from "./reference-key";

/**
 * Tìm key thật chứa dữ liệu trong `data`, dựa trên tên field khai báo
 * trong field-groups.ts (thường theo convention "xxxId" / "xxxIds").
 *
 * Ưu tiên:
 * 1. Field tồn tại y hệt trong data -> dùng luôn (không đổi hành vi cũ).
 * 2. Field không tồn tại + có hậu tố Id/Ids -> suy luận tên số nhiều
 *    (vd "bookingTypeIds" -> "bookingTypes") và thử tìm trong data.
 * 3. Không tìm được gì -> trả lại field gốc (giữ nguyên hành vi cũ,
 *    value sẽ là undefined như trước, không phá vỡ gì).
 */
export function resolveDataKey(
  field: string,
  data: Record<string, any>,
): string {
  if (field in data) return field;

  if (/ids?$/i.test(field)) {
    const candidate = resolveReferenceKey(field);
    if (candidate !== field && candidate in data) {
      return candidate;
    }
  }

  return field;
}
