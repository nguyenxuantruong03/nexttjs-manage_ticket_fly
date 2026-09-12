export type DetailFieldType =
  | "image"
  | "link"
  | "boolean"
  | "date"
  | "reference"
  | "entity"
  | "array"
  | "object"
  | "text";

const IMAGE_FIELDS = new Set([
  "image",
  "images",
  "path",
  "paths",
  "thumbnail",
  "thumbnailPath",
  "thumbnailPaths",
  "avatar",
  "logo",
  "cover",
]);

const LINK_FIELDS = new Set(["url", "website", "link"]);

const DATE_FIELDS = new Set([
  "createdAt",
  "updatedAt",
  "deletedAt",
  "emailVerified",
  "banUntil",
]);

function isReferenceFieldName(field: string) {
  const lower = field.toLowerCase();
  if (lower === "id" || lower === "ids") return false;
  return /ids$/i.test(field) || /id$/i.test(field);
}

export function detectField(field: string, value: unknown): DetailFieldType {
  const normalizedField = field.toLowerCase();

  if (IMAGE_FIELDS.has(normalizedField)) return "image";
  if (LINK_FIELDS.has(normalizedField)) return "link";
  if (typeof value === "boolean") return "boolean";
  if (DATE_FIELDS.has(normalizedField)) return "date";
  if (value instanceof Date) return "date";

  // "xxxId" (số ít, string/number) -> reference đơn cần tra map
  if (
    isReferenceFieldName(field) &&
    !Array.isArray(value) &&
    typeof value !== "object"
  ) {
    return "reference";
  }

  // Mọi mảng (id thô, object đã populate, hoặc hỗn hợp) đều qua ArrayRenderer hợp nhất
  if (Array.isArray(value)) return "array";

  if (typeof value === "object" && value !== null) {
    const obj = value as Record<string, any>;
    if (typeof obj.name === "string" || typeof obj.title === "string") {
      return "entity";
    }
    return "object";
  }

  return "text";
}
