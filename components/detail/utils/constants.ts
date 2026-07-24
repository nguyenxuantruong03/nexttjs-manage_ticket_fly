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
