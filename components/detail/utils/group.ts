export function groupFields(data: Record<string, any>) {
  const entries = Object.entries(data);

  return {
    general: entries.filter(
      ([key]) =>
        !["id", "createdAt", "updatedAt", "images", "image", "logo"].includes(
          key,
        ),
    ),

    media: entries.filter(([key]) => key.toLowerCase().includes("image")),

    system: entries.filter(([key]) =>
      ["id", "createdAt", "updatedAt"].includes(key),
    ),
  };
}
