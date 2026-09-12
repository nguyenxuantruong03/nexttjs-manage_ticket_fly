export const REFERENCE_RESOURCE_OVERRIDES: Record<string, string> = {
  tagIds: "tags",
  bookingTypesIds: "bookingTypes",
  // categoryIds: "categories", // ví dụ khi số nhiều bất quy tắc
};

export type DetailTab = {
  key: string;
  label: string;
  fields: string[];
};

export type DetailConfig = {
  title?: string;

  imageFields?: string[];

  hiddenFields?: string[];

  tabs?: DetailTab[];
};
