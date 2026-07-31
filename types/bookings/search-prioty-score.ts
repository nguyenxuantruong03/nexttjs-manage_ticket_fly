export interface SelectOption {
  value: string;
  label: string;
}

export const SEARCH_PRIORITY_OPTIONS: SelectOption[] = [
  { value: "0", label: "None" },
  { value: "10", label: "Low" },
  { value: "20", label: "Recommended" },
  { value: "40", label: "Featured" },
  { value: "60", label: "Trending" },
  { value: "80", label: "Top" },
  { value: "100", label: "Pinned" },
  { value: "120", label: "Sponsored" },
];
