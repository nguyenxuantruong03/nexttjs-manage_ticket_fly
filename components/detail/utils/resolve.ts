import { formatLabel } from "./format";

export function resolveImage(data: Record<string, any>) {
  if (typeof data.image === "string") return data.image;

  if (typeof data.logo === "string") return data.logo;

  if (typeof data.thumbnail === "string") return data.thumbnail;

  if (typeof data.flag === "string") return data.flag;

  if (Array.isArray(data.images) && data.images.length) {
    const first = data.images[0];

    return typeof first === "string" ? first : first.url;
  }

  return undefined;
}

export function resolveSubtitle(data: Record<string, any>) {
  const fields = [
    "code",

    "iataCode",

    "icaoCode",

    "slug",

    "symbol",

    "legalName",
  ];

  for (const field of fields) {
    if (data[field]) return data[field];
  }

  return undefined;
}

export function getQuickInfo(data: Record<string, any>) {
  const priority = ["name", "code", "country", "city", "status", "createdAt"];

  return priority

    .filter((key) => data[key])

    .slice(0, 4)

    .map((key) => ({
      label: formatLabel(key),

      value:
        typeof data[key] === "object"
          ? (data[key].name ?? "-")
          : String(data[key]),
    }));
}
