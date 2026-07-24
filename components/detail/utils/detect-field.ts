export type DetailFieldType =
  | "text"
  | "boolean"
  | "array"
  | "object"
  | "image"
  | "link"
  | "date";

export function detectField(field: string, value: any): DetailFieldType {
  //
  // custom theo field
  //

  if (field === "flagEmoji") {
    return "text";
  }

  if (field === "active" || field === "isDefault") {
    return "boolean";
  }

  if (field === "website" || field === "url") {
    return "link";
  }

  if (field.endsWith("At") || field.endsWith("Date")) {
    return "date";
  }

  //
  // auto detect
  //

  if (value === null || value === undefined) {
    return "text";
  }

  if (Array.isArray(value)) {
    return "array";
  }

  if (typeof value === "object") {
    return "object";
  }

  if (typeof value === "boolean") {
    return "boolean";
  }

  if (
    typeof value === "string" &&
    (value.startsWith("http") || value.startsWith("/"))
  ) {
    return "image";
  }

  return "text";
}
