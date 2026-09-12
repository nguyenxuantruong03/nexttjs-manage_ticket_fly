import { REFERENCE_RESOURCE_OVERRIDES } from "./constants";

function pluralize(word: string) {
  if (!word) return word;
  if (word.endsWith("s")) return word;
  if (/[^aeiou]y$/i.test(word)) return word.slice(0, -1) + "ies";
  return word + "s";
}

export function resolveReferenceKey(field: string): string {
  if (REFERENCE_RESOURCE_OVERRIDES[field]) {
    return REFERENCE_RESOURCE_OVERRIDES[field];
  }

  if (field.endsWith("Ids")) return pluralize(field.slice(0, -3));
  if (field.endsWith("Id")) return pluralize(field.slice(0, -2));

  // Field đã ở dạng resource name sẵn (vd "bookingTypes", "tags")
  // -> dùng thẳng tên field làm key tra cứu.
  return field;
}
