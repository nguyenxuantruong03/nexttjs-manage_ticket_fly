export function formatLabel(value: string) {
  return value.replace(/([A-Z])/g, " $1").replace(/^./, (x) => x.toUpperCase());
}

export function formatDate(value: string | Date) {
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}
