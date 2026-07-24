export interface DraftData<T> {
  id: string;
  updatedAt: number;
  values: T;
}

const STORAGE_PREFIX = "draft:";

/**
 * Draft list key
 * VD:
 * draft:currency
 * draft:country
 */
const getDraftListKey = (entity: string) => `${STORAGE_PREFIX}${entity}`;

/**
 * Draft detail key
 * VD:
 * draft:currency:uuid
 */
const getDraftKey = (entity: string, draftId: string) =>
  `${STORAGE_PREFIX}${entity}:${draftId}`;

/**
 * Lấy toàn bộ draft id
 */
export function getDraftIds(entity: string): string[] {
  if (typeof window === "undefined") return [];

  const raw = localStorage.getItem(getDraftListKey(entity));

  if (!raw) return [];

  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

/**
 * Ghi danh sách draft id
 */
function saveDraftIds(entity: string, ids: string[]) {
  localStorage.setItem(getDraftListKey(entity), JSON.stringify(ids));
}

/**
 * Lấy 1 draft
 */
export function getDraft<T>(
  entity: string,
  draftId: string,
): DraftData<T> | null {
  const raw = localStorage.getItem(getDraftKey(entity, draftId));

  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Lưu draft
 */
export function saveDraft<T>(entity: string, draftId: string, values: T) {
  const draft: DraftData<T> = {
    id: draftId,
    updatedAt: Date.now(),
    values,
  };

  localStorage.setItem(getDraftKey(entity, draftId), JSON.stringify(draft));

  const ids = getDraftIds(entity);

  if (!ids.includes(draftId)) {
    ids.push(draftId);

    saveDraftIds(entity, ids);
  }
}

/**
 * Xóa draft
 */
export function deleteDraft(entity: string, draftId: string) {
  localStorage.removeItem(getDraftKey(entity, draftId));

  const ids = getDraftIds(entity).filter((x) => x !== draftId);

  saveDraftIds(entity, ids);
}

/**
 * Lấy toàn bộ draft
 */
export function getDraftList<T>(entity: string): DraftData<T>[] {
  const ids = getDraftIds(entity);

  return ids
    .map((id) => getDraft<T>(entity, id))
    .filter(Boolean) as DraftData<T>[];
}
