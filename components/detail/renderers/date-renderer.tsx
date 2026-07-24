import { formatDate } from "../utils/format";

export function DateRenderer({ value }: { value: string }) {
  return formatDate(value);
}
