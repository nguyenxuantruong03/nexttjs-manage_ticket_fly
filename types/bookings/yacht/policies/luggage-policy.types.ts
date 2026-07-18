
export interface YachtLuggagePolicy {
  id: string;

  policiesId: string;

  allowed: boolean;

  maxWeightKg?: number | null;

  maxPieces?: number | null;

  oversizedAllowed?: boolean | null;

  note?: string | null;
}