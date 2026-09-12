export interface FeatureFlag {
  id: string;
  key: string;
  description?: string | null;
  isEnabled: boolean;
  rolloutPercent: number;
  targetRegions: string[];
  createdAt: Date;
  updatedAt: Date;
}
